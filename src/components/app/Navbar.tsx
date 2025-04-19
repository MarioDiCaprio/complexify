"use client"

import React from "react";
import {Link, Navbar as HeroUiNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";


const Navbar: React.FC = () => {
    return (
        <HeroUiNavbar height="3rem" className="fixed w-full bg-background flex items-center justify-between">
            <NavbarBrand>
                <span>Complexify</span>
            </NavbarBrand>
            <NavbarContent justify="center" className="flex items-center gap-12">
                <NavbarItem>
                    <Link href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/domain-coloring">
                        Domain Coloring
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/riemann-sphere">
                        Riemann Sphere
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </HeroUiNavbar>
    );
}

export default Navbar;