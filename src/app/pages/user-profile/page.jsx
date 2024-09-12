'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function UserProfile() {
    const router = useRouter();
    const [user, setUser] = useState(null);

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

    const logout = async () => {
        try {
            await fetch('/api/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className='text-[20px] font-medium mb-10'>Profile</h1>
            {user ?
                <div className='flex flex-col items-center'>
                    <p>{user.firstName} {user.lastName}</p>
                    <p className='mb-5'>{user.email}</p>
                    <Link href={`/pages/user-profile/${user._id}`} className='text-blue-400 font-semibold'>
                        View Profle
                    </Link>
                </div>
                : <h1>Loading...</h1>
            }
            <button className="bg-red-400 text-white p-[10px] mt-5 rounded" onClick={logout}>
                Logout
            </button>
        </div>
    );
}
