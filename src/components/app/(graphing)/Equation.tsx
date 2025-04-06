"use client"

import React, {useEffect} from "react";
import dynamic from "next/dynamic";
import {useStore} from "@/zustand/store";
import {MathField} from "react-mathquill";
import {Button} from "@heroui/react";
import { FaRegTrashAlt as TrashIcon } from "react-icons/fa";

const EditableMathField = dynamic(
    () => import("react-mathquill").then(m => m.EditableMathField),
    { ssr: false }
);


interface EquationProps {
    index: number;
    latex: string;
    onDelete(): void;
}

const Equation: React.FC<EquationProps> = (props) => {
    const updateCachedEquation = useStore(state => state.updateEquation);
    const deleteEquation = useStore(state => state.deleteEquation);

    // add mathquill styles on mount
    useEffect(() => {
        import("react-mathquill").then(m => {
            m.addStyles()
        });
    }, []);

    function dispatchCacheUpdate(mathField: MathField) {
        updateCachedEquation(props.index, mathField.latex());
    }

    function deleteThisEquation() {
        deleteEquation(props.index);
        props.onDelete();
    }

    return (
        <div className="w-full min-h-[55px] flex items-center justify-between border-b border-slate-300">
            <div className="px-5">
                {props.index}
            </div>
            <EditableMathField
                latex={props.latex}
                onChange={dispatchCacheUpdate}
                style={{
                    width: "100%",
                    minHeight: "55px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                }}
            />
            <div className="px-2">
                <Button onPress={deleteThisEquation} isIconOnly variant="light" color="danger">
                    <TrashIcon />
                </Button>
            </div>
        </div>
    );
}

export default Equation;