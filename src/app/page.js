import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import Drips from "@/components/drips";
import Injections from "@/components/injections";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[400px] lg:h-fit overflow-hidden">
        <div className="lg:hidden">
          <Image
            src="/Mobile_IV_Therapy__Medical_Services_Delivered_To_You.jpg"
            alt="Dehydration IV Treatment"
            fill
            style={{ objectFit: "cover", objectPosition: "75% center" }}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/Mobile_IV_Therapy__Medical_Services_Delivered_To_You.jpg"
            alt="Dehydration IV Treatment"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 bg-black sm:bg-transparent opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center sm:items-start sm:justify-center sm:text-start sm:m-[40px] lg:max-w-[1200px] lg:justify-center lg:m-[60px] lg:px-[20px] xl:m-auto">
          <h1 className="flex flex-col text-white text-[26px] w-[300px] sm:w-full sm:text-black sm: font-normal sm:text-[20px] lg:text-[22px] xl:text-[26px]">
            <span className="tracking-widest sm:tracking-wide sm:text-[28px] sm:font-medium lg:text-[32px] xl:text-[36px]">Mobile IV Therapy</span>& Medical Services Delivered To You
          </h1>
          <div className="mt-4 flex gap-8 sm:flex-col sm:gap-2 lg:flex-row">
            <button className="px-[15px] py-[10px] bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] w-[100px] text-[12px] font-bold rounded-xl sm:w-fit sm:rounded-full xl:text-[14px]">
              <span className="text-black leading-none">Book IV Therapy</span>
            </button>
          </div>
        </div>
      </div>
      <span className="h-[30px] w-full lg:h-[60px]"></span>
      <div className="flex flex-col items-center p-[30px]">
        <h1 className="text-[20px] font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
        <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
      </div>
      <Drips />
      <span className="h-[30px] w-full lg:h-[60px]"></span>
      <Injections />
      <div className="flex flex-col items-center w-full py-[60px]">
        <div className="flex flex-col items-center w-full max-w-[1200px] px-[20px] md:flex-row">
          <div className="w-full h-full mb-10 md:mb-0">
            <Image
              src="/home/iv-drip-vitamin-infusion-therapy-saline-bag_144356-61806.jpg"
              width={350}
              height={350}
              className="w-full h-auto"
              style={{ objectFit: "cover" }}
              alt="Nurse"
            />
          </div>
          <div className="flex flex-col items-start w-full md:ml-10">
            <h1 className="text-[30px] mb-10">What Is IV Nutritional Therapy?</h1>
            <p className="mb-5">
              IV nutritional therapy, also known as intravenous therapy, IV nutrition, or IV nutrient therapy, is a treatment widely recognized for its numerous health benefits. These may include anti-aging effects, enhanced immune function, reduced anxiety, alleviation of hangover symptoms, and more. Despite the common belief that nutrient deficiencies are rare today, many individuals still lack the essential nutrients needed for optimal body performance.        </p>
            <p className="mb-5">
              Since IV treatment is administered directly into the bloodstream, it can deliver faster results compared to oral supplements or other traditional medications. Many physicians consider IV nutrient therapy to be safe, effective, and restorative, with the ability to be tailored to the individual needs of each patient.
            </p>
            <p className="mb-10">
              As a supplier of IV vitamin therapy and an IV pharmacy, Pony Party offers a wide range of IV kits designed to meet diverse needs. Explore our full selection of available IV kits online.
            </p>
            <h1 className="text-[26px] mb-10">Possible Benefits of IV Nutritional Therapy:</h1>
            <div className="flex flex-col justify-start w-full lg:flex-row">
              <div className="mr-[40px]">
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Boosts energy</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Detoxifies the body</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Enhances the immune system</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Helps prevent illness</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Decreases artery plaque</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Boosts energy</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Detoxifies the body</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Enhances the immune system</p>
                </div>
                <div className="flex flex-row items-center mb-[10px]">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Helps prevent illness</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-[30px] h-[30px]">
                    <FaRegCheckCircle size={30} className="text-[#ffa9f9]" />
                  </div>
                  <p className="ml-[30px]">Decreases artery plaque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="h-0 w-full sm:h-[60px]"></span>
      <div className="flex flex-col items-center w-full bg-[#FAFAFA] py-[40px]">
        <h2 className="text-[24px] font-medium">What Make us Different</h2>
        <div className="flex flex-wrap justify-center mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
            <div className="relative h-[100px] w-full m-[10px]">
              <Image
                src="/about-us/map.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Calender"
              />
            </div>
            <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Personalized Care from Trusted Professionals</h3>
          </div>
          <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
            <div className="relative h-[100px] w-full m-[10px]">
              <Image
                src="/about-us/medical.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Calender"
              />
            </div>
            <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Convenience Meets Comfort</h3>
          </div>
          <div className="flex flex-col items-center h-fit w-[45%] px-[10px] my-[60px] sm:w-[310px]">
            <div className="relative h-[100px] w-full m-[10px]">
              <Image
                src="/about-us/reviews.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Calender"
              />
            </div>
            <h3 className="text-[14px] text-center font-bold hover:text-[#ffa9f9] mt-[20px] sm:text-[16px]">Holistic Wellness, Elevated</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
