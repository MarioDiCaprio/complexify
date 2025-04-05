"use client"

import React, {useEffect} from "react";
import dynamic from "next/dynamic";

const EditableMathField = dynamic(
    () => import("react-mathquill").then(m => m.EditableMathField),
    { ssr: false }
);


interface EquationProps {
    index: number;
    latex: string;
}

const Equation: React.FC<EquationProps> = (props) => {
    // add mathquill styles on mount
    useEffect(() => {
        import("react-mathquill").then(m => {
            m.addStyles()
        });
    }, []);

    return (
        <div className="w-full min-h-[55px] flex items-center justify-between border border-b-black">
            <EditableMathField
                latex={props.latex}
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
        </div>
    );
}

export default Equation;