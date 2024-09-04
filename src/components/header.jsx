"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState("top-[-100vh]");

    useEffect(() => {
        if (menuOpen) {
            setMenuPosition("top-[8vh]");
        } else {
            setMenuPosition("top-[-100vh]");
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky top-0 bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] z-50">
            <nav className="flex sticky justify-between items-center h-[8vh] mx-auto w-full lg:max-w-[1200px]">
                <button className="text-black text-[28px] m-[20px] lg:hidden" name="menu" onClick={toggleMenu}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px]">
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <div className="relative w-[120px] h-[6vh]">
                                <Image
                                    src="/Logo-1.png"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    alt="Dehydration IV Treatment"
                                />
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className={`lg:static absolute lg:bg-transparent bg-white border-b border-gray-300 lg:min-h-fit min-h-fit left-0 ${menuPosition} lg:w-auto w-full flex items-center px-5 py-[20px]`}>
                    <ul className="flex lg:flex-row flex-col lg:p-0 lg:items-center lg:gap-0 gap-5">
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/in-home-services">In-Home Services</Link>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/AboutMe">Community</Link>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/memberships">Memberships</Link>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/Contact">Locations</Link>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/Contact">About Us</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] font-bold m-[20px]">
                        <Link href="/pages/login-to-account">Log in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
