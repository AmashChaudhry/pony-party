'use client'
import Link from "next/link";
import { ImBlog } from "react-icons/im";
import { IoExit } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

export default function Sidebar() {

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

    return (
        <ul className='sticky top-0 flex flex-col h-screen bg-gray-100 px-[20px] py-[20px]'>
            <Link
                href="/admin"
                className='w-[150px] mb-[40px]'
            >
                <img
                    className='w-full h-auto object-cover'
                    src="/Logo-1.png"
                    alt="Pony Party"
                />
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                href='/admin'
            >
                <IoHome size={20} color='#6B7280' />
                <li>Home</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                href='/admin/pages/services'
            >
                <MdMedicalServices size={20} color='#6B7280' />
                <li>Services</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                href='/admin/pages/blogs'
            >
                <ImBlog size={20} color='#6B7280' />
                <li>Blogs</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                href='/admin/pages/messages'
            >
                <BiSolidMessageSquareDetail size={20} color='#6B7280' />
                <li>Messages</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] text-sm py-[10px]'
                href='/admin/pages/users'
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
    );
}