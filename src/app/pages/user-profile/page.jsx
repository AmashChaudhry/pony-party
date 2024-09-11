'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UserProfile() {

    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserData = async () => {
        const response = await fetch('/api/current-user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const user = await response.json();
        setData(user.data._id);
        console.log(data);
    }

    const logout = async () => {
        try {
            await fetch('/api/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            router.push("/");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Profile page</h1>
            <h2>
                {data === "nothing" ? "Nothing" :
                    <Link href={`/pages/user-profile/${data}`}>{data}</Link>
                }
            </h2>
            <button
            className="bg-green-400 text-white p-[10px]"
                onClick={getUserData}>
                Get User Data
            </button>
            <hr />
            <button
            className="bg-red-400 text-white p-[10px]"
                onClick={logout}>
                Logout
            </button>
        </div>
    );
}