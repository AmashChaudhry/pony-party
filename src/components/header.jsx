"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        <header className="sticky top-0 bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9]">
            <nav className="flex sticky justify-between items-center h-[8vh] mx-auto lg:w-[70vw]">
                <button className="text-[12px] p-[15px] mx-[15px] bg-black rounded-md text-white lg:hidden" name="menu" onClick={toggleMenu}>{menuOpen ? "Close" : "Menu"}</button>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px]">
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <h3 className="text-[16px] font-bold">Pony Party</h3>
                            <p className="text-[10px]">IV HYDRATION</p>
                        </Link>
                    </li>
                </ul>
                <div className={`lg:static absolute lg:bg-transparent bg-white border-b border-gray-300 lg:min-h-fit min-h-fit left-0 ${menuPosition} lg:w-auto w-full flex items-center px-5 py-[20px]`}>
                    <ul className="flex lg:flex-row flex-col lg:p-0 lg:items-center lg:gap-0 gap-8">
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/">In-Home Services</Link>
                        </li>
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/Projects" className="Projects">Shipped To You</Link>
                        </li>
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/AboutMe" className="AboutMe">Community</Link>
                        </li>
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="pages/memberships" className="Contact">Memberships</Link>
                        </li>
                        <li className="inline-block text-black  text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/Contact" className="Contact">About Us</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] mx-[15px]">
                        <Link href="/pages/login-to-account">Log in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
