import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9]">
            <nav className="flex sticky justify-between items-center h-[8vh] mx-auto w-[70vw]">
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px]">
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <h3 className="text-[16px] font-bold">Pony Party</h3>
                            <p className="text-[10px]">IV HYDRATION</p>
                        </Link>
                    </li>
                </ul>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[12px] py-[4px] mx-[6px] rounded-full">
                        <Link href="/">In-Home Services</Link>
                    </li>
                    <li className="inline-block text-black text-[12px] py-[4px] mx-[8px] rounded-full">
                        <Link href="/Projects" className="Projects">Shipped To You</Link>
                    </li>
                    <li className="inline-block text-black text-[12px] py-[4px] mx-[8px] rounded-full">
                        <Link href="/AboutMe" className="AboutMe">Community</Link>
                    </li>
                    <li className="inline-block text-black text-[12px] py-[4px] mx-[8px] rounded-full">
                        <Link href="/Contact" className="Contact">Memberships</Link>
                    </li>
                    <li className="inline-block text-black text-[12px] py-[4px] mx-[8px] rounded-full">
                        <Link href="/Contact" className="Contact">About Us</Link>
                    </li>
                </ul>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[12px] py-[4px] px-[10px] mx-[5px] rounded-full">
                        <Link href="/pages/login-to-account">Log in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
