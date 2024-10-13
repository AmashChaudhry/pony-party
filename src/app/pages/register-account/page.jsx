'use client'
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function RegisterAccount() {
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        city: "",
        state: "",
        address: "",
        zipCode: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    const register = async (event) => {
        event.preventDefault();
        try {
            setButtonDisabled(true);
            setLoading(true);
            const response = await fetch('/api/register-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.status === 400) {
                toast.error(
                    <span className="text-[12px]">{data.error}</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                );
            } else if (response.ok) {
                toast.success(
                    <span className="text-[14px]">Registered successfully</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                    
                );
                router.back();
            } else {
                toast.error(
                    <span className="text-[12px]">An error occurred. Please try again.</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: '80px',
                        },
                    }
                );
            }

        } catch (error) {
            console.log("Rgisteration failed");
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    }

    useEffect(() => {
        if (
            user.firstName &&
            user.lastName &&
            user.email.length > 5 &&
            user.password.length > 7 &&
            user.phoneNumber.length > 9 &&
            new Date(user.dateOfBirth) < new Date() &&
            user.state &&
            user.city &&
            user.address &&
            user.zipCode &&
            termsAccepted
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user, termsAccepted]);

    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] m-auto sm:px-[20px] lg:px-[60px]">
            <form className="flex flex-col items-start w-full max-w-[500px] px-[25px] py-[40px]">
                <div className="flex flex-rox justify-center w-full mb-[30px]">
                    <h2 className="text-[24px] font-bold">Register</h2>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Email address (as your login)</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">First Name</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="firstName"
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Last Name</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="lastName"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full relative">
                    <label className="text-black text-opacity-60">Phone Number</label><br />
                    <div className="flex items-center border-l-4 border-l-[#ffa9f9] bg-[rgba(0,0,0,0.05)] p-[15px] w-full">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-[30px] h-[30px]">
                                <Image
                                    src="/united-states.png"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    alt="Dehydration IV Treatment"
                                />
                            </div>
                            <span className="text-[14px]">+1</span>
                        </div>
                        <input
                            className="flex-1 pl-2 text-[14px] bg-transparent focus:outline-none"
                            type="tel"
                            placeholder="1234567890"
                            value={user.phoneNumber}
                            onChange={(e) => {
                                const phoneNumber = e.target.value;
                                if (phoneNumber.length <= 10 && /^\d*$/.test(phoneNumber)) {
                                    setUser({ ...user, phoneNumber });
                                }
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60" htmlFor="dob">Date of Birth</label><br />
                    <input
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="date"
                        id="dateOfBirth"
                        value={user.dateOfBirth}
                        onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">State</label><br />
                    <select
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
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
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
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
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
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
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        placeholder="Enter your zip code"
                        id="zipCode"
                        value={user.zipCode}
                        onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">Password</label><br />
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <p>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a className="text-[#ffa9f9]" href="/pages/privacy-policy">Privacy Policy</a> and <a className="text-[#ffa9f9]" href="/pages/terms-of-service">Term of Service</a>.
                    </p><br />
                </div>
                <div className="mb-[30px]">
                    <input
                        className="mr-[10px] cursor-pointer"
                        type="checkbox"
                        id="remember-me"
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <label>I agree to the <a className="text-[#ffa9f9]" href="/pages/terms-of-service">Term of Service</a>, <a className="text-[#ffa9f9]" href="/pages/privacy-policy">Privacy Policy</a>, Consent To Treat, and Cancellation Policy</label>
                </div>
                <div className="flex flex-rox justify-center w-full">
                    <button
                        className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-[120px] py-[15px] px-[20px]`}
                        type="submit"
                        disabled={buttonDisabled}
                        onClick={register}
                    >
                        {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
}