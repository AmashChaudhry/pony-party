import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center px-[30px]">
        <h1 className="text-[20px] font-medium tracking-widest mt-[50px] sm:text-[24px]">VITAMIN IV THERAPY</h1>
        <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[40px] w-auto lg:max-w-[1200px]">
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[10px] px-[10px]">
          <div className="h-[200px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-[12px] text-center font-bold hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div> 
          <p className="text-[12px] text-center text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
      </div>
    </main>
  );
}
