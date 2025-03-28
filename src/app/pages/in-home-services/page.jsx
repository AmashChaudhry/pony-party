import React from "react";
import Link from "next/link";
import Drips from "@/components/drips";
import Injections from "@/components/injections";
import FAQs from "@/components/FAQs";

export default function InHomeServices() {
    return (
        <div className="flex flex-col items-center" >
            <div className="flex flex-col items-center p-[40px] sm:py-[60px] sm:pb-[60px] sm:w-[700px] lg:py-[80px] lg:pb-[90px] xl:py-[100px] xl:pb-[150px]">
                <h1 className="text-[26px] text-center font-medium py-[20px] sm:text-[34px]">Mobile Medical Service Menu</h1>
                <p className="text-[16px] text-center text-gray-500 font-medium sm:text-[18px]">Pony Party IV offers a variety of at home services. Learn more about what we offer below.</p>
            </div>
            <div className="flex flex-col items-center p-[30px]">
                <h1 className="text-[20px] text-center font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
                <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
            </div>
            <Drips />
            <span className="h-0 w-full sm:h-[60px]"></span>
            <Injections />
            <div className="flex flex-col items-center w-full py-[40px]">
                <h1 className="text-[20px] font-medium tracking-widest mb-[20px] sm:text-[24px] sm:mb-[40px]">MEMBERSHIPS</h1>
                <div className="flex flex-wrap justify-evenly space-x-[20px] w-full px-[20px] max-w-[1200px]">
                    <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
                        <Link
                            className="relative flex justify-center max-h-[400px]"
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
                        <Link
                            className="relative flex justify-center max-h-[400px]"
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-[45%] py-[20px] sm:w-[300px]">
                        <Link
                            className="relative flex justify-center max-h-[400px]"
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
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
                            href="https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVCl/3CjdOsZZ7EF4p4e+s0hEVod+oJ0uydouotjENszF/xz7ED18KniyrPa7wSf95Zrgy/u8lwz3kRjf9YgBLa6Hh9IKo/iaF2G3ArDtWgHnkrzsCAhIxrPanXQ37lr3PPNYEAgomQaACwNnh4wd5qsEcy7pQrphud2gnXih5l6g5982toMx3tzKIdcXEIBjfLq33qqK8jO98BrLDCBK4hWTZAs6kWRzzov4eOAMZtehefCYDcD5Y9Ui79h2cRBstQndlUp5YJ5EffSP3eQv5m4W2JFYa1hNGpYUpWnbw9y0xWFznfCos987gx8L5W+lgb96MAhCy9oM3np6Gj+jeL3GK3zeNiAFgGhxDLIl+GHnlt7AOy3k8d2K3AkDnKqvkpImMwuAS511FKZ5FbJcTmlnEWxgY25F2l9JB+7Vvuzf8O9++GjYZbIxLdsgHrdB7g=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-[12px] bg-[#ffa9f9] text-white font-medium px-[15px] py-[10px]">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <span className='h-[100px]'></span>
            <FAQs />
            <span className='h-[100px]'></span>
        </div>
    );
}