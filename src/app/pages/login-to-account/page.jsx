'use client'
import Link from "next/link";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function LoginToAccount() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    const login = async (event) => {
        event.preventDefault();
        try {
            setButtonDisabled(true);
            setLoading(true);
            const response = await fetch('/api/login-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...user, rememberMe }),
            });

            const data = await response.json();

            if (response.status === 400) {
                toast.error(
                    <span className="text-[14px]">{data.error}</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        }
                    }
                );
            } else if (response.ok) {
                console.log("Login successfully");
                window.location.reload();
            } else {
                toast.error(
                    <span className="text-[14px]">An error occurred. Please try again.</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        }
                    }
                );
            }

        } catch (error) {
            console.log("Rgisteration failed");
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 5 && user.password.length > 7) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-start w-full max-w-[1200px] mx-auto sm:px-[20px] lg:px-[60px]" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Password</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px]">
                    <input
                        className="mr-[10px] cursor-pointer"
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(prevState => !prevState)}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button
                    className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-fit py-[15px] px-[25px]`}
                    type="submit"
                    disabled={buttonDisabled}
                    onClick={login}
                >
                    {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Login"}
                </button>
                <div className="mt-[15px]">
                    <a href="/pages/forgot-password" className="text-[#ffa9f9]">Forgot password?</a><br /><br />
                    <p>Don’t have an account? <Link href="/pages/register-account" className="text-[#ffa9f9]">Register now</Link></p>
                </div>
            </form>
        </div>
    );
}