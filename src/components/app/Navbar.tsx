"use client"

import React from "react";
import Link from "next/link";


const Navbar: React.FC = () => {
    return (
        <nav className="w-full h-12 p-5 flex items-center justify-between">
            <div>
                <span>
                    Complexify
                </span>
            </div>
            <div>
                <ul className="list-none flex gap-12">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/domain-coloring">
                            Domain Coloring
                        </Link>
                    </li>
                    <li>
                        <Link href="/riemann-sphere">
                            Riemann Sphere
                        </Link>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </nav>
    );
}

export default Navbar;