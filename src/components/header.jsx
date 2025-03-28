'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState("top-[-100vh]");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        try {
            const response = await fetch('/api/current-user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userData = await response.json();
            setUser(userData.data);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if (menuOpen) {
            setMenuPosition("top-[80px]");
        } else {
            setMenuPosition("top-[-100vh]");
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        if (menuOpen) {
            toggleMenu();
        }
    };

    return (
        <header className="sticky top-0 bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] w-full z-50">
            <nav className="flex sticky justify-between items-center h-[80px] mx-auto w-full lg:max-w-[1200px]">
                <button className="text-black text-[28px] m-[20px] lg:hidden" name="menu" onClick={toggleMenu}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[14px] py-[4px] px-[10px] mx-[5px]">
                        <Link href="/" onClick={handleLinkClick} className="flex flex-col items-center justify-center">
                            <div className="relative w-[140px] h-[60px]">
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
                <div className={`lg:static absolute bg-white border-b border-gray-300 lg:border-transparent lg:bg-transparent lg:min-h-fit min-h-fit left-0 ${menuPosition} lg:w-auto w-full flex items-center px-5 py-[20px]`}>
                    <ul className="flex lg:flex-row flex-col w-full lg:p-0 lg:items-center lg:gap-0 gap-[10px]">
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/in-home-services" onClick={handleLinkClick}>In-Home Services</Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[5px] lg:h-0 lg:mt-0'></div>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/blogs" onClick={handleLinkClick}>Blogs</Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[5px] lg:h-0 lg:mt-0'></div>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/contact-us" onClick={handleLinkClick}>Contact Us</Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[5px] lg:h-0 lg:mt-0'></div>
                        </li>
                        <li className="inline-block text-black text-[14px] lg:text-[12px] py-[4px] mx-[6px]">
                            <Link href="/pages/about-us" onClick={handleLinkClick}>About Us</Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[5px] lg:h-0 lg:mt-0'></div>
                        </li>
                    </ul>
                </div>
                <ul className="flex p-0 items-center">
                    <li className="inline-block text-black text-[12px] m-[20px]">
                        {
                            loading ? (
                                <div className="h-[30px] w-[30px] bg-white opacity-30 rounded-full"></div>
                            ) : user ? (
                                <Link href="/pages/user-profile" onClick={handleLinkClick}>
                                    <div className="flex flex-row items-center bg-gray-100 p-[10px] rounded-full lg:px-[10px] lg:py-[5px]">
                                        <AiOutlineUser size={15} />
                                        <p className="hidden lg:block text-[14px] ml-[10px]">{user.firstName}</p>
                                    </div>
                                </Link>
                            ) : (
                                <Link href="/pages/login-to-account">Log in</Link>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </header>
    );
}