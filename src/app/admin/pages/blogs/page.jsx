'use client'
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [screenLoading, setScreenLoading] = useState(true);
    const [loading, setLoading] = useState(false);

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
            setScreenLoading(false);
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

    const handleDeleteClick = (blog) => {
        setSelectedBlog(blog);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async (blogId) => {
        setLoading(true);
        try {
            const response = await fetch('/admin/api/delete-blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: blogId }),
            });

            if (response.ok) {
                setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
                setDeleteModalOpen(false);
                const isMobile = window.innerWidth <= 768;
                toast.success(
                    <span className="text-[12px]">Deleted successfully</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: isMobile ? '80px' : '0px',
                        },
                        duration: 5000,
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (screenLoading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 140px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
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
                    <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[10px]'>
                        <IoMdAdd size={23} className="sm:mr-[5px]" />
                        <p className="hidden sm:block">Upload Blog</p>
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
                            <div className='relative flex h-auto w-full md:h-[175px] md:w-auto'>
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
                                    <button
                                        className='flex flex-row items-center bg-red-500 text-white text-[14px] rounded-md px-[10px] py-[5px]'
                                        onClick={() => handleDeleteClick(blog)}
                                    >
                                        <MdDelete size={15} className='mr-[5px]' />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                deleteModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center px-[20px] z-50">
                        <div className="absolute inset-0 bg-black opacity-50" />
                        <div className="bg-white p-[20px] rounded-xl shadow-lg z-10" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-[16px] font-light mb-[20px]">
                                Are you sure you want to delete the blog?
                            </h2>
                            <div className="flex flex-row justify-end space-x-[10px]">
                                <button
                                    className="bg-green-500 text-white  px-[10px] py-[5px] rounded-md"
                                    onClick={() => setDeleteModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 text-white w-[80px] py-[5px] rounded-md"
                                    onClick={() => handleConfirmDelete(selectedBlog._id)}
                                >
                                    {loading ? <PulseLoader color="#ffffff" size={6} /> : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}