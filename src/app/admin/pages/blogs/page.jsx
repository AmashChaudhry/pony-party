'use client'
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBlogsData = async () => {
        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const blogData = await response.json();
            setBlogs(blogData.data);
        } catch (error) {
            console.error('Error fetching treatments:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogsData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', year: 'numeric' };
        const day = date.getDate();
        const monthYear = date.toLocaleDateString('en-GB', options);
        const suffix = (day === 1 || day === 21 || day === 31) ? 'st' :
            (day === 2 || day === 22) ? 'nd' :
                (day === 3 || day === 23) ? 'rd' : 'th';
        return `${day}${suffix} ${monthYear}`;
    };

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full' style={{ minHeight: 'calc(100vh - 80px)' }}>
                <PulseLoader color="#ffa9f9" size={10} />
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center w-full' style={{ height: 'calc(100vh - 80px)' }}>
                <p className='text-center text-gray-400'>No blogs have been published yet</p>
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center w-full px-[20px] py-[20px]'>
            <div className='flex flex-row items-end justify-end w-full mb-[10px]'>
                <Link href='/admin/pages/upload-blog'>
                    <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                        <MdAddCircle size={15} className='mr-[5px]' />
                        Upload Blog
                    </button>
                </Link>
            </div>
            <div className="items-center w-full mb-[20px] md:hidden">
                <div className="h-[1px] w-full bg-black opacity-10"></div>
            </div>
            <div className='grid grid-cols-1 gap-[20px] items-start w-full md:border md:rounded-md md:px-[20px] md:py-[20px] 2xl:grid-cols-2'>
                {
                    blogs.map((blog, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-start w-full border rounded-md'>
                            <div className='h-auto w-full md:h-[175px] md:w-auto'>
                                <img
                                    className='h-full w-auto object-cover rounded-t-md md:rounded-tl-md md:rounded-bl-md md:rounded-tr-none md:rounded-br-none'
                                    src={blog.image.url}
                                    alt={blog.title}
                                />
                            </div>
                            <div className='flex flex-col items-start h-[175px] w-full justify-between p-[20px]'>
                                <div className='flex flex-col w-full'>
                                    <p className='text-[18px] font-semibold line-clamp-2'>{`${index + 1}. ${blog.title}`}</p>
                                    <p className='text-[14px] text-gray-400 font-light'>{formatDate(blog.createdAt)}</p>
                                    <p className='text-[14px] font-medium text-[#ffa9f9] line-clamp-1'>{blog.categories.join(', ')}</p>
                                </div>
                                <div className='flex flex-row w-full space-x-[10px]'>
                                    <Link href={`/admin/pages/blogs/${blog._id}`}>
                                        <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                                            <MdModeEdit size={15} className='mr-[5px]' />
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='flex flex-row items-center bg-red-500 text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                                        <MdDelete size={15} className='mr-[5px]' />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}