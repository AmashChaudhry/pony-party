'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function VitaminIVTreatmentDetail({ params }) {
    const { id } = params;
    const [treatment, setTreatment] = useState(null);
    const [loading, setLoading] = useState(true);

    const getServiceData = async () => {
        try {
            const response = await fetch('/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: id }),
            });
            const serviceData = await response.json();
            setTreatment(serviceData.data);
        } catch (error) {
            console.error('Error fetching treatment:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getServiceData();
    }, []);

    if (loading) {
        return (
            <div
                className="flex flex-col items-center justify-center"
                style={{ height: 'calc(100vh - 80px)' }}
            >
                Loading...
            </div>
        );
    }

    if (!treatment) {
        return (
            <div
                className="flex flex-col items-center justify-center"
                style={{ height: 'calc(100vh - 80px)' }}
            >
                Treatment not found
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <span className="h-0 w-full lg:h-[30px]"></span>
            <div className="flex flex-row justify-center w-full max-w-[1200px] m-auto lg:items-center">
                <div className="relative flex justify-center h-fit w-[50%] p-[20px]">
                    <Image
                        src={treatment.image}
                        width={500}
                        height={1080}
                        style={{ objectFit: "cover" }}
                        alt={treatment.title}
                    />
                </div>
                <div className="flex flex-col h-fit w-[50%] p-[20px]">
                    <h2 className="text-[22px] font-medium sm:text-[24px] lg:text-[40px]">{treatment.title}</h2>
                    <p className="text-[14px] sm:text-[16px]">IV Treatment</p>
                    <p className="text-[16px] text-[#ffa9f9] mt-[20px]">{treatment.category}</p>
                    <p className="text-[14px] my-[20px]">$<span className="text-[40px] font-medium">{treatment.price}</span></p>
                    <button className="w-fit px-[15px] py-[10px] bg-[#ffa9f9] text-white">Book Now</button>
                    <div className="hidden justify-start pt-[20px] sm:block">
                        <p className="text-black opacity-60">{treatment.description}</p>
                        <p className="font-bold">*US locations only</p>
                        <p className="font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{treatment.ingredients}</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start p-[20px] sm:hidden">
                <p className="text-[16px] text-black opacity-60">{treatment.description}</p>
                <p className="font-bold">*US locations only</p>
                <p className="text-[16px] font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{treatment.ingredients}</span></p>
            </div>
        </div>
    );
};