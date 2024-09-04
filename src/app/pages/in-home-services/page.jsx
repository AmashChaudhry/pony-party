import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function InHomeServices() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-[40px] sm:py-[60px] sm:pb-[60px] sm:w-[700px] lg:py-[80px] lg:pb-[90px] xl:py-[100px] xl:pb-[150px]">
                <h1 className="text-[26px] text-center font-medium py-[20px] sm:text-[34px]">Mobile Medical Service Menu</h1>
                <p className="text-[16px] text-center text-gray-500 font-medium sm:text-[18px]">Drip Hydration offers a variety of at home services. Learn more about what we offer below.</p>
            </div>
            <div className="flex flex-col items-center p-[30px]">
                <h1 className="text-[20px] text-center font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
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







            <div className="flex flex-col items-center w-full h-fit bg-[#FAFAFA] py-[40px]">
                <h2 className="text-[18px] font-medium tracking-widest sm:text-[26px]">Wellness Treatments</h2>
                <div className="flex flex-wrap justify-center m-auto h-fit w-full max-w-[1200px]">
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/calendar.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">EVENTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">On-site wellness services to elevate your event and make it one to remember.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>

                </div>
            </div>




        </div>
    );
}