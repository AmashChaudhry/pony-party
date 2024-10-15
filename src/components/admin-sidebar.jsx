'use client'
import { useState } from "react";
import Link from "next/link";
import { ImBlog } from "react-icons/im";
import { IoExit, IoMenu, IoCloseSharp } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const logout = async () => {
        try {
            await fetch('/admin/api/admin-logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 flex justify-between items-center h-[80px] w-full px-[20px] bg-gray-100 z-50 md:hidden ">
                <button
                    className="bg-black text-white p-[8px] rounded-xl"
                    onClick={toggleSidebar}
                >
                    {
                        isOpen ? <IoCloseSharp size={24} /> : <IoMenu size={24} />
                    }
                </button>
                <Link
                    href="/admin"
                    onClick={handleLinkClick}
                    className='flex h-[50px]'
                >
                    <img
                        className='w-auto h-full object-cover'
                        src="/Logo-3.png"
                        alt="Pony Party"
                    />
                </Link>
                <button className="bg-transparent text-transparent p-[8px]">
                    <IoMenu size={24} />
                </button>
            </header>
            <ul
                className={`fixed top-0 left-0 h-screen w-[250px] bg-gray-100 px-[20px] py-[20px] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 md:translate-x-0 md:relative md:flex md:flex-col md:w-[250px]`}
            >
                <Link
                    href="/admin"
                    onClick={handleLinkClick}
                    className='hidden w-[150px] mb-[40px] pt-[60px] md:flex md:pt-0'
                >
                    <img
                        className='w-full h-auto object-cover'
                        src="/Logo-1.png"
                        alt="Pony Party"
                    />
                </Link>
                <Link
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px] pt-[80px] md:pt-0'
                    href='/admin'
                    onClick={handleLinkClick}
                >
                    <IoHome size={20} color='#6B7280' />
                    <li>Home</li>
                </Link>
                <Link
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                    href='/admin/pages/services'
                    onClick={handleLinkClick}
                >
                    <MdMedicalServices size={20} color='#6B7280' />
                    <li>Services</li>
                </Link>
                <Link
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                    href='/admin/pages/blogs'
                    onClick={handleLinkClick}
                >
                    <ImBlog size={20} color='#6B7280' />
                    <li>Blogs</li>
                </Link>
                <Link
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                    href='/admin/pages/messages'
                    onClick={handleLinkClick}
                >
                    <BiSolidMessageSquareDetail size={20} color='#6B7280' />
                    <li>Messages</li>
                </Link>
                <Link
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                    href='/admin/pages/users'
                    onClick={handleLinkClick}
                >
                    <ImUsers size={20} color='#6B7280' />
                    <li>User Details</li>
                </Link>
                <li
                    className='flex flex-row items-center space-x-[20px] text-sm py-[10px] cursor-pointer'
                    onClick={logout}
                >
                    <IoExit size={20} color='#EF4444' />
                    <label className="text-red-500 cursor-pointer">Logout</label>
                </li>
            </ul>
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                        onClick={toggleSidebar}
                    />
                )
            }
        </>
    );
}
