import React, {ReactNode} from "react";
import Editor from "@/components/app/(graphing)/Editor";


const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="grow grid grid-cols-4">
        <div className="border border-black">
            <Editor />
        </div>
        <div className="col-span-3 border border-black">
            {children}
        </div>
    </div>
);

export default Layout;