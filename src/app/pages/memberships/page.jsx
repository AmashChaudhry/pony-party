import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function Memberships() {
    return (
        <div>
            <div className="p-[40px] flex flex-col items-center" >
                <h2 className="text-[22px]">Vitamin Drip Memberships</h2>
                <p className="text-center text-[14px] font-light text-gray-500">
                    Keep your health top priority while saving money with our monthly membership IV plans.Our vitamin drip membership plans are designed to optimize your health & wellness. </p>
            </div>
            <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center w-auto max-w-sm h-fit p-6 bg-white shadow-xl">
                    <h3 className="text-[14px] text-gray-500 font-bold mb-4">Basic Plan</h3>
                    <p className="flex items-center text-4xl font-light text-black w-full mb-4"><span className="text-sm">$</span>300<span className="text-sm">/mo</span></p>
                    <ul className="mb-6">
                        <h3 className="text-gray-500 text-2xl mb-[30px]">1 IV Treatment</h3>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Up to 25% Discount on Vitamin IVs</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Priority Booking</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">15% off All Services</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">30% off Health Assessment</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Exclusive Monthly Member Promotions</p>
                        </li>
                    </ul>
                    <button className="w-full text-[14px] py-2 px-4 bg-[#ffa9f9] text-white font-semibold rounded-md hover:bg-black transition">
                        Join Now
                    </button>
                </div>
                <div className="flex flex-col items-center w-auto max-w-sm h-fit p-6 bg-white shadow-xl">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                        Most Popular
                    </div>
                    <h3 className="text-[14px] text-gray-500 font-bold mb-4">Premium Plan</h3>
                    <p className="flex items-center text-4xl font-light text-black w-full mb-4"><span className="text-sm">$</span>550<span className="text-sm">/mo</span></p>
                    <ul className="mb-6">
                        <h3 className="text-gray-500 text-2xl mb-[30px]">2 IV Treatment</h3>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Up to 30% Discount on Vitamin IVs </p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Priority Booking</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">15% off All Services</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">30% off Health Assessment</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Exclusive Monthly Member Promotions</p>
                        </li>
                    </ul>
                    <button className="w-full text-[14px] py-2 px-4 bg-[#ffa9f9] text-white font-semibold rounded-md hover:bg-black transition">
                        Join Now
                    </button>
                </div>
                <div className="flex flex-col items-center w-auto max-w-sm h-fit p-6 bg-white shadow-xl">
                    <h3 className="text-[14px] text-gray-500 font-bold mb-4">Elite Plan</h3>
                    <p className="flex items-center text-4xl font-light text-black w-full mb-4"><span className="text-sm">$</span>1000<span className="text-sm">/mo</span></p>
                    <ul className="mb-6">
                        <h3 className="text-gray-500 text-2xl mb-[30px]"> 4 IV Treatment</h3>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Up to 35% Discount on Vitamin IVs</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Priority Booking</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">15% off All Services</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]"> 30% off Health Assessment</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Exclusive Monthly Member Promotions</p>
                        </li>
                    </ul>
                    <button className="w-full text-[14px] py-2 px-4 bg-[#ffa9f9] text-white font-semibold rounded-md hover:bg-black transition">
                        Join Now
                    </button>
                </div>
                <div className="flex flex-col items-center w-auto max-w-sm h-fit p-6 bg-white shadow-xl">
                    <h3 className="text-[14px] text-gray-500 font-bold mb-4">Platinium Plan</h3>
                    <p className="flex items-center text-4xl font-light text-black w-full mb-4"><span className="text-sm">$</span>1800<span className="text-sm">/mo</span></p>
                    <ul className="mb-6">
                        <h3 className="text-gray-500 text-2xl mb-[30px]"> 8 IV Treatment</h3>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Up to 40% Discount on Vitamin IVs</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Priority Booking</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">15% off All Services</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">30% off Health Assessment</p>
                        </li>
                        <li className="flex items-center text-lg">
                            <AiOutlineCheck className="text-[12px] text-[#ffa9f9] mr-2" />
                            <p className="text-[12px]">Exclusive Monthly Member Promotions</p>
                        </li>
                    </ul>
                    <button className="w-full text-[14px] py-2 px-4 bg-[#ffa9f9] text-white font-semibold rounded-md hover:bg-black transition">
                        Join Now
                    </button>
                </div>

            </div>

        </div>

    )
}