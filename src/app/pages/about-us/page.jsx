import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center px-6 py-[40px] sm:my-[60px]">
                <h1 className="text-[24px] font-medium mb-4">About Us</h1>
                {/* <p className="text-[16px] text-center text-gray-600">Pony Party is the global leader of in-home IV therapy and medical services.</p> */}
            </div>
            <div className="flex flex-col items-center bg-[#FAFAFA] w-full py-[40px]">
                <h2 className="text-[24px] font-medium">What Makes us Different</h2>
                <div className="flex flex-wrap justify-center mx-auto max-w-[1200px]">
                    <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
                        <div className="relative h-[100px] w-full m-[10px]">
                            <Image
                                src="/about-us/map.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Personalized Care from Trusted Professionals</h3>
                    </div>
                    <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
                        <div className="relative h-[100px] w-full m-[10px]">
                            <Image
                                src="/about-us/medical.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Convenience Meets Comfort</h3>
                    </div>
                    <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
                        <div className="relative h-[100px] w-full m-[10px]">
                            <Image
                                src="/about-us/reviews.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Holistic Wellness, Elevated</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[1000px] px-[20px] py-[40px]">
                <h2 className="text-[22px] font-semibold">Our Story</h2>
                <div className="bg-[#ffa9f9] h-[2px] w-[120px] mt-[5px] mb-[20px]"></div>
            </div>
            <div className="flex flex-col items-center w-full max-w-[1000px] px-[20px] sm:flex-row sm:items-start">
                <div className="w-full h-full">
                    <img
                        className="h-auto w-full"
                        src="/about-us/nurse.jpg"
                        alt="Nurse"
                    />
                </div>
                <div className="flex flex-col w-full my-[40px] sm:ml-10 sm:mt-0">
                    <p className="text-[16px]">
                        We are two best friends with a passion for health, wellness, and healing. For
                        those of you who work hard and like to play hard we have the ultimate recovery
                        packages! We know that when you feel your best you perform even better. We
                        offer a variety of nutrients to help boost your mood, energy, and overall health.
                        With an extensive background and years of clinical experience as nurses we are
                        committed to providing the safest and most efficient quality of care to each of our
                        clients. IV nutrition offers you the opportunity to reclaim your vitality and optimal
                        health. We understand that life moves fast and that is why our mobile services
                        are designed to fit seamlessly into your day to day life and busy schedules. At
                        Pony Party we believe health is wealth, which is why we strive to deliver
                        excellence, convenience, and comfort with all of our services.
                    </p>
                </div>
            </div>
            <span className='h-[40px]'></span>
            <div className="flex flex-col items-start w-full max-w-[1000px] px-[20px]">
                <div className="flex flex-col items-center w-full mb-[20px]">
                    <h2 className="text-[22px] font-semibold">Service Areas</h2>
                    <div className="bg-[#ffa9f9] h-[2px] w-[120px] mt-[5px] mb-[20px]"></div>
                </div>
                <div className="mb-[40px]">
                    <img
                        className="h-auto w-full"
                        src="/about-us/pony-party-service-areas.jpg"
                        alt="Pony Party Service Areas"
                    />
                </div>
                <div className="grid grid-cols-2 gap-[20px] w-full md:grid-cols-3">
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Phoenix</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Scottsdale</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Tempe</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Mesa</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Gilbert</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Chandler</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Fountain Hills</p>
                    </div>
                    <div className="bg-gray-50 px-[20px] py-[10px] hover:bg-gray-100 border rounded-lg">
                        <p className="text-[16px] text-start font-light">Paradise Valley</p>
                    </div>
                </div>
            </div>
            <span className='h-[100px]'></span>
        </div>
    );
}