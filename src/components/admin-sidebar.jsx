import react from "react";
import Link from "next/link";
import { ImBlog } from "react-icons/im"
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

export default function Sidebar() {
    return (
        <ul className='sticky top-0 flex flex-col h-screen bg-gray-100 px-[20px] py-[20px]'>
            <div className='w-[150px] mb-[40px]'>
                <img
                    className='w-full h-auto object-cover'
                    src="/Logo-1.png"
                    alt="Pony Party"
                />
            </div>
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
        </ul>
    );
}