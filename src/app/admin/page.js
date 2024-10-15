'use client'
import Link from "next/link";
import { ImBlog } from "react-icons/im";
import { ImUsers } from "react-icons/im";
import { ImDroplet } from "react-icons/im";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { BiSolidInjection } from "react-icons/bi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [services, setServices] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response_1 = await fetch('/api/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const serviceData = await response_1.json();

            const response_2 = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const blogData = await response_2.json();

            const response_3 = await fetch('/admin/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const messageData = await response_3.json();

            const response_4 = await fetch('/admin/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userData = await response_4.json();

            setUsers(userData.data);
            setBlogs(blogData.data);
            setServices(serviceData.data);
            setMessages(messageData.data);
        } catch (error) {
            console.error('Error fetching treatments:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const drips = services.filter(service => service.category === "Drip");
    const injections = services.filter(service => service.category === "Injection");
    const publishedBlogs = blogs.filter(blog => blog.published === true);
    const activeDrips = services.filter(service => service.category === "Drip" && service.isAvailableForPurchase === true);
    const activeInjections = services.filter(service => service.category === "Injection" && service.isAvailableForPurchase === true);

    const getTodayMessages = (messages) => {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        return messages.filter(message => {
            const messageDate = new Date(message.sendAt);
            return messageDate >= startOfDay && messageDate < endOfDay;
        });
    };
    const todaysMessages = getTodayMessages(messages);

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 140px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center w-full'>
            <div className='grid grid-cols-1 gap-[20px] items-start w-full p-[20px] md:grid-cols-2 xl:grid-cols-3'>
                <Link
                    href='/admin/pages/messages'
                    className="flex flex-col items-start w-full bg-gray-50 border rounded-xl p-[20px]"
                >
                    <h2 className="text-2xl font-medium mb-[40px]">Messages:</h2>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                            <p><b>Today: </b>{todaysMessages.length}</p>
                            <p><b>Total: </b>{messages.length}</p>
                        </div>
                        <BiSolidMessageSquareDetail size={60} color=" #E5E7EB" />
                    </div>
                </Link>
                <Link
                    href='/admin/pages/users'
                    className="flex flex-col items-start w-full bg-gray-50 border rounded-xl p-[20px]"
                >
                    <h2 className="text-2xl font-medium mb-[40px]">Users:</h2>
                    <div className="flex flex-row items-end justify-between w-full">
                        <div className="flex flex-col items-start">
                            <p><b>Total users: </b>{users.length}</p>
                        </div>
                        <ImUsers size={60} color=" #E5E7EB" />
                    </div>
                </Link>
            </div>
            <div className="items-center w-full px-[40px]">
                <div className="h-[1px] w-full bg-black opacity-20"></div>
            </div>
            <div className='grid grid-cols-1 gap-[20px] items-start w-full p-[20px] md:grid-cols-2 xl:grid-cols-3'>
                <Link
                    href='/admin/pages/services?serviceType=Drip'
                    className="flex flex-col items-start w-full bg-gray-50 border rounded-xl p-[20px]"
                >
                    <h2 className="text-2xl font-medium mb-[40px]">Drips:</h2>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                            <p><b>Total: </b>{drips.length}</p>
                            <p><b>Active: </b>{activeDrips.length}</p>
                        </div>
                        <ImDroplet size={60} color=" #E5E7EB" />
                    </div>
                </Link>
                <Link
                    href='/admin/pages/services?serviceType=Injection'
                    className="flex flex-col items-start w-full bg-gray-50 border rounded-xl p-[20px]"
                >
                    <h2 className="text-2xl font-medium mb-[40px]">Injections:</h2>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                            <p><b>Total: </b>{injections.length}</p>
                            <p><b>Active: </b>{activeInjections.length}</p>
                        </div>
                        <BiSolidInjection size={60} color=" #E5E7EB" />
                    </div>
                </Link>
                <Link
                    href='/admin/pages/blogs'
                    className="flex flex-col items-start w-full bg-gray-50 border rounded-xl p-[20px]"
                >
                    <h2 className="text-2xl font-medium mb-[40px]">Blogs:</h2>
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                            <p><b>Total: </b>{blogs.length}</p>
                            <p><b>Published: </b>{publishedBlogs.length}</p>
                        </div>
                        <ImBlog size={60} color=" #E5E7EB" />
                    </div>
                </Link>
            </div>
        </div>
    );
}