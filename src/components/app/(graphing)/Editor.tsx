"use client"

import React, {useEffect, useState} from "react";
import {useStore} from "@/zustand/store";
import Equation from "@/components/app/(graphing)/Equation";
import {Button, useDisclosure} from "@heroui/react";
import { IoMdAdd as AddIcon } from "react-icons/io";
import { IoMdSettings as SettingsIcon } from "react-icons/io";
import { FaCamera as CameraIcon } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft as ArrowLeftIcon } from "react-icons/md";
import { MdKeyboardDoubleArrowDown as ArrowDownIcon } from "react-icons/md";
import {Reorder} from "framer-motion";
import EditorSettings from "@/components/app/(graphing)/EditorSettings";
import CanvasSnapshot from "@/components/app/(graphing)/CanvasSnapshot";


const Editor: React.FC = () => {

    //////////////////////////////////////////////////////////////////

    const [open, setOpen] = useState(true);

    function openEditor() {
        setOpen(true);
    }

    function closeEditor() {
        setOpen(false);
    }

    //////////////////////////////////////////////////////////////////

    const [equationsOrder, setEquationsOrder] = useState<number[]>([]);
    const [equations, setEquations] = useState<string[]>([]);

    function pushEquation() {
        const newEquations = [...equations, ''];
        setEquations(newEquations);
        // new order remains the same, but with the new maximum value appended
        const newOrder = [...equationsOrder, newEquations.length - 1];
        setEquationsOrder(newOrder);
    }

    function updateEquation(index: number, latex: string) {
        const newEquations = equations.map((oldLatex, i) => (i == index)? latex : oldLatex);
        setEquations(newEquations);
        // (order doesn't change here)
    }

    function deleteEquation(index: number) {
        const newEquations = equations.toSpliced(index, 1);
        setEquations(newEquations);
        // calculate new order such that all values are minimal
        // 1. remove the popped index
        // 2. all indexes that came after have their value decremented
        const deletedOrder = equationsOrder[index];
        const newOrder = equationsOrder
            .filter(i => i !== deletedOrder)
            .map(i => (i > deletedOrder) ? i - 1 : i);
        setEquationsOrder(newOrder);
    }

    function reorderEquations(newOrder: number[]) {
        // store new equations in cache
        const newEquations = newOrder.map(index => equations[index]);
        setCachedEquations(newEquations);
        // propagate order update
        setEquationsOrder(newOrder);
        // do NOT update equations in this component (setEquations)!
    }

    //////////////////////////////////////////////////////////////////

    const [didLoadCache, setDidLoadCache] = useState<boolean>(false);
    const cachedEquations = useStore(state => state.equations);
    const setCachedEquations = useStore(state => state.setEquations);

    // load equations from cache on mount
    useEffect(() => {
        if (!didLoadCache) {
            setEquations(cachedEquations);
            setEquationsOrder(cachedEquations.map((_val, idx) => idx));
            setDidLoadCache(true);
        }
    }, [cachedEquations, didLoadCache]);

    // update cached equations whenever changes are made in the editor
    useEffect(() => {
        setCachedEquations(equations);
    }, [equations, setCachedEquations]);

    //////////////////////////////////////////////////////////////////

    // editor settings modal
    const {isOpen: isSettingsOpen, onOpen: onSettingsOpen, onOpenChange: onSettingsOpenChange} = useDisclosure();

    // canvas snapshot modal
    const {isOpen: isSnapshotOpen, onOpen: onSnapshotOpen, onOpenChange: onSnapshotOpenChange} = useDisclosure();

    //////////////////////////////////////////////////////////////////

    return (
        <>
            {/* Button to open editor */}
            <Button
                onPress={openEditor}
                color="primary"
                className={`z-[5] fixed top-[4rem] left-0 m-5 shadow-xl ${open? 'hidden' : 'block'}`}>
                Open Editor
            </Button>

            {/* Editor */}
            <section
                className={`
                    z-[10] fixed top-2/3 md:top-0 left-0 w-full md:max-w-[500px] h-1/3 md:h-full md:pt-[4rem]
                    flex flex-col bg-background shadow-2xl duration-300
                    ${open? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-y-0 md:-translate-x-full"}
                `}>

                {/* Toolbar */}
                <nav className="w-full px-3 py-2 flex items-center justify-between gap-5">

                    {/* Add new equation */}
                    <div className="h-full flex items-center gap-3">
                        <Button onPress={pushEquation} isIconOnly variant="light" color="primary" className="text-xl">
                            <AddIcon />
                        </Button>
                    </div>
                    <div className="h-full flex items-center gap-3">

                        {/* Snapshot */}
                        <Button onPress={onSnapshotOpen} isIconOnly variant="light" className="text-xl">
                            <CameraIcon />
                        </Button>

                        {/* Settings */}
                        <Button onPress={onSettingsOpen} isIconOnly variant="light" className="text-xl">
                            <SettingsIcon />
                        </Button>

                        {/* Close editor */}
                        <Button onPress={closeEditor} isIconOnly variant="light" color="primary" className="text-xl">
                            <ArrowDownIcon className="md:hidden"/>
                            <ArrowLeftIcon className="hidden md:block"/>
                        </Button>

                    </div>
                </nav>

                {/* Equations */}
                <div className="w-full max-h-full grow p-5 overflow-scroll select-none">
                    <Reorder.Group axis="y" values={equationsOrder} onReorder={reorderEquations}>
                        {equationsOrder.map((order) => (
                            <Equation
                                key={order}
                                index={order}
                                latex={equations[order]}
                                onChange={updateEquation}
                                onDelete={deleteEquation}
                            />
                        ))}
                    </Reorder.Group>
                </div>
            </section>

            <EditorSettings isOpen={isSettingsOpen} onOpenChange={onSettingsOpenChange} />

            <CanvasSnapshot isOpen={isSnapshotOpen} onOpenChange={onSnapshotOpenChange} />
        </>
    );
}

export default Editor;