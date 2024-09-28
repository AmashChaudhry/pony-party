import React from "react";
import VitaminIVTreatments from "@/components/drips";

export default function InHomeServices() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-[40px] sm:py-[60px] sm:pb-[60px] sm:w-[700px] lg:py-[80px] lg:pb-[90px] xl:py-[100px] xl:pb-[150px]">
                <h1 className="text-[26px] text-center font-medium py-[20px] sm:text-[34px]">Mobile Medical Service Menu</h1>
                <p className="text-[16px] text-center text-gray-500 font-medium sm:text-[18px]">Drip Hydration offers a variety of at home services. Learn more about what we offer below.</p>
            </div>
            <div className="flex flex-col items-center p-[30px]">
                <h1 className="text-[20px] text-center font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
                <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
            </div>
            <VitaminIVTreatments />
            <span className="h-0 w-full sm:h-[60px]"></span>
        </div>
    );
}