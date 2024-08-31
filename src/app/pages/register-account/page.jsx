import React from "react";

export default function RegisterAccount() {
    return (
        <div>
            <form className="justify-between items-center mx-auto w-[70vw] p-[50px]">
                <div className="w-[400px]">
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="email" required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">First Name</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="text " required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">Last Name</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="text" required />
                    </div>
                    <div className="mb-[15px]">
                        <label className="text-black text-opacity-60">Password</label><br />
                        <input className="w-[400px] p-[15px] text-[16px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none" type="password" required />
                    </div>
                    <div className="mb-[15px]">
                        <input className="mr-[10px]" type="checkbox" id="remember-me" />
                        <label>I agree to the Term of Service, Privacy Policy, Consent To Treat, and Cancellation Policy</label>
                    </div>
                    <button className="bg-[#ffa9f9] text-white py-[15px] px-[20px] hover:bg-black" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}