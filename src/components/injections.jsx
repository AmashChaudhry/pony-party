"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Injections() {
    const [services, setServices] = useState([]);
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
            setServices(serviceData.data);
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

    const injections = services.filter(service => service.category === "Injection");

    return (
        <div className="flex flex-col items-center w-full bg-[#FAFAFA] py-[40px]">
            <h1 className="text-[20px] font-medium tracking-widest sm:text-[24px]">INJECTIONS</h1>
            <div className="flex flex-wrap justify-center w-full max-w-[1000px]">
                {
                    injections.length > 0 ? (
                        injections.map((injection, index) => (
                            <div key={index} className="flex flex-col items-center w-[50%] px-[20px] py-[60px] sm:w-[33.33%]">
                                <Link className="relative flex justify-center h-[80px] w-auto mb-[20px]" href={`/pages/vitamin-iv-treatment/${injection._id}`}>
                                    <img
                                        className="h-full w-auto"
                                        src={injection.icon}
                                        alt={injection.title}
                                    />
                                </Link>
                                <Link className="text-[12px] text-center font-medium hover:text-[#ffa9f9] sm:text-[14px] xl:text-[16px]" href={`/pages/vitamin-iv-treatment/${injection._id}`}>
                                    {injection.title}
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center h-[200px]">
                            <p className="text-[16px] font-medium text-gray-500">Coming Soon!</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}