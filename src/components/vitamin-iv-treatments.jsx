"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const treatments = [
    {
        title: "DEHYDRATION",
        subtitle: "Rehydrate and replenish your body with IV fluids",
        ingrediants: "IV Fluids, Electrolytes",
        effects: "Revitalize & Replenish",
        price: "$249",
        description: "Includes a blend of IV fluids and electrolytes formulated for quick hydration, leaving you feeling revitalized and refreshed.",
        link: "/pages/vitamin-iv-treatment-detail",
        src: "/Dehydration-IV-Treatment-1-1.jpg",
        alt: "Dehydration IV Treatment",
    },
    {
        title: "ENERGY BOOST",
        subtitle: "Replenish with essential energy-boosting fluids and vitamins.",
        ingrediants: "B-Complex Vitamins, Vitamin B12, Vitamin C",
        effects: "Replenish & Revive",
        price: "$299",
        description: "Includes a blend of IV fluids, electrolytes, and vitamins to help boost your energy levels and fight off fatigue.",
        link: "/pages/vitamin-iv-treatment-detail",
        src: "/Energy-Boost-IV-Treatment-big.jpg",
        alt: "ENERGY BOOST IV Treatment",
    },
];

export default function VitaminIVTreatments() {
    return (
        <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px] sm:gap-[40px] md:grid-cols-3 lg:grid-cols-4 m-[30px] w-auto lg:max-w-[1200px]">
            {treatments.map((treatment, index) => (
                <div key={index} className="flex flex-col items-center w-auto">
                    <div className="relative h-[150px] w-full sm:h-[250px]">
                        <Image
                            src={treatment.src}
                            fill
                            style={{ objectFit: "contain" }}
                            alt={treatment.alt}
                        />
                    </div>
                    <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]"
                        href={{
                            pathname: treatment.link,
                            query: {
                                title: treatment.title,
                                ingredients: treatment.ingrediants,
                                effects: treatment.effects,
                                price: treatment.price,
                                description: treatment.description,
                                src: treatment.src,
                                alt: treatment.alt,
                            },
                        }}
                    >
                        {`${treatment.title} - ${treatment.price}`}
                    </Link>
                    <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                    <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">
                        {treatment.subtitle}
                    </p>
                    <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                </div>
            ))}
        </div>
    );
}