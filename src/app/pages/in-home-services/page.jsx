import React from "react";
import Link from "next/link";
import Image from "next/image";
import VitaminIVTreatments from "@/components/drips";

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
            <VitaminIVTreatments/>
            <span className="h-0 w-full sm:h-[60px]"></span>





            {/* <div className="flex flex-col items-center w-full h-fit bg-[#FAFAFA] py-[80px]">
                <h2 className="text-[18px] font-medium tracking-widest sm:text-[26px]">WELLNESS TREATMENTS</h2>
                <div className="flex flex-wrap justify-center m-auto h-fit w-full max-w-[1200px]">
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/nad-injection.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="flex flex-row text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">NAD+ INJECTION<span className="hidden sm:block">&nbsp;THERAPY</span></Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer NAD+ injections for patients to self-administer at home.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/nasal-spray.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">NAD+ NASAL SPRAY</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We deliver NAD nasal sprays directly to your door for easy self-administration and fast results.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/peptide-therapy.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">Peptide Therapy</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We provide at-home self-administered peptide injections which offer a wide variety of anti-aging benefits.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/testosterone-therapy.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">Testosterone Therapy</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer self-administered testosterone injections which help improve workouts, boost energy, and enhance sex drive.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/medical-weight-loss.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">Medical Weight Loss</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We provide medical weight loss injections to help patients effectively lose weight.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/wellness-treatment-icons/hair-loss-treatment.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">Hair Loss Treatments</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">Start your hair regrowth journey today. Prescription medications delivered to your door.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                </div>
            </div> */}






            {/* <div className="flex flex-col items-center w-full h-fit bg-white py-[80px]">
                <h2 className="text-[18px] font-medium tracking-widest sm:text-[26px]">GENERAL MEDICINE</h2>
                <div className="flex flex-wrap justify-center m-auto h-fit w-full max-w-[1200px]">
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="flex flex-row text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">HOUSE CALLS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We provide medical house calls for primary care and urgent care needs to patients at their home, hotel, and office.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">VIRTUAL CONSULTATION</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We provide virtual consultations for both primary and urgent care needs.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">LAB TESTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer a variety of in-home lab tests to help identify deficiencies or issues and develop a wellness plan.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">LAB DRAW</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer in-home lab draws, a convenient, comfortable, and discreet way to submit a specimen for analysis.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">RAPID TESTS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer mobile rapid point of care testing for individuals and groups at homes, offices, & hotels.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Calender"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">VACCINES</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">We offer a variety of in-home vaccines for disease prevention and travel requirements.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                </div>
            </div> */}





            {/* <div className="flex flex-col items-center w-full h-fit bg-[#FAFAFA] py-[40px]">
                <h2 className="text-[18px] font-medium tracking-widest sm:text-[26px]">COMMUNITY</h2>
                <div className="flex flex-wrap justify-center m-auto h-fit w-full max-w-[1200px]">
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/events.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Events"
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
                                src="/basic-icons/corporate-wellness.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Corporate Wellness"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">CORPORATE WELLNESS</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">Bring comprehensive wellness offerings into the workplace to combat burnout, prevent sickness, and boost productivity.</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                    <div className="flex flex-col items-center w-[45%] px-[20px] py-[40px] m-auto sm:w-[310px] sm:m-0 lg:px-[30px]">
                        <div className="relative h-[50px] w-full m-[40px] sm:h-[70px]">
                            <Image
                                src="/basic-icons/licensing-consulting.png"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Licensing Consulting"
                            />
                        </div>
                        <Link className="text-[10px] text-center font-bold hover:text-[#ffa9f9] sm:text-[12px] lg:text-[14px]" href="/pages/register-account">LICENSING/CONSULTING</Link>
                        <div className="h-[2px] w-[80px] bg-[#ffa9f9] my-[10px]"></div>
                        <p className="text-[10px] text-center text-black text-opacity-60 h-[60px] mb-[30px] sm:text-[12px] lg:text-[14px] lg:h-[80px]">Explore our wide variety of partnership and licensing opportunities</p>
                        <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                    </div>
                </div>
            </div> */}

            

        </div>
    );
}