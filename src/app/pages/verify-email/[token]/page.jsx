'use client'
import { MdError } from "react-icons/md";
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function VerifyEmail({ params }) {
    const { token } = params;
    const [status, setStatus] = useState(100);
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const verifyEmail = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            if (response.ok) {
                console.log("Email verified");
                setVerified(true);
            } else if (response.status === 400) {
                setStatus(400);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-[20px]" style={{ minHeight: '100vh' }}>
            {
                verified ? (
                    <div className="flex flex-col items-center">
                        <IoIosCheckmarkCircle size={100} color="#22c55e" className="mb-[20px]" />
                        <h1 className="text-center text-[20px] font-light">Your email verified</h1>
                        <p className="text-center text-[16px] font-light">You can continue using Pony Party IV</p>
                    </div>
                ) : (
                    status === 400 ? (
                        <div className="flex flex-col items-center">
                            <MdError size={100} color="#ef4444" className="mb-[20px]" />
                            <h1 className="text-center text-[20px] font-light">Verification link expired</h1>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <img
                                className="h-auto w-[150px] mb-[40px]"
                                src="/Logo-2.png"
                                alt="Pony Party"
                            />
                            <p className="w-[350px] text-[16px] text-center mb-[20px]">Click the button below to verify the email address linked with Pony Party IV</p>
                            <button
                                className="bg-black text-white w-[150px] rounded-md py-[10px]"
                                disabled={loading}
                                onClick={verifyEmail}
                            >
                                {loading ? <PulseLoader color="#ffffff" size={6} /> : "Verify my email"}
                            </button>
                        </div>
                    )
                )
            }
        </div >
    );
}