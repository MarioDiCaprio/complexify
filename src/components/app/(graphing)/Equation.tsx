"use client"

import React, {useEffect} from "react";
import dynamic from "next/dynamic";
import {Reorder, useDragControls} from "framer-motion";
import {MathField} from "react-mathquill";
import {Button, Card} from "@heroui/react";
import { FaRegTrashAlt as TrashIcon } from "react-icons/fa";
import { GoGrabber as ReorderIcon } from "react-icons/go";

const EditableMathField = dynamic(
    () => import("react-mathquill").then(m => m.EditableMathField),
    { ssr: false }
);


interface EquationProps {
    index: number;
    latex: string;
    onChange(index: number, latex: string): void;
    onDelete(index: number): void;
}

const Equation: React.FC<EquationProps> = (props) => {
    const dragControls = useDragControls();

    // add mathquill styles on mount
    useEffect(() => {
        import("react-mathquill").then(m => {
            m.addStyles()
        });
    }, []);

    function onChange(mathField: MathField) {
        props.onChange(props.index, mathField.latex());
    }

    function onDelete() {
        props.onDelete(props.index);
    }

    return (
        <Reorder.Item key={props.index} value={props.index} dragListener={false} dragControls={dragControls}>
            <Card className="w-full min-h-[55px] mb-5 py-1 flex flex-row items-center justify-between">

                {/* Reordering handle */}
                <div
                    className="px-5 text-3xl text-black/50 cursor-grab select-none"
                    onPointerDown={e => dragControls.start(e)}>
                    <ReorderIcon />
                </div>

                {/* MathQuill field */}
                <EditableMathField
                    latex={props.latex}
                    onChange={onChange}
                    config={{
                        autoCommands: 'pi sqrt Re Im',
                        autoOperatorNames: 'sin cos tan sinh cosh tanh sec cot csc cis log ln'
                    }}
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

                {/* Delete equation */}
                <div className="px-2">
                    <Button onPress={onDelete} isIconOnly variant="light" color="danger">
                        <TrashIcon />
                    </Button>
                </div>

            </Card>
        </Reorder.Item>
    );
}

export default Equation;