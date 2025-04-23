"use client"

import React from "react";
import {Link} from "@heroui/react";

const Footer: React.FC = () => (
    <footer className="w-full py-12 px-2 mt-auto border-t border-gray-200">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between gap-3">
            <section className="">
                <h1>
                    About
                </h1>
                <ul className="list-none">
                    <li>
                        <Link href="/">
                            Impressum
                        </Link>
                    </li>
                    <li>
                        <Link href="https://mariodicaprio.com">
                            Author
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    </footer>
);

export default Footer;