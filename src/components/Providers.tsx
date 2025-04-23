"use client"

import React, {ReactNode} from "react";
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import {useRouter} from "next/navigation";


// Only if using TypeScript
declare module "@react-types/shared" {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
    }
}


const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();
    return (
        <HeroUIProvider navigate={router.push}>
            <ToastProvider />
            {children}
        </HeroUIProvider>
    )
}

export default Providers;