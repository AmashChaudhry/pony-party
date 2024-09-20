import React, { useEffect, useState } from "react";

export default function ChangePassword() {
    const [user, setUser] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    return (
        <div className='w-full max-w-[500px] px-[20px]'>
            {user ?
                <div className='flex flex-col items-start'>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">Current Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="currentPassword"
                            value={user.currentPassword}
                            onChange={(e) => setUser({ ...user, currentPassword: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">New Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="newPassword"
                            value={user.newPassword}
                            onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">Confirm New Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="confirmNewPassword"
                            value={user.confirmNewPassword}
                            onChange={(e) => setUser({ ...user, confirmNewPassword: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        className='bg-[#ffa9f9] hover:bg-black text-white w-fit py-[15px] px-[25px] mt-[10px]'
                        type="submit"
                    >
                        Save Changes
                    </button>
                </div>
                : <div className=' flex flex-col items-center w-full'>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    );
}