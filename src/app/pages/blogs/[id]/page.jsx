'use client'
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function Blog({ params }) {
    const { id } = params;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const getBlogData = async () => {
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id }),
            });
            const blogData = await response.json();
            setBlog(blogData.data);
        } catch (error) {
            console.error('Error fetching treatment:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogData();
    }, []);

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full' style={{ height: 'calc(100vh - 80px)' }}>
                <PulseLoader color="#ffa9f9" size={10} />
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center w-full max-w-[1200px] mx-auto py-[40px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className='w-full px-[20px] mb-[40px]'>
                <p className='text-2xl font-semibold mb-[40px]'>{blog.title}</p>
                <p className='mb-[30px]'>{blog.description}</p>
                <div className='flex flex-col items-center w-full'>
                    <img
                        className='w-full h-auto object-cover sm:h-[350px] sm:w-auto'
                        src={blog.image}
                        alt={blog.title}
                    />
                </div>
            </div>
            <div className='w-full px-[40px]'>
                <div className='h-[1px] w-full bg-gray-200 mb-[40px]'></div>
            </div>
            {
                blog.subTopics.map((subTopic, index) => (
                    <div key={index} className='flex flex-col pb-[20px] sm:flex-row'>
                        <div className={`flex flex-col px-[20px] ${subTopic.image ? 'sm:w-[60%]' : 'w-full'}`}>
                            {
                                subTopic.title && (
                                    <p className='text-xl font-medium mb-[20px]'>{subTopic.title}</p>
                                )
                            }
                            <p className='mb-[20px]'>{subTopic.description}</p>
                        </div>
                        {
                            subTopic.image && (
                                <div className='w-full px-[20px] mb-[40px] sm:w-[40%]'>
                                    <img
                                        className='h-auto w-full'
                                        src={subTopic.image}
                                        alt={subTopic.title}
                                    />
                                </div>
                            )
                        }
                    </div>
                ))
            }
            <div className='px-[20px] py-[40px]'>
                <h3 className='text-xl font-medium mb-[20px]'>Conclusion</h3>
                <p>{blog.conclusion}</p>
            </div>
            <div className='flex flex-col justify-between w-full px-[20px] py-[20px] md:flex-row'>
                <h4 className='text-base font-medium mb-[20px]'>Categories: <span className='font-normal text-gray-500'>{blog.categories.join(', ')}</span></h4>
                <h4 className='text-base font-medium mb-[20px]'>Author: <span className='font-normal text-gray-500'>{blog.author}</span></h4>
            </div>
        </div>
    );
}