import React from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function Footer() {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className=" flex flex-col w-full max-w-[1200px] mx-auto">
                <div className="flex flex-row w-[100%]">
                    <div className="flex flex-col w-[50%] mx-auto py-[40px] pr-[10px] pl-[20px] sm:py-[60px] sm:pr-[20px] sm:pl-[40px]">
                        <ul>
                            <li className="relative w-full overflow-hidden mb-[10px]">
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">Specialty IVs – Services</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">General Medicine Services</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">Wellness Treatments</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">Events</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">About Us & Learn More</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">Online Inquiries</p>
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
                            </li>
                            <li className="relative w-full overflow-hidden mb-[10px]">
                                <input
                                    type="checkbox"
                                    className="peer absolute top-0 inset-x-0 w-full h-[24px] opacity-0 z-10 cursor-pointer"
                                />
                                <div className="w-full pr-5 flex items-center justify-between">
                                    <p className="w-[250px]">Legal</p>
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
                            </li>
                        </ul>
                    </div>
                    <div className="w-[50%] py-[40px] pr-[20px] pl-[10px] sm:py-[60px] sm:pr-[40px] pl-[20px]">
                        <p className="text-[12px]">The services offered have not been reviewed by the Food and Drug Administration. These products are not designed to diagnose, treat, cure, or prevent any disease. The content on this website is for informational purposes only and should not be considered medical advice. Always consult your physician before starting any treatment or therapy program. Any mention of therapies is for marketing purposes and does not represent actual products.</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}