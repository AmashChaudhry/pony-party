import react from "react";
import { FiChevronRight } from "react-icons/fi";

export default function FAQs() {
    return (
        <div className='flex flex-col w-full max-w-[1200px] px-[20px] md:flex-row md:space-x-[20px]'>
            <div className='flex flex-col w-full md:w-[50%]'>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>What is Pony Party IV?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Pony Party IV provides personalized IV therapy treatments in the comfort of your home. Our licensed medical professionals deliver IV hydration and other therapies tailored to your needs, ensuring convenience and comfort.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>How does IV therapy work?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            IV therapy administers vitamins, minerals, and fluids directly into your bloodstream, allowing for maximum absorption. This method ensures faster and more efficient delivery of essential nutrients compared to oral intake.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>Who can benefit from IV therapy?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            IV therapy is ideal for anyone looking to rehydrate quickly, boost their immune system, recover from physical activity, or relieve symptoms like fatigue, headaches, or nausea. We offer a range of treatments for hydration, wellness, and performance enhancement.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>What types of treatments do you offer?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            We offer a wide variety of IV therapies, including hydration, energy boosts, immune system support, hangover relief, beauty infusions, and more. Each treatment is customized to meet your specific needs.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>Is IV therapy safe?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Yes, our IV therapy treatments are administered by licensed medical professionals. We use sterile equipment and follow stringent protocols to ensure your safety and comfort.
                        </p>
                    </div>
                </details>
            </div>
            <div className='flex flex-col w-full md:w-[50%]'>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>How long does an IV therapy session take?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>
                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Most IV therapy sessions last between 30 to 60 minutes, depending on the treatment. You can relax comfortably during the session while our team takes care of everything.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>Do I need a consultation before booking?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Yes, we recommend a brief consultation to assess your health and discuss which treatment is best for you. This helps ensure that you receive the most effective and safe therapy for your needs.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>Can I book an IV treatment for a group?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Absolutely! We offer group IV therapy for events, corporate wellness programs, and parties. Contact us to arrange a customized session for your group.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>What areas do you serve?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            Pony Party IV offers in-home IV therapy throughout Scottsdale, Phoenix, Tempe in Arizona. If you are unsure if we service your area, feel free to reach out to us for more information.
                        </p>
                    </div>
                </details>
                <details className='bg-gray-100 shadow w-full group'>
                    <summary className='list-none flex flex-row items-center justify-between p-[20px] space-x-5 cursor-pointer'>
                        <h3 className='font-semibold flex-grow text-left'>How do I book an appointment?</h3>
                        <div className="flex w-[20px] justify-end">
                            <FiChevronRight className='group-open:rotate-90 transition-transform' size={16} />
                        </div>                    </summary>
                    <div className='bg-white p-[20px]'>
                        <p>
                            You can easily book your IV therapy session through our website&apos;s booking system, powered by Vaqaro, or by contacting us directly via phone or email. We offer flexible scheduling to accommodate your needs.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
}