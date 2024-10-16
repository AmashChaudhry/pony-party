"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function Services() {
    const router = useRouter();
    const [services, setServices] = useState([]);
    const [serviceType, setServiceType] = useState('Drip');
    const [filtedServices, setFiltedServices] = useState([]);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [screenLoading, setScreenLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const getServicesData = async () => {
        try {
            const response = await fetch('/api/services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const serviceData = await response.json();
            setServices(serviceData.data);
        } catch (error) {
            console.error('Error fetching treatments:', error);
        } finally {
            setScreenLoading(false);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const serviceTypeFromUrl = params.get('serviceType');
        if (serviceTypeFromUrl) {
            setServiceType(serviceTypeFromUrl);
        }

        getServicesData();
    }, []);

    useEffect(() => {
        if (services.length > 0) {
            setFiltedServices(services.filter(service => service.category === serviceType));
        }
    }, [services, serviceType]);

    const handleDeleteClick = (service) => {
        setSelectedService(service);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async (serviceId) => {
        setLoading(true);
        try {
            const response = await fetch('/admin/api/delete-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: serviceId }),
            });

            if (response.ok) {
                setFiltedServices(prevServices => prevServices.filter(service => service._id !== serviceId));
                setDeleteModalOpen(false);
                const isMobile = window.innerWidth <= 768;
                toast.success(
                    <span className="text-[12px]">Deleted successfully</span>,
                    {
                        position: "top-center",
                        style: {
                            marginTop: isMobile ? '80px' : '0px',
                        },
                        duration: 5000,
                    }
                );
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (screenLoading) {
        return (
            <div className='flex flex-col items-center justify-center w-full min-w-screen' style={{ minHeight: 'calc(100vh - 140px)' }}>
                <PulseLoader color="#A1A1AA" size={10} />
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center w-full px-[20px] py-[20px]'>
            <div className='flex flex-row items-end justify-between w-full mb-[10px]'>
                <div className="relative w-[200px]">
                    <select
                        className="w-full p-[10px] text-[14px] border-[1px] border-black border-opacity-10 rounded-md focus:outline-none pr-[30px] appearance-none"
                        id="category"
                        value={serviceType}
                        onChange={(e) => {
                            const selectedType = e.target.value;
                            setServiceType(selectedType);
                            const params = new URLSearchParams(window.location.search);
                            params.set('serviceType', selectedType);
                            router.push(`?${params.toString()}`, undefined, { shallow: true });
                        }}
                        required
                    >
                        <option value="Drip">Drip</option>
                        <option value="Injection">Injection</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-[15px] pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
                <Link href='/admin/pages/add-service'>
                    <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[10px]'>
                        <IoMdAdd size={23} className="sm:mr-[5px]" />
                        <p className="hidden pr-[5px] sm:block">Add Service</p>
                    </button>
                </Link>
            </div>
            <div className="items-center w-full mb-[20px] md:hidden">
                <div className="h-[1px] w-full bg-black opacity-10"></div>
            </div>
            <div className="grid grid-cols-1 gap-[20px] items-start w-full md:border rounded-md md:px-[20px] md:py-[20px] lg:grid-cols-2 2xl:grid-cols-3">
                {
                    filtedServices.map((service, index) => (
                        <div key={index} className="flex flex-row items-start w-full border rounded-md p-[20px]">
                            <div className="flex justify-center h-[150px] w-auto mr-[20px]">
                                <img
                                    className="h-full w-auto object-cover"
                                    src={service.image.url}
                                    alt={service.title}
                                />
                            </div>
                            <div className='flex flex-col items-start h-[150px] w-full justify-between'>
                                <div className='flex flex-col items-start'>
                                    <p className="text-[14px] text-start font-bold">
                                        {`${index + 1}. ${service.title.toUpperCase()} - $${service.price}`}
                                    </p>
                                    <p className="text-black text-[14px] text-start text-opacity-60">
                                        {service.category}
                                    </p>
                                </div>
                                <div className='flex flex-row w-full space-x-[10px]'>
                                    <Link href={`/admin/pages/services/${service._id}`}>
                                        <button className='flex flex-row items-center bg-black text-white text-[14px] rounded-md px-[10px] py-[5px]'>
                                            <MdModeEdit size={15} className='mr-[5px]' />
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className='flex flex-row items-center bg-red-500 text-white text-[14px] rounded-md px-[10px] py-[5px]'
                                        onClick={() => handleDeleteClick(service)}
                                    >
                                        <MdDelete size={15} className='mr-[5px]' />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                deleteModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center px-[20px] z-50">
                        <div className="absolute inset-0 bg-black opacity-50" />
                        <div className="bg-white p-[20px] rounded-xl shadow-lg z-10" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-[16px] font-light mb-[20px]">
                                Are you sure you want to delete &quot;{selectedService.title}&quot;?
                            </h2>
                            <div className="flex flex-row justify-end space-x-[10px]">
                                <button
                                    className="bg-green-500 text-white  px-[10px] py-[5px] rounded-md"
                                    onClick={() => setDeleteModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 text-white w-[80px] py-[5px] rounded-md"
                                    onClick={() => handleConfirmDelete(selectedService._id)}
                                >
                                    {loading ? <PulseLoader color="#ffffff" size={6} /> : "Delete"}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}