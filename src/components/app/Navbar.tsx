"use client"

import React, {useState} from "react";
import {
    Link,
    Navbar as HeroUiNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu, NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import Image from "next/image";

import complexifyBrandImg from "../../../public/img/logo/complexify-brand-black.webp";


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <HeroUiNavbar
            height="4rem"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            isBordered
            className="fixed w-full bg-background flex items-center justify-between">

            <NavbarBrand className="h-full">
                <Link href="/" className="h-full">
                    <Image
                        src={complexifyBrandImg}
                        alt="Complexify"
                        className="h-full w-auto p-2 select-none"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="center" className="hidden sm:flex items-center gap-12">
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

            <NavbarContent justify="end" className="sm:hidden">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className="pt-5 bg-background">
                <NavbarMenuItem>
                    <h1 className="font-bold">
                        Graphing
                    </h1>
                    <ul className="list-none">
                        <li>
                            <Link href="/domain-coloring" onPress={closeMenu}>
                                Domain Coloring
                            </Link>
                        </li>
                        <li>
                            <Link href="/riemann-sphere" onPress={closeMenu}>
                                Riemann Sphere
                            </Link>
                        </li>
                    </ul>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <h1 className="font-bold">
                        About
                    </h1>
                    <ul className="list-none">
                        <li>
                            <Link href="/impressum" onPress={closeMenu}>
                                Impressum
                            </Link>
                        </li>
                        <li>
                            <Link href="https://mariodicaprio.com" target="_blank">
                                Author
                            </Link>
                        </li>
                    </ul>
                </NavbarMenuItem>
            </NavbarMenu>

        </HeroUiNavbar>
    );
}

export default Navbar;