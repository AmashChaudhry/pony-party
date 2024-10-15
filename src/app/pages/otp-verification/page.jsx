'use client'
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';
import { PulseLoader, ScaleLoader } from "react-spinners";
import { MuiOtpInput } from 'mui-one-time-password-input';

export default function OtpVerification() {
    const [otp, setOtp] = useState('');
    const [user, setUser] = useState(null);
    const [timer, setTimer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [screenLoading, setScreenLoading] = useState(true);
    const [counterActive, setCounterActive] = useState(false);
    const [counterLoading, setCounterLoading] = useState(false);

    const getUserData = async () => {
        try {
            const response = await fetch('/api/current-user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userData = await response.json();
            setUser(userData.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setScreenLoading(false);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        if (user && user.adminOtpExpiry) {
            const updateTimeLeft = () => {
                const expiryDate = new Date(user.adminOtpExpiry);
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

    const sendOTP = async () => {
        setCounterLoading(true);
        try {
            const response = await fetch('/api/send-otp-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user._id }),
            });

            if (response.ok) {
                setCounterActive(true);
                setUser({ ...user, adminOtpExpiry: Date.now() + 60 * 1000 });
                toast.success(
                    <span className="text-[12px]">We have sent an OTP to your email</span>,
                    {
                        position: "top-center",
                        duration: 5000,
                    },
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setCounterLoading(false);
        }
    }

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const handleComplete = async (completeOtp) => {
        document.activeElement.blur();
        setLoading(true);
        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user._id, otp: completeOtp }),
            });

            const data = await response.json();

            if (response.ok) {
                window.location.reload();
            } else if (response.status === 400) {
                toast.error(
                    <span className="text-[12px]">{data.error}</span>,
                    {
                        position: "top-center",
                        duration: 5000,
                    },
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (screenLoading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 60px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full py-[40px]">
            <div className="h-fit w-[150px] mb-[20px]">
                <img
                    className="h-auto w-full"
                    src="/Logo-2.png"
                    alt="Pony Party"
                />
            </div>
            <div className="p-[20px]">
                <div className="relative">
                    <MuiOtpInput
                        value={otp}
                        onChange={(value) => {
                            const numericValue = value.replace(/[^0-9]/g, '');
                            handleChange(numericValue);
                        }}
                        onComplete={handleComplete}
                        length={6}
                        sx={{
                            display: 'flex',
                            columnGap: '5px',
                            '& .MuiOutlinedInput-root': {
                                width: '40px',
                                height: '40px',
                                margin: '0px',
                                '& input': {
                                    textAlign: 'center',
                                    padding: '0',
                                },
                                '&.Mui-focused': {
                                    border: 'black',
                                    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.2)',

                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                            },
                        }}
                    />
                    {
                        loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-md">
                                <ScaleLoader color="#000000" height={15} width={2} />
                            </div>
                        )
                    }
                </div>
            </div>
            {
                counterActive ? (
                    <p className="w-[350px] text-[14px] text-center mb-[20px]">Please verify your identity as an admin by providing the OTP sent to your email.</p>
                ) : (
                    <p className="w-[350px] text-[14px] text-center mb-[20px]">Please verify your identity as an admin by providing OTP.</p>
                )
            }
            {
                counterActive || counterLoading ? (
                    <div className={`flex items-center justify-center text-[14px] ${counterActive ? "bg-gray-300 text-gray-500" : "bg-black text-white"} h-[35px] w-[100px] rounded-md`}>
                        {
                            counterLoading ?
                                (
                                    <PulseLoader color="#ffffff" size={6} />
                                ) : (
                                    <p>{timer}</p>
                                )
                        }
                    </div>
                ) : (
                    <button
                        className="text-[14px] bg-black hover:shadow-lg text-white h-[35px] w-[100px] rounded-md"
                        type="submit"
                        disabled={counterActive || counterLoading || loading}
                        onClick={sendOTP}
                    >
                        Send OTP
                    </button>
                )
            }
        </div>
    )
}