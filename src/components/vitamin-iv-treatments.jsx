"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function VitaminIVTreatments() {
    const [treatments, setTreatments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getServicesData = async () => {
        try {
            const response = await fetch('/api/services', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const serviceData = await response.json();
            setTreatments(serviceData.data);
        } catch (error) {
            console.error('Error fetching treatments:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getServicesData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px] sm:gap-[40px] md:grid-cols-3 lg:grid-cols-4 m-[30px] w-auto lg:max-w-[1200px]">
            {
                treatments.filter(treatment => treatment.category === "Drip").map((treatment, index) => (
                    <div key={index} className="flex flex-col items-center w-auto">
                        <div className="relative flex justify-center h-[150px] w-full sm:h-[250px]">
                            <img
                                className="h-full w-auto object-cover"
                                src={treatment.image}
                                alt={treatment.title}
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href={`/pages/vitamin-iv-treatment/${treatment._id}`}>
                            {`${treatment.title} - $${treatment.price}`}
                        </Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">
                            {treatment.subTitle}
                        </p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                ))
            }
        </div>
    );
}