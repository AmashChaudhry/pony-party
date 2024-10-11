'use client';
import Image from 'next/image';
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from 'react';

export default function AccountDatails() {
    const [user, setUser] = useState(null);
    const [timer, setTimer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [counterActive, setCounterActive] = useState(false);
    const [counterLoading, setCounterLoading] = useState(false);
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

    useEffect(() => {
        if (user && user.verifyTokenExpiry) {
            const updateTimeLeft = () => {
                const expiryDate = new Date(user.verifyTokenExpiry);
                const now = new Date();
                const timeLeft = expiryDate - now;
                if (timeLeft > 0) {
                    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                    const seconds = Math.floor((timeLeft / 1000) % 60);
                    setTimer(`${minutes}:${seconds.toString().padStart(2, '0')}`);
                    setCounterActive(true);
                } else {
                    setTimer(null);
                    setCounterActive(false);
                }
            };
            updateTimeLeft();
            const intervalId = setInterval(updateTimeLeft, 1000);
            return () => clearInterval(intervalId);
        }
    }, [user]);

    const updateUserData = async () => {
        try {
            setLoading(true);
            setButtonDisabled(true);
            const response = await fetch(`/api/update-user-data`, {
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

            if(response.ok) {
                toast.success(
                    <span className="text-[14px]">Updated successfully</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                );
            }
        } catch (error) {
            console.log('Error updating user details:', error.message);
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    };

    const sendVerificationEmail = async () => {
        setCounterLoading(true);
        setCounterActive(true);
        try {
            const response = await fetch('/api/send-email-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user.email, userId: user._id }),
            });

            if (response.ok) {
                setUser({ ...user, verifyTokenExpiry: Date.now() + 60 * 1000 });
                toast.success(
                    <span className="text-[12px]">{`A verification email has been successfully sent to ${user.email}`}</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setCounterLoading(false);
        }
    }

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
                        <div className={`flex flex-col w-full p-[15px] border-l-4 ${user.isVerified ? "border-l-green-500 bg-green-100" : "border-l-red-500 bg-red-100"}`}>
                            <p className='text-[14px] text-gray-500'>{user.email}</p>
                            {
                                user.isVerified ? (
                                    <p className='text-[12px] text-green-500 italic'>Your email is verified</p>
                                ) : (
                                    <p className='text-[12px] text-red-500 italic'>Your email is not-verified</p>
                                )
                            }
                        </div>
                        <div className='flex flex-row justify-between mt-[5px]'>
                            <p className='text-[12px]'>Cannot be changed</p>
                            {
                                !user.isVerified && (
                                    <button
                                        className='w-[100px] text-[12px] text-white bg-black rounded-md px-[10px] py-[5px]'
                                        disabled={counterActive}
                                        onClick={sendVerificationEmail}
                                    >
                                        {
                                            counterLoading ?
                                                (
                                                    <PulseLoader color="#ffffff" size={6} />
                                                ) : (
                                                    timer ? `${timer}` : 'Verify email'
                                                )
                                        }
                                    </button>
                                )
                            }
                        </div>
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