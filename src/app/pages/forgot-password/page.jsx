'use client'
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (email.length > 0 && !validateEmail(email)) {
            setButtonDisabled(true);
        } else if (email.length > 5 && validateEmail(email)) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [email]);

    const onSubmit = async () => {
        setLoading(true);
        setButtonDisabled(true);
        try {
            const response = await fetch('/api/send-reset-password-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(
                    <span className="text-[14px]">Password reset email has been sent.</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        }
                    }
                );
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
            setButtonDisabled(false);
        }
    }

    return (
        <div className="flex flex-col items-start w-full max-w-[1200px] mx-auto sm:px-[20px] lg:px-[60px]" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <p className="px-[25px] pt-[40px]">Forgot your password? Please enter your email address. You will receive a link to create a new password via email.</p>
            <div className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none rounded-none"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button
                    className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-[180px] py-[15px] px-[25px]`}
                    type="submit"
                    disabled={buttonDisabled}
                    onClick={onSubmit}
                >
                    {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Reset Password"}
                </button>
            </div>
        </div>
    );
}