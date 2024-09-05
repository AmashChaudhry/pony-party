import React from "react";
import Image from "next/image";

export default function VitaminIVTreatmentDetail() {
    return (
        <div className="flex flex-col items-center">
            <span className="h-0 w-full lg:h-[30px]"></span>
            <div className="flex flex-row justify-center w-full max-w-[1200px] m-auto lg:items-center">
                <div className="relative flex justify-center h-fit w-[50%] p-[20px]">
                    <Image
                        src="/Dehydration-IV-Treatment-1-1.jpg"
                        width={450}
                        height={1080}
                        style={{ objectFit: "cover" }}
                        alt="Dehydration IV Treatment"
                    />
                </div>
                <div className="flex flex-col h-fit w-[50%] p-[20px]">
                    <h2 className="text-[22px] font-medium sm:text-[24px] lg:text-[40px]">Dehydration</h2>
                    <p className="text-[14px] sm:text-[16px]">IV Treatment</p>
                    <p className="text-[16px] text-[#ffa9f9] mt-[20px]">Revitalize & Replenish</p>
                    <p className="text-[14px] my-[20px]">$<span className="text-[40px] font-medium">249</span></p>
                    <button className="w-fit px-[15px] py-[10px] bg-[#ffa9f9] text-white">Book Now</button>
                    <div className="flex flex-col justify-start pt-[20px] hidden sm:block">
                        <p className="text-black opacity-60">Includes a blend of IV fluids, electrolytes, and vitamins to help boost your energy levels and fight off fatigue.</p>
                        <p className="font-bold">*US locations only</p>
                        <p className="font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">B-Complex Vitamins, Vitamin B12, Vitamin C</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start p-[20px] sm:hidden">
                <p className="text-[16px] text-black opacity-60">Includes a blend of IV fluids, electrolytes, and vitamins to help boost your energy levels and fight off fatigue.</p>
                <p className="font-bold">*US locations only</p>
                <p className="text-[16px] font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">B-Complex Vitamins, Vitamin B12, Vitamin C</span></p>
            </div>
        </div>
    );
}