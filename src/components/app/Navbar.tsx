"use client"

import React, {useState} from "react";
import {
    Button,
    Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
    Link,
    Navbar as HeroUiNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu, NavbarMenuItem,
    NavbarMenuToggle
} from "@heroui/react";
import Image from "next/image";
import { IoChevronDownOutline as ChevronDownIcon } from "react-icons/io5";
import { FaRegSquare as SquareIcon } from "react-icons/fa6";
import { TbSphere as SphereIcon } from "react-icons/tb";

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
            isBlurred={false}
            className="fixed">

            <NavbarBrand className="h-full">
                <Link href="/" className="h-full">
                    <Image
                        src={complexifyBrandImg}
                        alt="Complexify"
                        className="h-full w-auto p-3 select-none"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="center" className="hidden sm:flex items-center gap-12">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                radius="sm"
                                endContent={<ChevronDownIcon />}
                                className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent">
                                Graphing Tools
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem
                            key="domain-coloring"
                            href="/domain-coloring"
                            description="Standard visualization technique">
                            Domain Coloring
                        </DropdownItem>
                        <DropdownItem
                            key="riemann-sphere"
                            href="/riemann-sphere"
                            description="Stereographic projection of domain coloring">
                            Riemann Sphere
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent justify="end" className="sm:hidden">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className="pt-5">
                <NavbarMenuItem>
                    <h1 className="font-bold">
                        Graphing Tools
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
            </NavbarMenu>

        </HeroUiNavbar>
    );
}

export default Navbar;