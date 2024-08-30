import React from "react";
import "@/style_sheets/header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-[rgb(219,158,179)]">
            <nav className="flex sticky justify-between items-center h-[8vh] mx-auto">
                <ul className="flex p-0 items-center">
                    <li>
                        <Link href="/">
                            <h3>Pony Party</h3>
                        </Link>
                    </li>
                </ul>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/Projects" className="Projects">Projects</Link>
                    </li>
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/AboutMe" className="AboutMe">About</Link>
                    </li>
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/Contact" className="Contact">Contact Us</Link>
                    </li>
                </ul>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/Login">
                            <button>Log in</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
