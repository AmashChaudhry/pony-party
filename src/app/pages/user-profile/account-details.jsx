'use client';
import Image from 'next/image';
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from 'react';

export default function AccountDatails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

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

    useEffect(() => {
        if (user && user.firstName.length > 4 && user.lastName.length > 1 && user.phoneNumber.length > 9) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const updateUserData = async () => {
        try {
            setLoading(true);
            setButtonDisabled(true);
            await fetch(`/api/update-user-data`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    dateOfBirth: user.dateOfBirth,
                }),
            });
            window.location.reload();
        } catch (error) {
            console.log('Error updating user details:', error.message);
        } finally {
            setLoading(false);
            setButtonDisabled(false);
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
        <div className='w-full max-w-[500px] px-[20px]'>
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
                        className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-[160px] py-[15px] px-[25px]`}
                        type="submit"
                        disabled={buttonDisabled}
                        onClick={updateUserData}
                    >
                        {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Save Changes"}
                    </button>
                </div>
                : <div className=' flex flex-col items-center w-full'>
                    <PulseLoader color="#ffa9f9" size={10} />
                </div>
            }
        </div>
    );
}