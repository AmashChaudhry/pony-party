import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center px-6 py-[40px] sm:my-[60px]">
                <h1 className="text-[24px] font-medium mb-4">About Us</h1>
                <p className="text-[16px] text-center text-gray-600">Pony Party is the global leader of in-home IV therapy and medical services.</p>
            </div>
            <div className="flex flex-col items-center bg-[#FAFAFA] w-full py-[40px]">
                <h2 className="text-[24px] font-medium">What Make us Different</h2>
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
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">80+ Cities Worldwide</h3>
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
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Expert Medical Team</h3>
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
                        <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">3,000+ 5-Star Reviews</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-6 py-[40px]">
                <h2 className="text-[22px] font-semibold">Our Story</h2>
                <div className="bg-[#ffa9f9] h-[2px] w-[120px] mt-[5px] mb-[20px]"></div>
                <p className="text-[16px] text-center max-w-[1000px]">Two best friends with a passion for health, wellness, and healing. For those of you who work hard and like to play hard we have the ultimate recovery packages! We know that when you feel your best you perform even better, which is why we offer a variety of nutrients to help boost your mood, energy, and overall health. With an extensive background and years of clinical experience as nurses we are committed to providing the safest quality of care to each of our patients. At Pony Party we strive to deliver excellence, convenience, and comfort with all of our mobile services.</p>
            </div>
            <span className="h-[60px]"></span>
            <div className="flex flex-col items-center w-full max-w-[1000px] px-[20px] sm:flex-row sm:items-start">
                <div className="w-full h-full">
                    <img
                        className="h-auto w-full"
                        src="/about-us/nurse.jpg"
                        alt="Nurse"
                    />
                </div>
                <div className="flex flex-col w-full mt-10 sm:ml-10 sm:mt-0">
                    <h3 className="text-[20px] font-medium mb-4">Our Nurse</h3>
                    <p className="text-[16px]">
                        Our Registered Nurses are thoroughly vetted, highly trained, and fully licensed, bringing extensive experience from their work in both ER and ICU settings. Our team of medical professionals is dedicated to delivering the safest and highest quality care to every patient. At Drip Hydration, we are committed to excellence in medical service delivery, with safety being our top priority in everything we do.
                    </p>
                </div>
            </div>
            <span className='h-[100px]'></span>
        </div>
    );
}