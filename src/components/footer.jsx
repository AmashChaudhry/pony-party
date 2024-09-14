import React from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function Footer() {
    return (
        <div className="flex flex-row bg-gray-100 p-[80px]">
            <div className="flex flex-col">
                <ul>

                    <div className="relative w-[260px] overflow-hidden mb-[10px]">
                        <input
                            type="checkbox"
                            className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                        />
                        <div className="w-full pr-5 flex items-center justify-between">
                            <p className="w-[250px]">IV Treatments</p>
                        </div>
                        <div className="absolute right-0 top-1.5 text-black transition-transform duration-500 peer-checked:rotate-90">
                            <SlArrowRight size={12} />
                        </div>
                        <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                            <p className="text-[12px] mt-2">
                                Basic and Premium plan treatments are non-transferrable. Elite and Platinum plan
                                treatments are shareable if the member is present and also receiving treatment.
                            </p>
                        </div>
                    </div>

                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">Specialty IVs – Services</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">General Medicine Services</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">Wellness Treatments</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">Events</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">About Us & Learn More</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">Online Inquiries</p>
                        <SlArrowRight size={10} />
                    </li>
                    <li className="mb-[10px] flex items-center">
                        <p className="w-[250px]">Legal</p>
                        <SlArrowRight size={10} />
                    </li>
                </ul>
            </div>
        </div>
    );
}