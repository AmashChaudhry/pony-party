"use client";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function Services() {
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
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen'>
                <PulseLoader color="#ffa9f9" size={10} />
            </div>
        );
    }

    const drips = services.filter(service => service.category === "Drip");

    return (
        <div className='flex flex-col items-center w-full px-[20px] py-[20px]'>
            <div className='flex flex-col items-end w-full mb-[20px]'>
                <Link href='/admin/pages/add-service'>
                    <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                        <MdAddCircle size={15} className='mr-[5px]' />
                        Add Service
                    </button>
                </Link>
            </div>
            <div className="flex flex-col items-start w-full border rounded-md px-[20px] py-[20px]">
                {
                    drips.map((drip, index) => (
                        <div key={index} className="flex flex-row items-start w-full border rounded-md p-[20px] mb-[20px]">
                            <Link className="flex justify-center h-[150px] w-auto mr-[20px]" href={`/pages/service/${drip._id}`}>
                                <img
                                    className="h-full w-auto object-cover"
                                    src={drip.image.url}
                                    alt={drip.title}
                                />
                            </Link>
                            <div className='flex flex-col items-start h-[150px] w-full justify-between'>
                                <div className='flex flex-col items-start'>
                                    <Link className="text-[14px] text-start font-bold hover:text-[#ffa9f9]" href={`/pages/service/${drip._id}`}>
                                        {`${index + 1}. ${drip.title.toUpperCase()} - $${drip.price}`}
                                    </Link>
                                    <p className="text-black text-[14px] text-start text-opacity-60">
                                        {drip.category}
                                    </p>
                                </div>
                                <div className='flex flex-row w-full space-x-[10px]'>
                                    <Link href={`/admin/pages/services/${drip._id}`}>
                                        <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                                            <MdModeEdit size={15} className='mr-[5px]' />
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='flex flex-row items-center bg-red-500 text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                                        <MdDelete size={15} className='mr-[5px]' />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}