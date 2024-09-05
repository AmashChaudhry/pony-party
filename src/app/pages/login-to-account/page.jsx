import React from "react";
import Link from "next/link";

export default function LoginToAccount() {
    return (
        <div className="flex flex-col items-start w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
            <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="email" required />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Password</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="password" required />
                </div>
                <div className="mb-[15px]">
                    <input className="mr-[10px]" type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="bg-[#ffa9f9] text-white w-fit py-[15px] px-[25px] hover:bg-black" type="submit">Login</button>
                <div className="mt-[15px]">
                    <a href="/forgot-password" className="text-[#ffa9f9]">Forgot password?</a><br /><br />
                    <p>Don’t have an account? <Link href="/pages/register-account" className="text-[#ffa9f9]">Register now</Link></p>
                </div>
            </form>
        </div>
    );
}