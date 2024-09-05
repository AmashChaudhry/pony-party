import React from "react";
import Image from "next/image";

export default function VitaminIVTreatmentDetail() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full max-w-[1200px] m-auto">
                <div className="relative h-fit w-[50%] p-[20px]">
                    <Image
                        src="/Dehydration-IV-Treatment-1-1.jpg"
                        width={1920}
                        height={1080}
                        style={{ objectFit: "cover" }}
                        alt="Dehydration IV Treatment"
                    />
                </div>
                <div className="flex flex-col h-fit w-[50%] p-[20px]">
                    <h2 className="text-[22px]">Dehydration</h2>
                    <p className="text-[14px]">IV Treatment</p>
                    <p className="text-[16px] text-[#ffa9f9] mt-[20px]">Revitalize & Replenish</p>
                    <p className="text-[14px] my-[20px]">$<span className="text-[30px] font-bold">249</span></p>
                    <button className="w-fit px-[15px] py-[10px] bg-[#ffa9f9] text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
}