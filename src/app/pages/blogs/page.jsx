'use client'
import React, { useState, useEffect } from "react";

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBlogsData = async () => {
        try {
            const response = await fetch('/api/blogs', {
                method: 'GET',
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
                <p className='text-center'>Loading...</p>
            </div>
        );
    }

    return (
        <div className='flex flex-col items-start w-full max-w-[1200px] mx-auto py-[40px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
            {
                blogs.map((blog, index) => (
                    <div key={index} className='flex flex-col p-[20px] sm:items-center sm:flex-row'>
                        <div className='h-auto w-full mb-[20px] sm:h-[175px] sm:w-[225px] sm:mr-[30px] sm:mb-0'>
                            <img
                                className='w-full h-full object-cover'
                                src={blog.image}
                                alt={blog.title}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[24px] font-semibold md:text-[28px]'>{blog.title}</p>
                            <p className='text-[16px] text-gray-400 font-light'>{formatDate(blog.createdAt)}</p>
                            <p className='text-[14px] font-medium'>{blog.categories.join(', ')}</p>
                            <p>{blog.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}