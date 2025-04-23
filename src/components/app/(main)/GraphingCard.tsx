"use client"

import React from "react";
import {addToast, Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import { IoCopy as CopyIcon } from "react-icons/io5";
import {useStore} from "@/zustand/store";


interface GraphingCardProps {
    title: string;
    equations: string[];
}


const GraphingCard: React.FC<GraphingCardProps> = (props) => {
    const setEquations = useStore(state => state.setEquations);

    function copy() {
        setEquations(props.equations);
        addToast({
            title: "Copied to editor",
            color: "primary"
        });
    }

    return (
        <Card className="p-2">
            <CardHeader>
                <h2 className="font-bold text-xl">
                    {props.title}
                </h2>
            </CardHeader>
            <CardBody>
                <div className="w-full h-[300px] bg-gray-600 rounded">

                </div>
            </CardBody>
            <CardFooter className="justify-end">
                <Button color="primary" startContent={<CopyIcon />} onPress={copy}>
                    Copy
                </Button>
            </CardFooter>
        </Card>
    );
}

export default GraphingCard;