'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AccountDatails from './account-details';
import Address from './address';
import ChangePassword from './change-password';

export default function UserProfile() {
    const [activeSection, setActiveSection] = useState('Account Details');
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

    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-col w-full max-w-[1200px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
                <div className='p-[20px] mt-[20px] sm:mt-[40px]'>
                    <h1 className='text-[22px] font-medium mb-5'>{activeSection}</h1>
                </div>
                <div className="flex flex-col w-full sm:flex-row">
                    <ul className="flex flex-col h-fit w-full px-[20px] mb-[40px] sm:w-[300px] sm:mb-0">
                        <li className='mb-[20px]'>
                            <label
                                onClick={() => setActiveSection('Account Details')}
                            >
                                <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Account Details' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Account details</label>
                            </label>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        <li className='mb-[20px]'>
                            <label
                                onClick={() => setActiveSection('Address')}
                            >
                                <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Address' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Address</label>
                            </label>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        <li className='mb-[20px]'>
                            <label
                                onClick={() => setActiveSection('Change Password')}
                            >
                                <label className={`text-[18px] font-light cursor-pointer ${activeSection === 'Change Password' ? 'text-[#ffa9f9]' : 'hover:text-[#ffa9f9]'}`}>Change password</label>
                            </label>
                            <div className='bg-gray-200 h-[1px] w-full mt-[10px]'></div>
                        </li>
                        {
                            user && user.isAdmin && (
                                <li className='mb-[20px]'>
                                    <Link
                                        href=""
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
                    {
                        activeSection === 'Account Details' ? (
                            <AccountDatails />
                        ) : activeSection === 'Address' ? (
                            <Address />
                        ) : activeSection === 'Change Password' ? (
                            <ChangePassword />
                        ) : null
                    }
                </div>
                <span className='h-[80px]'></span>
            </div>
        </div>
    );
}
