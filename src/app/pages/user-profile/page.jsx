'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AccountDatails from './account-details';
import Address from './address';

export default function UserProfile() {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState('Account Details');

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

    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-col w-full max-w-[1200px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
                <div className='p-[20px] mt-[20px] sm:mt-[40px]'>
                    <h1 className='text-[22px] font-medium mb-5'>{activeSection}</h1>
                </div>
                <div className="flex flex-col w-full sm:flex-row">
                    <ul className="flex flex-col h-fit w-full px-[20px] mb-[40px] sm:w-[300px] sm:mb-0">
                        <li className='mb-[20px]'>
                            <Link
                                href=""
                                onClick={() => setActiveSection('Account Details')}
                            >
                                <label className='text-[18px] font-light hover:text-[#ffa9f9] cursor-pointer'>Account details</label>
                            </Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        <li className='mb-[20px]'>
                            <Link
                                href=""
                                onClick={() => setActiveSection('Address')}
                            >
                                <label className='text-[18px] font-light hover:text-[#ffa9f9] cursor-pointer'>Address</label>
                            </Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        <li className='mb-[20px]'>
                            <Link href="">
                                <label className='text-[18px] font-light hover:text-[#ffa9f9] cursor-pointer'>Change password</label>
                            </Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        <li className='mb-[20px]'>
                            <Link href="" onClick={logout}>
                                <label className='text-red-400 text-[18px] font-light hover:text-red-600 cursor-pointer'>Log out</label>
                            </Link>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                    </ul>
                    {
                        activeSection === 'Account Details' ? (
                            <AccountDatails/>
                        ) : activeSection === 'Address' ? (
                            <Address/>
                        ) : activeSection === 'changePassword' ? (
                            <div>Change password section</div>
                        ) : null
                    }
                </div>
                <span className='h-[80px]'></span>
            </div>
        </div>
    );
}
