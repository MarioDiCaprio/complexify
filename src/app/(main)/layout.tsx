import React, {ReactNode} from "react";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="w-full mt-[4rem] py-5 px-2">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;