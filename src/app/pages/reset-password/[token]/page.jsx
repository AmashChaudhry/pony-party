'use client'
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function ResetPassword({ params }) {
    const { token } = params;
    const [status, setStatus] = useState(100);
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [password, setPassword] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    useEffect(() => {
        if (password.newPassword.length > 7 && password.confirmPassword.length > 7) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [password]);

    const onSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword: password.newPassword, confirmPassword: password.confirmPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus(response.status);
            } else if (response.status === 400) {
                toast.error(
                    <span className="text-[14px]">{data.error}</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        }
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            {
                status === 200 ? (
                    <div className="flex flex-col items-center p-[20px]">
                        <IoIosCheckmarkCircle size={100} color="#22c55e" className="mb-[20px]" />
                        <h1 className="text-center text-[20px] font-light">Password reset successfully</h1>
                        <p className="text-center text-[16px] font-light">You can continue using Pony Party IV</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full max-w-[500px] p-[20px]">
                        <div className="py-[40px]">
                            <img
                                className="h-auto w-[150px]"
                                src="/Logo-2.png"
                                alt="Pony Party"
                            />
                        </div>
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">New password</label><br />
                            <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                type="password"
                                id="newPassword"
                                placeholder='Enter new password'
                                value={password.newPassword}
                                onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-[15px] w-full">
                            <label className="text-[14px] text-black">Confirm password</label><br />
                            <input className='w-full p-[15px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none'
                                type="password"
                                id="confirmPassword"
                                placeholder='Enter confirm password'
                                value={password.confirmPassword}
                                onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex flex-rox justify-center w-full mt-[20px]">
                            <button
                                className={`text-[14px] ${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-black hover:shadow-lg text-white"} w-[150px] py-[10px] px-[20px] rounded-md`}
                                type="submit"
                                disabled={buttonDisabled || loading}
                                onClick={onSubmit}
                            >
                                {loading ? <PulseLoader color="#ffffff" size={6} /> : "Reset Password"}
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}