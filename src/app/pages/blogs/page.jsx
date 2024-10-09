'use client'
import Link from "next/link";
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
            <div className='flex flex-col items-center justify-center w-full' style={{ height: 'calc(100vh - 80px)' }}>
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
        <div className='flex flex-col items-start w-full max-w-[1200px] mx-auto py-[40px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
            {
                blogs.map((blog, index) => (
                    <div key={index} className='flex flex-col p-[20px] sm:flex-row sm:items-start'>
                        <div className='h-auto w-full mb-[20px] sm:h-[175px] sm:w-[225px] sm:mr-[30px] sm:mb-0'>
                            <img
                                className='h-full w-full object-cover'
                                src={blog.image.url}
                                alt={blog.title}
                            />
                        </div>
                        <div className='flex flex-col w-full sm:w-[75%]'>
                            <Link href={`/pages/blogs/${blog._id}`}>
                                <p className='text-[22px] font-semibold sm:line-clamp-2 md:text-[26px]'>{blog.title}</p>
                            </Link>
                            <p className='text-[16px] text-gray-400 font-light'>{formatDate(blog.createdAt)}</p>
                            <p className='text-[14px] font-medium text-[#ffa9f9] mb-[10px]'>{blog.categories.join(', ')}</p>
                            <p className='line-clamp-3'>{blog.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}