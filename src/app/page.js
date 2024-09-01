import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-[24px] font-medium tracking-widest mt-[50px]">VITAMIN IV THERAPY</h1>
      <p className="text-gray-500 font-medium">Experience all the benefits of IV therapy in the comfort of your own home.</p>
      <div className="grid grid-cols-4 mt-[40px] w-[70vw]">
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">ENERGY BOOST – $299</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Replenish with essential energy-boosting fluids and vitamins.</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto m-[30px] px-[10px]">
          <div className="h-[250px] w-full bg-[#ffa9f9]"></div>
          <Link className="text-center hover:text-[#ffa9f9]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-center text-[14px] text-black text-opacity-60 mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
      </div>
    </main>
  );
}
