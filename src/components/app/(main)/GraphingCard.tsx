"use client"

import React from "react";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {addToast, Button, Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import { IoCopy as CopyIcon } from "react-icons/io5";
import {useStore} from "@/zustand/store";


interface GraphingCardProps {
    title: string;
    equations: string[];
    image: string | StaticImport;
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
        <li>
            <Card as="article" className="">
                <CardHeader as="header">
                    <h3 className="font-bold text-xl">
                        {props.title}
                    </h3>
                </CardHeader>
                <CardBody className="py-0">
                    <Image
                        src={props.image}
                        alt=""
                        aria-hidden
                        className="w-full h-[300px] rounded object-cover select-none pointer-events-none"
                    />
                </CardBody>
                <CardFooter as="footer" className="justify-end">
                    <Button color="primary" startContent={<CopyIcon />} onPress={copy}>
                        Copy
                    </Button>
                </CardFooter>
            </Card>
        </li>
    );
}

export default GraphingCard;