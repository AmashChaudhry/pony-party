import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQs from "@/components/FAQs";
import { FaRegCheckCircle } from "react-icons/fa";
import Drips from "@/components/drips";
import Injections from "@/components/injections";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[400px] lg:h-fit overflow-hidden">
        <div className="lg:hidden">
          <Image
            src="/home/home-title.jpg"
            alt="Dehydration IV Treatment"
            fill
            style={{ objectFit: "cover", objectPosition: "80% center" }}
          />
        </div>
        <div className="hidden lg:block">
          <img
            className='h-full w-full'
            src="/home/home-title.jpg"
            alt="IV Treatment"
          />
        </div>
        <div className="absolute inset-0 bg-black sm:bg-transparent opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-start sm:m-[40px] lg:max-w-[1200px] lg:justify-center lg:m-[60px] lg:px-[20px] xl:m-auto">
          <h1 className="flex flex-col text-white text-[26px] w-[300px] sm:w-full sm:text-black sm: font-normal sm:text-[20px] lg:text-[22px] xl:text-[26px]">
            <span className="tracking-widest sm:tracking-wide sm:text-[28px] sm:font-medium lg:text-[32px] xl:text-[36px]">Mobile IV Therapy</span>Convenience and Comfort</h1>
          <div className="mt-4 flex gap-8 sm:flex-col sm:gap-2 lg:flex-row">
            <Link href='/pages/book-iv-therapy'>
              <button className="px-[15px] py-[10px] bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] w-[100px] text-[12px] font-bold rounded-xl shadow-lg sm:w-fit sm:rounded-full xl:text-[14px]">
                <span className="text-black leading-none">Book IV Therapy</span>
              </button>
            </Link>
            <Link href='/pages/in-home-services'>
              <button className="px-[15px] py-[10px] bg-gradient-to-r from-[#ffa9f9] to-[#fff7ad] w-[100px] text-[12px] font-bold rounded-xl shadow-lg sm:w-fit sm:rounded-full xl:text-[14px]">
                <span className="text-black leading-none">View all Services</span>
              </button>
            </Link>
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
      <div className="flex flex-col items-center w-full py-[40px]">
        <h1 className="text-[20px] font-medium tracking-widest mb-[20px] sm:text-[24px] sm:mb-[40px]">MEMBERSHIPS</h1>
        <div className="flex flex-wrap justify-evenly space-x-[20px] w-full px-[20px] max-w-[1200px]">
          <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
            <Link
              className="relative flex justify-center max-h-[400px]"
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-full w-auto object-contain"
                src="/memberships/2.png"
                alt="Pony Party"
              />
            </Link>
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">$300 for 1 IV treatment & 1 injection</p>
            <p className="text-[10px] text-center sm:text-[12px] xl:text-[14px] mb-[40px]">*excluding NAD and NAD+</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
            <Link
              className="relative flex justify-center max-h-[400px]"
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-full w-auto object-contain"
                src="/memberships/3.png"
                alt="Pony Party"
              />
            </Link>
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">$600 for 2 IV treatments & 1 injection</p>
            <p className="text-[10px] text-center sm:text-[12px] xl:text-[14px] mb-[40px]">*excluding NAD and NAD+</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
            <Link
              className="relative flex justify-center max-h-[400px]"
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-full w-auto object-contain"
                src="/memberships/1.png"
                alt="Pony Party"
              />
            </Link>
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">$1000 for 4 IV treatments & 2 injections</p>
            <p className="text-[10px] text-center sm:text-[12px] xl:text-[14px] mb-[40px]">*excluding NAD and NAD+</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-[#FAFAFA] py-[40px]">
        <h1 className="text-[20px] font-medium tracking-widest mb-[20px] sm:text-[24px] sm:mb-[40px]">ADD ONS</h1>
        <div className="flex flex-wrap justify-evenly w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center w-[50%] p-[20px] sm:w-[300px]">
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">Famotidine (Pepcid) $20</p>
            <p className="text-[10px] text-center mb-[20px] sm:text-[12px] xl:text-[14px]">USE: Antacid</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-[50%] p-[20px] sm:w-[300px]">
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">Ondansetron (Zofran) $20</p>
            <p className="text-[10px] text-center mb-[20px] sm:text-[12px] xl:text-[14px]">USE: Anti Nausea</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
          <div className="flex flex-col items-center w-[50%] p-[20px] sm:w-[300px]">
            <p className="text-[10px] text-center font-semibold sm:text-[12px] xl:text-[14px]">Toradol $20</p>
            <p className="text-[10px] text-center mb-[20px] sm:text-[12px] xl:text-[14px]">USE: Pain Relief/Inflammation</p>
            <Link
              href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6L0e4YbNHKUlTQbEsf1af878yDh27sqGfzsPutzAyUm9FATSJaAO5Ba3ZIlH8afVXudgnLWatlpayldQ3yfZvEyIbF4iQq1MPNKdJln5rXiJVV8vImZiQzq5jGDh1OkChCx/wml8Ytx0PNp7kYhbnfykAmv+u3ZN130RvOzn77rdz7+ibGI8+Lv5IaP6wPT9dv7dsn3aosKxc5hn4plB2Jp5T2EQTcyjtO08IzvkH6fzWNigQqQnR5g4Q6m5nc6QQ9ayEx2y8r2j64SQsDZIHLdmlLiw+syZHFq1uJimdrs+ZD6ddkw2mDEHMf1GjLu0GHFNnY+bPcPGO/2adHXNvB2tw5aFRGrJ7CFJOK4aaKvQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
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
        <h2 className="text-[24px] font-medium">What Makes us Different</h2>
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
      <span className='h-[100px]'></span>
      <FAQs />
      <span className='h-[100px]'></span>
    </main>
  );
}
