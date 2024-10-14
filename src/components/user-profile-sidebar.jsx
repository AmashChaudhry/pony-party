'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function UserProfileSidebar() {
    const pathname = usePathname();
    const [user, setUser] = useState(null);
    const [activeSection, setActiveSection] = useState('');

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
        if (pathname.includes('address')) {
            setActiveSection('Address');
        } else if (pathname.includes('change-password')) {
            setActiveSection('Change Password');
        } else {
            setActiveSection('Account Details');
        }
    }, [pathname]);

    const logout = async () => {
        try {
            await fetch('/api/logout', {
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
        <div className="flex flex-col items-start">
            <ul className="flex flex-col h-fit w-full px-[20px] mb-[40px] sm:w-[300px] sm:mb-0">
                <li className='mb-[20px]'>
                    <Link href='/pages/user-profile'>
                        <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Account Details' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Account details</label>
                    </Link>
                    <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                </li>
                <li className='mb-[20px]'>
                    <Link href='/pages/user-profile/address'>
                        <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Address' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Address</label>
                    </Link>
                    <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                </li>
                <li className='mb-[20px]'>
                    <Link href='/pages/user-profile/change-password'>
                        <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Change Password' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Change password</label>
                    </Link>
                    <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                </li>
                {
                    user && user.isAdmin && (
                        <li className='mb-[20px]'>
                            <Link
                                href="/pages/otp-verification"
                            >
                                <label className='text-[18px] font-light hover:text-[#ffa9f9] cursor-pointer'>Admin panel</label>
                            </Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                    )
                }
                <li className='mb-[20px]'>
                    <label
                        onClick={logout}
                    >
                        <label className='text-red-400 text-[18px] font-light hover:text-red-600 cursor-pointer'>Log out</label>
                    </label>
                    <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                </li>
            </ul>
        </div>
    );
}