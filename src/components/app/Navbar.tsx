"use client"

import React from "react";
import {Link, Navbar as HeroUiNavbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import Image from "next/image";

import complexifyBrandImg from "../../../public/img/logo/complexify-brand-black.webp";


const Navbar: React.FC = () => {
    return (
        <HeroUiNavbar height="3rem" className="fixed w-full bg-background flex items-center justify-between">
            <NavbarBrand className="h-full">
                <Link href="/" className="h-full">
                    <Image
                        src={complexifyBrandImg}
                        alt="Complexify"
                        className="h-full w-auto p-2 select-none"
                    />
                </Link>
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