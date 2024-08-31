import React from "react";
import Link from "next/link";
import RegisterAccount from "./pages/register-account/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-[92vh]">
      <h1 className="text-[24px] font-medium tracking-widest mt-[50px]">VITAMIN IV THERAPY</h1>
      <p className="text-gray-500 font-medium">Experience all the benefits of IV therapy in the comfort of your own home.</p>
      <div className="flex flex-col items-center w-[250px] mx-[30px]">
        <div className="h-[250px] w-[250px] bg-[#ffa9f9]"></div>
        <Link href="/pages/register-account">DEHYDRATION - $249</Link>
        <div className="h-[2px] w-[100px] bg-[#ffa9f9] my-[10px]"></div>
        <p className="text-center mb-[30px]">Rehydrate and replenish your body with IV fluids</p>
        <button className="bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
      </div>
    </main>
  );
}
