import React, {ReactNode} from "react";
import Editor from "@/components/app/(graphing)/Editor";
import EquationsErrorHandler from "@/components/app/(graphing)/EquationsErrorHandler";
import Navbar from "@/components/app/Navbar";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <>
        <Navbar />
        <main className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <Editor />
            <EquationsErrorHandler>
                {children}
            </EquationsErrorHandler>
        </main>
    </>
);

export default Layout;