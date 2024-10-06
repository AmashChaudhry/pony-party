import react from "react";
import Link from "next/link";
import { ImBlog } from "react-icons/im"
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

export default function Sidebar() {
    return (
        <ul className='sticky top-0 flex flex-col h-screen bg-gray-100 px-[30px] py-[20px]'>
            <Link
                className='flex flex-row items-center space-x-[20px] py-[10px]'
                href='/admin'
            >
                <IoHome size={20} color='#6B7280' />
                <li>Home</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] py-[10px]'
                href='/admin/pages/add-service'
            >
                <MdMedicalServices size={20} color='#6B7280' />
                <li>Services</li>
            </Link>
            <Link
                className='flex flex-row items-center space-x-[20px] py-[10px]'
                href='/admin/pages/upload-blog'
            >
                <ImBlog size={20} color='#6B7280' />
                <li>Blogs</li>
            </Link>
        </ul>
    );
}