import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="relative w-full h-[40vh] lg:h-fit overflow-hidden">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center sm:items-start sm:justify-start sm:text-start sm:m-[40px] lg:max-w-[1200px] lg:justify-center lg:m-[60px] lg:px-[20px] xl:m-auto">
          <h1 className="flex flex-col text-white text-[26px] font-medium w-[300px] sm:w-full sm:text-black sm: font-normal sm:text-[20px] lg:text-[22px] xl:text-[26px]">
            <span className="tracking-widest sm:tracking-wide sm:text-[28px] sm:font-medium lg:text-[32px] xl:text-[36px]">Mobile IV Therapy</span>& Medical Services Delivered To You
          </h1>
          <div className="mt-4 flex gap-8 sm:flex-col sm:gap-2 lg:flex-row">
            <button className="px-[15px] py-[10px] bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] w-[100px] text-[12px] font-bold rounded-xl sm:w-fit sm:rounded-full xl:text-[14px]">
              <span className="text-black leading-none">Book IV Therapy</span>
            </button>
            <button className="px-[15px] py-[10px] bg-gradient-to-r from-[#ffa9f9] to-[#fff7ad] w-[100px] text-[12px] font-bold rounded-xl sm:w-fit sm:rounded-full xl:text-[14px]">
              <span className="text-black leading-none">View all Services</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[120px] bg-[#FAFAFA] sm:h-[150px] lg:h-[260px] xl:h-[180px]">
        <div className="grid grid-cols-3 gap-5 w-full h-[120px] bg-[#FAFAFA] px-[20px] py-[20px] sm:h-[150px] lg:max-w-[1200px] lg:px-[40px] lg:py-[60px] lg:h-[260px] lg:gap-10 lg:h-[260px] xl:h-[180px] xl:grid-cols-6 xl:px-[10px] xl:m-auto">
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_370d4971fc8e47dd9b13cb385bf3fa1d.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_5801e1e44d94427d942badb46ffe9e4a.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_fff87e9ef4494665990194ff6a23a42a.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_10072b43c8de418ba98619c5272a4a07.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_f8ac939bd4134736aa886e231e83fa38.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/brand-logos/assets_TEMP_bc51997622674349a4599e21ccb19161.webp"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-[30px]">
        <h1 className="text-[20px] font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
        <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px] sm:gap-[40px] md:grid-cols-3 lg:grid-cols-4 m-[30px] w-auto lg:max-w-[1200px]">
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
        <div className="flex flex-col items-center w-auto">
          <div className="relative h-[150px] w-full sm:h-[250px]">
            <Image
              src="/Dehydration-IV-Treatment-1-1.jpg"
              fill
              style={{ objectFit: "contain" }}
              alt="Dehydration IV Treatment"
            />
          </div>
          <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] xl:text-[14px]" href="/pages/register-account">DEHYDRATION - $249</Link>
          <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
          <p className="text-[10px] text-center text-black text-opacity-60 h-[40px] mb-[30px] sm:text-[12px] xl:text-[14px]">Rehydrate and replenish your body with IV fluids</p>
          <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
        </div>
      </div>
    </main>
  );
}
