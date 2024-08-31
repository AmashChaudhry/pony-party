import React from "react";

export default function LoginToAccount() {
    return(
        <div>
            <form className="justify-between items-center mx-auto w-[70vw] p-[50px]">
                <div className="mb-[15px]">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.1)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="email" required />
                </div>
                <div className="mb-[15px]">
                    <label className="text-black text-opacity-60">Password</label><br />
                    <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.1)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="password" required />
                </div>
                <div className="mb-[15px]">
                    <input className="mr-[10px]" type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="bg-[#ffa9f9] text-white py-[15px] px-[20px] hover:bg-black" type="submit">Login</button>
                <div className="mt-[15px]">
                    <a href="/forgot-password" className="text-[#ffa9f9]">Forgot password?</a><br /><br />
                    <p className="inline-text">Don’t have an account? <a href="/register" className="text-[#ffa9f9]">Register now</a></p>
                </div>
            </form>
        </div>
    );
}