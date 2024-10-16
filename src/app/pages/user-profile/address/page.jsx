'use client'
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function Address() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
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

    useEffect(() => {
        if (user && user.city && user.address && user.zipCode) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const updateUserData = async () => {
        setLoading(true);
        setButtonDisabled(true);
        try {
            const response = await fetch(`/api/update-user-data`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    state: user.state,
                    city: user.city,
                    address: user.address,
                    zipCode: user.zipCode,
                }),
            });

            if(response.ok) {
                toast.success(
                    <span className="text-[14px]">Updated successfully</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                );
            }
        } catch (error) {
            console.log('Error updating user details:', error.message);
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    };

    return (
        <div className='w-full max-w-[500px] px-[20px]'>
            {user ?
                <div className='flex flex-col items-start'>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">State</label><br />
                        <select
                            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none rounded-none appearance-none text-left min-h-[48px]"
                            id="state"
                            value={user.state}
                            onChange={(e) => setUser({ ...user, state: e.target.value })}
                            required
                        >
                            <option value="" disabled selected>Select your state</option>
                            <option value="Aabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkanas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Coloroda">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="New Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylavania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">City</label><br />
                        <input
                            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none rounded-none"
                            type="text"
                            placeholder="Enter your city"
                            id="city"
                            value={user.city}
                            onChange={(e) => setUser({ ...user, city: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60">Street Address</label><br />
                        <input
                            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none rounded-none"
                            type="text"
                            placeholder="Enter your street address"
                            id="address"
                            value={user.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-[15px] w-full">
                        <label className="text-black text-opacity-60" htmlFor="zip">Zip Code</label><br />
                        <input
                            className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none rounded-none"
                            type="text"
                            placeholder="Enter your zip code"
                            id="zipCode"
                            value={user.zipCode}
                            onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-[160px] py-[15px] px-[25px]`}
                        type="submit"
                        disabled={buttonDisabled}
                        onClick={updateUserData}
                    >
                        {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Save Changes"}
                    </button>
                </div>
                : <div className=' flex flex-col items-center w-full'>
                    <PulseLoader color="#ffa9f9" size={10} />
                </div>
            }
        </div>
    );
}