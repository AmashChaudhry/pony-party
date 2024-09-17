import Image from "next/image";
import React from "react";
import { treatments } from "@/data/vitamin-iv-treatments";

export default function VitaminIVTreatmentDetail({ params }) {
    const { id } = params;

    const treatmentDetail = treatments.find(treatment => treatment.id === id);

    if (!treatmentDetail) {
        return (
            <div className="flex flex-col items-center justify-center w-full" style={{ height: "calc(100vh - 80px)" }}>
                <h2>Treatment not found</h2>
            </div>
        );
    }

    const { title, ingredients, effects, price, description, src, alt } = treatmentDetail;

    return (
        <div className="flex flex-col items-center">
            <span className="h-0 w-full lg:h-[30px]"></span>
            <div className="flex flex-row justify-center w-full max-w-[1200px] m-auto lg:items-center">
                <div className="relative flex justify-center h-fit w-[50%] p-[20px]">
                    <Image
                        src={src}
                        width={500}
                        height={1080}
                        style={{ objectFit: "cover" }}
                        alt={alt}
                    />
                </div>
                <div className="flex flex-col h-fit w-[50%] p-[20px]">
                    <h2 className="text-[22px] font-medium sm:text-[24px] lg:text-[40px]">{title}</h2>
                    <p className="text-[14px] sm:text-[16px]">IV Treatment</p>
                    <p className="text-[16px] text-[#ffa9f9] mt-[20px]">{effects}</p>
                    <p className="text-[14px] my-[20px]">$<span className="text-[40px] font-medium">{price}</span></p>
                    <button className="w-fit px-[15px] py-[10px] bg-[#ffa9f9] text-white">Book Now</button>
                    <div className="flex flex-col justify-start pt-[20px] hidden sm:block">
                        <p className="text-black opacity-60">{description}</p>
                        <p className="font-bold">*US locations only</p>
                        <p className="font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{ingredients}</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start p-[20px] sm:hidden">
                <p className="text-[16px] text-black opacity-60">{description}</p>
                <p className="font-bold">*US locations only</p>
                <p className="text-[16px] font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{ingredients}</span></p>
            </div>
        </div>
    );
};