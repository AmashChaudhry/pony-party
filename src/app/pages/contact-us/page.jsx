'use client'
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import React, { useEffect, useState } from "react";

export default function ContactUs() {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [guest, setGuest] = useState({
        city: "Scottsdale",
        category: "General Inquiry",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (
            guest.firstName.length > 4 &&
            guest.lastName.length > 2 &&
            guest.email.length > 8 &&
            guest.phoneNumber.length > 9 &&
            guest.message.length > 19
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [guest]);

    const sendMessage = async () => {
        try {
            setSent(false);
            setLoading(true);
            setButtonDisabled(true);
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guest),
            });

            if (response.ok) {
                console.log("Message successfully sent");
                setSent(true);
                setGuest({
                    city: "Scottsdale",
                    category: "General Inquiry",
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    message: "",
                });
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }

        } catch (error) {
            console.log("Failed to send message");
        } finally {
            setLoading(false);
            setButtonDisabled(false);
        }
    }

    return (
        <div className='flex flex-col items-start w-full max-w-[1200px] mx-auto px-[20px] py-[40px]' style={{ minHeight: 'calc(100vh - 80px)' }}>
            <h1 className='text-2xl font-semibold mb-[10px]'>Contact Us</h1>
            <p>Please fill out the form below and a member of our team will get back with you shortly.</p>
            <div className='flex flex-col items-start w-full max-w-[500px] py-[40px]'>
                <div className="mb-[15px] w-full">
                    <label className="text-black text-opacity-60">City</label><br />
                    <select
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        id="city"
                        value={guest.city}
                        onChange={(e) => setGuest({ ...guest, city: e.target.value })}
                        required
                    >
                        <option value="Scottsdale">Scottsdale</option>
                        <option value="Phoenix">Phoenix</option>
                        <option value="Tempe">Tempe</option>
                    </select>
                </div>
                <div className="mb-[25px] w-full">
                    <label className="text-black text-opacity-60">How can we help?</label><br />
                    <select
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        id="category"
                        value={guest.category}
                        onChange={(e) => setGuest({ ...guest, category: e.target.value })}
                        required
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Booking an Appointment">Booking an Appointment</option>
                        <option value="Marketing Inquiries">Marketing Inquiries</option>
                        <option value="Event or On-Site Services">Event or On-Site Services</option>
                        <option value="Partnership/Consulting">Partnership/Consulting</option>
                        <option value="Career or Hiring">Career or Hiring</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-[15px] w-full">
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        value={guest.firstName}
                        onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full">
                    <input className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none"
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        value={guest.lastName}
                        onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-[15px] w-full relative">
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
                            placeholder="Phone Number"
                            value={guest.phoneNumber}
                            onChange={(e) => {
                                const phoneNumber = e.target.value;
                                if (phoneNumber.length <= 10 && /^\d*$/.test(phoneNumber)) {
                                    setGuest({ ...guest, phoneNumber });
                                }
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="mb-[15px] w-full">
                    <input className='w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none'
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={guest.email}
                        onChange={(e) => setGuest({ ...guest, email: e.target.value })}
                        required
                    />
                </div>
                <div className="w-full mb-[15px]">
                    <textarea
                        className="w-full p-[15px] text-[14px] bg-[rgba(0,0,0,0.05)] border-l-4 border-l-[#ffa9f9] focus:outline-none resize-none"
                        id="description"
                        placeholder='What can we help you with?'
                        rows="5"
                        value={guest.message}
                        onChange={(e) => setGuest({ ...guest, message: e.target.value })}
                        required
                    />
                </div>
                {
                    sent ? (
                        <div className="mb-[15px] w-full bg-green-100 p-[10px] rounded">
                            <p className="text-green-600 text-[14px]">Message successfully sent, our team will get back with you shortly.</p>
                        </div>
                    ) : (
                        null
                    )
                }
                <button
                    className={`${buttonDisabled ? "bg-gray-200 text-gray-400" : "bg-[#ffa9f9] hover:bg-black text-white"} w-fit py-[15px] px-[20px]`}
                    type="submit"
                    disabled={buttonDisabled}
                    onClick={sendMessage}
                >
                    {loading ? <PulseLoader color="#9CA3AF" size={6} /> : "Submit"}
                </button>
            </div>
        </div>
    );
}