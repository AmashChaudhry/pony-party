import React, { useEffect, useState } from "react";

export default function ChangePassword() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
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

    const changePassword = async () => {
        setErrorMessage(null);
        setSuccessMessage(null);
        setLoading(true);
        setButtonDisabled(true);
        try {
            const response = await fetch('/api/change-password', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    currentPassword: password.currentPassword,
                    newPassword: password.newPassword,
                    confirmNewPassword: password.confirmNewPassword,
                }),
            });

            const passwordData = await response.json();

            if (response.status === 400) {
                setErrorMessage(passwordData.error);
            } else if (response.ok) {
                setSuccessMessage(passwordData.message);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    };

    useEffect(() => {
        if (password.currentPassword.length > 7 && password.newPassword.length > 7 && password.confirmNewPassword.length > 7) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [password]);

    return (
        <div className='w-full max-w-[500px] px-[20px]'>
            {user ?
                <div className='flex flex-col items-start'>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">Current Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="currentPassword"
                            value={password.currentPassword}
                            onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">New Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="newPassword"
                            value={password.newPassword}
                            onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">Confirm New Password</label><br />
                        <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                            type="password"
                            id="confirmNewPassword"
                            value={password.confirmNewPassword}
                            onChange={(e) => setPassword({ ...password, confirmNewPassword: e.target.value })}
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="mb-[15px] w-full bg-red-100 p-[10px] rounded">
                            <p className="text-red-600 text-[14px]">{errorMessage}</p>
                        </div>
                    )}
                    {successMessage && (
                        <div className="mb-[15px] w-full bg-green-100 p-[10px] rounded">
                            <p className="text-green-600 text-[14px]">{successMessage}</p>
                        </div>
                    )}
                    <button
                        className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-fit py-[15px] px-[25px]`}
                        type="submit"
                        disabled={buttonDisabled}
                        onClick={changePassword}
                    >
                        {loading ? 'Loading...' : 'Save Changes'}
                    </button>
                </div>
                : <div className=' flex flex-col items-center w-full'>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    );
}