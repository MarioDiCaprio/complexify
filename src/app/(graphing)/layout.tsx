import React, {ReactNode} from "react";
import Editor from "@/components/app/(graphing)/Editor";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <>
        <Editor />
        {children}
    </>
);

export default Layout;