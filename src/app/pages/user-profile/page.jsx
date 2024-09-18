'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        const response = await fetch('/api/current-user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const userData = await response.json();
        setUser(userData.data);
    };

    useEffect(() => {
        getUserData();
    }, []);

    const logout = async () => {
        try {
            await fetch('/api/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            window.location.reload();
        } catch (error) {
            console.log(error.message);
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="flex flex-row w-full max-w-[1200px]">
                <div className="flex flex-col bg-gray-200 h-fit w-[300px]">
                    <h1 className='text-[20px] font-medium mb-5'>Account Details</h1>
                    <ul>
                        <li>
                            <Link href="">Account details</Link>
                        </li>
                        <li>
                            <Link href="">Address</Link>
                        </li>
                        <li>
                            <Link href="">Change password</Link>
                        </li>
                    </ul>
                </div>
                <div className='p-[40px]'>
                    {user ?
                        <div className='flex flex-col items-start'>
                            <div className="mb-[15px] w-full">
                                <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                                <input className="text-[14px] text-gray-500 w-full p-[15px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                                    type="email"
                                    id="email"
                                    value={user.email}
                                    disabled
                                />
                                <p className='text-[12px]'>Cannot be changed</p>
                            </div>
                            <div className="mb-[15px] w-full">
                                <label className="text-black text-opacity-60">First Name</label><br />
                                <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                                    type="text"
                                    id="firstName"
                                    value={user.firstName}
                                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-[15px] w-full">
                                <label className="text-black text-opacity-60">Last Name</label><br />
                                <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                                    type="text"
                                    id="lastName"
                                    value={user.lastName}
                                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-[15px] w-full relative">
                                <label className="text-black text-opacity-60">Phone Number</label><br />
                                <div className="flex items-center border-l-4 border-l-[#ffa9f9] bg-[rgba(0,0,0,0.05)] p-[15px] w-full">
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-[30px] h-[30px]">
                                            <Image
                                                src="/united-states.png"
                                                fill
                                                style={{ objectFit: "contain" }}
                                                alt="Dehydration IV Treatment"
                                            />
                                        </div>
                                        <span className="text-[14px]">+1</span>
                                    </div>
                                    <input
                                        className="flex-1 pl-2 text-[14px] bg-transparent focus:outline-none"
                                        type="tel"
                                        placeholder="1234567890"
                                        value={user.phoneNumber}
                                        onChange={(e) => {
                                            const phoneNumber = e.target.value;
                                            if (phoneNumber.length <= 10 && /^\d*$/.test(phoneNumber)) {
                                                setUser({ ...user, phoneNumber });
                                            }
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-[15px] w-full">
                                <label className="text-black text-opacity-60" htmlFor="dob">Date of Birth</label><br />
                                <input
                                    className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                                    type="date"
                                    id="dateOfBirth"
                                    value={formatDate(user.dateOfBirth)}
                                    onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                                    required
                                />
                            </div>
                            <button
                                className='bg-[#ffa9f9] hover:bg-black text-white w-fit py-[15px] px-[25px] mt-[10px]'
                                type="submit"
                            >
                                Save Changes
                            </button>
                            <p>{user.phoneNumber}</p>
                            <p>{user.state}</p>
                            <p>{user.city}</p>
                            <p>{user.address}</p>
                            <p>{user.zipCode}</p>
                            <p className='mb-5'>{new Date(user.dateOfBirth).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            <Link href={`/pages/user-profile/${user._id}`} className='text-blue-400 font-semibold'>
                                View Profle
                            </Link>
                        </div>
                        : <h1>Loading...</h1>
                    }
                    <button className="bg-red-400 text-white p-[10px] mt-5 rounded" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
