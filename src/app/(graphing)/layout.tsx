import React, {ReactNode} from "react";
import Editor from "@/components/app/(graphing)/Editor";
import EquationsErrorHandler from "@/components/app/(graphing)/EquationsErrorHandler";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <>
        <Editor />
        <EquationsErrorHandler>
            {children}
        </EquationsErrorHandler>
    </>
);

export default Layout;