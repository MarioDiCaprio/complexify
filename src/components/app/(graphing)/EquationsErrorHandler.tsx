"use client"

import React, {ReactNode} from "react";
import {useStore} from "@/zustand/store";
import {Alert} from "@heroui/alert";

const EquationsErrorHandler: React.FC<{ children: ReactNode }> = ({ children }) => {
    const error = useStore(state => state.parsedEquations.error);

    if (error) {
        return (
            <div className="fixed top-0 left-0 w-screen h-screen p-5 pt-[6rem] flex justify-end items-start md:items-end">
                <div className="w-full md:w-fit">
                    <Alert
                        color="danger"
                        title={error.message}
                    />
                </div>
            </div>
        );
    }

    return children;
}

export default EquationsErrorHandler;