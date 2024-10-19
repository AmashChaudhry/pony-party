'use client'
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

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
                <PulseLoader color="#ffa9f9" size={10} />
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
        <div className="flex flex-col items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <span className="h-0 w-full lg:h-[40px]"></span>
            <div className="flex flex-row justify-center w-full max-w-[1200px] mx-auto lg:items-center">
                <div className="relative flex justify-center h-fit w-[50%] py-[20px] sm:px-[20px] md:px-[40px]">
                    <img
                        className="h-full w-auto"
                        src={treatment.image.url}
                        alt={treatment.title}
                    />
                </div>
                <div className="flex flex-col h-fit w-[50%] p-[20px]">
                    <h2 className="text-[22px] font-medium sm:text-[24px] lg:text-[40px]">{treatment.title.toUpperCase()}</h2>
                    {
                        treatment.category === "Drip" ? <p className="text-[14px] sm:text-[16px]">IV Treatment</p> : null
                    }
                    <p className="text-[16px] text-[#ffa9f9] mt-[20px]">{treatment.effects}</p>
                    <p className="text-[14px] my-[20px]">$<span className="text-[40px] font-medium">{treatment.price}</span></p>
                    <Link
                        href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-fit px-[15px] py-[10px] bg-[#ffa9f9] text-white">Book Now</button>
                    </Link>
                    <div className="hidden justify-start pt-[20px] sm:block">
                        <p className="text-black opacity-60">{treatment.description}</p>
                        <p className="font-bold">*US locations only</p>
                        {
                            treatment.category === 'Drip' ? (
                                <p className="font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{treatment.ingredients}</span></p>
                            ) : (
                                null
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start p-[20px] sm:hidden">
                <p className="text-[16px] text-black opacity-60">{treatment.description}</p>
                <p className="font-bold">*US locations only</p>
                {
                    treatment.category === 'Drip' ? (
                        <p className="text-[16px] font-bold my-[20px]">INGREDIENTS: <span className="text-black opacity-60 font-normal">{treatment.ingredients}</span></p>
                    ) : (
                        null
                    )
                }
            </div>
            {
                treatment.uses && treatment.uses.length > 0 && treatment.category === 'Drip' && (
                    <div className="flex flex-col items-center w-full bg-[#FAFAFA] py-[40px]">
                        <div className="flex flex-col items-center w-full max-w-[1200px]">
                            <h1 className="text-[20px] font-medium sm:text-[22px] md:text-[24px] lg:text-[26px]">
                                Best Uses For {treatment.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} {treatment.category === "Drip" ? "IV" : null}
                            </h1>
                            <span className="h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]"></span>
                            <div className="flex flex-wrap justify-evenly w-full">
                                {
                                    treatment.uses.map((use, index) => (
                                        <div key={index} className="flex flex-col items-center w-full max-w-[190px] px-[10px] py-[40px]">
                                            <div className="relative flex justify-center h-[80px] w-auto mb-[20px]">
                                                <img
                                                    className="h-full w-auto"
                                                    src={use.icon.url}
                                                    alt={use.name}
                                                />
                                            </div>
                                            <p className="text-center">{use.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};