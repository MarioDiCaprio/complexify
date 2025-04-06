"use client"

import React, {useEffect, useState} from "react";
import {useStore} from "@/zustand/store";
import Equation from "@/components/app/(graphing)/Equation";
import {Button} from "@heroui/react";
import { motion } from "framer-motion";
import { IoMdAdd as AddIcon } from "react-icons/io";
import { IoMdSettings as SettingsIcon } from "react-icons/io";
import { FaCamera as CameraIcon } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft as CloseIcon } from "react-icons/md";


const Editor: React.FC = () => {
    const [open, setOpen] = useState(true);
    function openEditor() {
        setOpen(true);
    }
    function closeEditor() {
        setOpen(false);
    }

    const [equations, setEquations] = useState<string[]>([]);
    const [didLoadCache, setDidLoadCache] = useState<boolean>(false);
    const cachedEquations = useStore(state => state.equations);
    const pushEquation = useStore(state => state.pushEquation);
    function invalidateCachedEquations() {
        setDidLoadCache(false);
    }
    // load equations from cache on mount
    useEffect(() => {
        if (!didLoadCache) {
            setEquations(cachedEquations);
            setDidLoadCache(true);
        }
    }, [cachedEquations, didLoadCache]);

    function addEquation() {
        pushEquation('');
        invalidateCachedEquations();
    }

    return (
        <div className="">
            {/* Button to open editor */}
            <Button onPress={openEditor} color="primary" className="z-[5] m-5 shadow-xl">
                Open Editor
            </Button>

            {/* Editor */}
            <motion.section
                animate={{ x: open? '0%' : '-100%' }}
                transition={{ duration: 0.3, type: 'tween' }}
                className="
                    z-[10] fixed top-0 left-0 w-full max-w-[500px] h-full pt-12
                    flex flex-col bg-white
                    border border-r-zinc-300 shadow-2xl">

                {/* Toolbar */}
                <nav className="w-full px-3 py-2 flex items-center justify-between gap-5">
                    <div className="h-full flex items-center gap-3">
                        <Button onPress={addEquation} isIconOnly variant="light" color="primary" className="text-xl">
                            <AddIcon />
                        </Button>
                    </div>
                    <div className="h-full flex items-center gap-3">
                        <Button isIconOnly variant="light" className="text-xl">
                            <CameraIcon />
                        </Button>
                        <Button isIconOnly variant="light" className="text-xl">
                            <SettingsIcon />
                        </Button>
                        <Button onPress={closeEditor} isIconOnly variant="light" color="primary" className="text-xl">
                            <CloseIcon />
                        </Button>
                    </div>
                </nav>

                {/* Equations */}
                <div className="w-full grow overflow-y-auto">
                    {equations.map((latex, index) => (
                        <Equation key={index} index={index} latex={latex} onDelete={invalidateCachedEquations} />
                    ))}
                    {cachedEquations.map((latex, index) => (
                        <div key={index}>
                            {latex}
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

export default Editor;