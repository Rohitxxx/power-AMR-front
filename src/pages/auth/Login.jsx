import React, { useState } from "react";

export default function Login() {
    // Get Properties Data

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const getLogin = async () => {
        // let url = 'user/login';
        // let data = {
        //     email: userEmail,
        //     password: userPassword,
        // }

        window.location.href = '/dashboard';
        try {
            console.log("dasd")
        } catch (error) {
            // Handle error or dispatch error-related actions her
            console.log(error);
        }
    }

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setUserEmail(value)
        }
        if (name === "password") {
            setUserPassword(value)
        }
    }

    return (
        <div className="bg-login_main_bg overflow-y-scroll flex items-center min-h-[100vh] justify-center no-scrollbar bg-cover md:bg-top bg-center ">
            <section className=" dark:bg-gray-900 w-11/12 xl:w-[95%] lg:w-[95%]">
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="flex w-full flex-col sm:flex-row items-center justify-evenly px-6 py-8 gap-10 sm:gap-36 lg:gap-4 mx-auto lg:py-0 xl:mt-5 lg:mt-10">
                        <div className="sm:w-5/12 w-full lg:w-5/12 xl:w-5/12 bg-white rounded-xl shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 flex justify-between sm:p-8">
                                <div className="w-3/12">
                                    <img src={"/assets/logo.png"} alt="logo" className="md:cursor-pointer h-16 w-24" />
                                </div>
                                <div className="w-8/12 text-right ">
                                    <h1 className="text-xl text-right font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Hey,
                                        <br />
                                        Welcome Back!
                                    </h1>
                                    <span className="text-[#7E8B9E] text-sm text-right ">We are very happy to see you back!</span>
                                </div>
                            </div>
                            <div className="p-6 pt-1 space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@invest.com"
                                        value={userEmail}
                                        onChange={handleDetailsChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={userPassword}
                                        onChange={handleDetailsChange}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <button type="submit" onClick={getLogin} className="w-full text-white bg-[#003399]  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                                <div className="pt-2 flex justify-center gap-10">
                                    <div className="w-fit text-center">
                                        <span className="text-[#7E8B9E] text-base font-medium text-right">Download App</span>
                                        <img src={"/assets/google-play-store.png"} alt="logo" className="md:cursor-pointer h-auto w-auto m-auto mt-1" />
                                    </div>
                                    <div className="w-fit text-center">
                                        <span className="text-[#7E8B9E] text-base font-medium text-right">Follow us on</span>
                                        <img src={"/assets/lin.png"} alt="logo" className="md:cursor-pointer h-auto w-auto m-auto mt-1" />
                                    </div>
                                </div>
                                <div className="pt-2 text-center">
                                    <div className="w-full text-center">
                                        <p className="text-[#7E8B9E] text-sm font-medium text-center mb-2">Copyright © 2017 <span className="text-[#3568FF]">Logics PowerAMR [P] Ltd.</span></p>
                                        <p className="text-[#7E8B9E] text-sm font-medium text-center">Visit Our Entire Portfolio © <span className="text-[#3568FF]">www.poweramr.in</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 sm:w-5/12 w-full flex flex-col xl:w-6/12 lg:w-7/12 justify-center gap-10 xl:gap-6 ">
                            <div className="w-full xl:w-10/12 m-auto lg:px-10 2xl:px-7 sm:px-24 px-6 xl:px-18 py-3 bg-white border-[#003399] border-[2px] rounded-xl shadow md:mt-0 lg:py-2 dark:bg-gray-800 dark:border-gray-700">
                                <h1 className="text-xl sm:text-2xl xl:text-xl 2xl:text-xl text-center mb-1 font-bold leading-tight tracking-tight text-[#003399] dark:text-white lg:text-lg">Most Advanced Platform</h1>
                                <h3 className="text-base sm:text-xl xl:text-lg text-center font-medium leading-tight tracking-tight text-[#003399] dark:text-white lg:text-base">for Solar Plant Management & Control</h3>
                            </div>
                            <div className="pt-2 w-full  flex flex-col justify-center gap-10 gap-y-14 xl:gap-y-10 lg:gap-y-10">
                                <div className="flex w-full flex-row justify-between gap-10 sm:gap-16 z-50 ">
                                    <div className="w-full px-3 py-3 bg-white border-[#003399] border-[2px] rounded-xl shadow md:mt-0  dark:bg-gray-800 dark:border-gray-700">
                                        <ul className="list-disc px-3 text-[#003399] font-medium">
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Cloud & Local Dashboard Solution</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Comprehensive MobileApp</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Alerts & notifications thru Email & SMS</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Progressive web application to support mobile, tab, laptop, view</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Global Integration with third part platform & API</li>
                                        </ul>
                                    </div>
                                    <div className="w-full px-3 py-3 bg-white border-[#003399] border-[2px] rounded-xl shadow md:mt-0  dark:bg-gray-800 dark:border-gray-700">
                                        <ul className="list-disc px-3 text-[#003399] font-medium">
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Solar PV Monitoring</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">DG PV Controller</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Zero Export</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Weather Sensors</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Smart Data Loggers - WiFi, LAN, 4G, wireless for sites with no/limited network</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Advanced Analytics</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full h-10 flex justify-center" >
                                    <div className="w-80 h-80 grid grid-cols-2 relative top-[-140px]" >
                                        <div className="bg-login_Cicrl1 border-b border-r flex flex-col py-4 px-2 lg:py-2 justify-end items-end border-[#fff] rounded-tl-full">
                                            <span className="text-right font-medium text-[20px] lg:text-[16px] lg:mb-1 px-0 text-[#fff] mb-2">Engagement</span>
                                            <div className="text-[#fff] ">
                                                <svg width="29" height="21" className="lg:w-5 lg:h-5" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.12187 18.0177C0.767347 17.6542 0.684371 17.1086 0.915091 16.6581L2.03749 14.4662C4.69391 9.27871 10.0746 6.00898 15.9549 6.00898H16.5068C16.5471 5.14454 16.5989 4.28051 16.6626 3.41709L16.7712 1.9447C16.8594 0.74732 18.2096 0.0779711 19.2327 0.724411C22.589 2.84503 25.5067 5.5775 27.8304 8.77622L28.5602 9.78071C28.8608 10.1944 28.8608 10.7517 28.5602 11.1652L27.8304 12.1699C25.5067 15.3685 22.589 18.101 19.2327 20.2216C18.2096 20.8681 16.8594 20.1987 16.7712 19.0013L16.6626 17.5289C16.5866 16.4978 16.5272 15.4658 16.4847 14.4333C13.0449 14.335 9.60941 15.0217 6.45202 16.4625L2.48853 18.2715C2.0248 18.483 1.4764 18.3813 1.12187 18.0177ZM4.67105 14.6616L5.4463 14.3078C9.30411 12.5472 13.537 11.8039 17.7371 12.1229C18.3488 12.1694 18.8266 12.6646 18.8447 13.2709C18.8855 14.6337 18.956 15.9958 19.0563 17.3564L19.065 17.4741C21.6944 15.6363 23.9989 13.3764 25.8813 10.7852L26.108 10.4731L25.8813 10.1607C23.9989 7.56954 21.6944 5.30973 19.065 3.47183L19.0563 3.58962C18.9667 4.80408 18.901 6.01982 18.8589 7.23619C18.8368 7.87536 18.3063 8.38212 17.6595 8.38212H15.9549C11.3193 8.38212 7.05052 10.7836 4.67105 14.6616Z" fill="#F4F4F4" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="bg-login_Cicrl1  border-b border-l flex flex-col py-4 px-2 lg:py-2 justify-end items-start border-[#fff] translate-x-y-[180] origin-center rotate-[180] rounded-tr-full">
                                            <span className="text-right font-medium text-[20px] px-0 lg:text-[16px] lg:mb-1 text-[#fff] mb-1">Solutions</span>
                                            <div className="text-[rgb(255,255,255)]">
                                                <svg width="21" height="29" viewBox="0 0 21 29" className="lg:w-5 lg:h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.24094 0.809252C3.60451 0.454725 4.15003 0.371749 4.60061 0.602469L6.79249 1.72487C11.98 4.38129 15.2497 9.762 15.2497 15.6423V16.1941C16.1141 16.2344 16.9782 16.2863 17.8416 16.35L19.314 16.4586C20.5113 16.5468 21.1807 17.897 20.5343 18.92C18.4136 22.2764 15.6812 25.1941 12.4824 27.5178L11.478 28.2475C11.0642 28.5482 10.507 28.5482 10.0934 28.2475L9.08878 27.5178C5.8902 25.1941 3.15772 22.2764 1.03704 18.92C0.39058 17.897 1.05998 16.5468 2.25733 16.4586L3.72981 16.35C4.76088 16.274 5.7929 16.2146 6.8254 16.172C6.92365 12.7323 6.23701 9.29678 4.79616 6.1394L2.98716 2.17591C2.77563 1.71218 2.87736 1.16378 3.24094 0.809252ZM6.5971 4.35843L6.95086 5.13367C8.71145 8.99149 9.45473 13.2244 9.13577 17.4245C9.08926 18.0362 8.59405 18.514 7.98778 18.532C6.62494 18.5728 5.26289 18.6434 3.90226 18.7437L3.78455 18.7524C5.62235 21.3818 7.88226 23.6863 10.4735 25.5687L10.7856 25.7954L11.0979 25.5687C13.6891 23.6863 15.9489 21.3818 17.7868 18.7524L17.669 18.7437C16.4546 18.6541 15.2389 18.5884 14.0225 18.5463C13.3833 18.5242 12.8766 17.9936 12.8766 17.3469V15.6423C12.8766 11.0066 10.475 6.73789 6.5971 4.35843Z" fill="#F4F4F4" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="bg-login_Cicrl2 border-t border-r flex flex-col py-4 px-2 lg:py-2 justify-start items-end border-[#fff]  rounded-bl-full">
                                            <div className="text-[#fff]">
                                                <svg wßidth="21" height="29" viewBox="0 0 21 29" className="lg:w-5 lg:h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3304 28.1368C17.9668 28.4913 17.4213 28.5743 16.9707 28.3436L14.7788 27.2212C9.59133 24.5648 6.3216 19.184 6.3216 13.3038L6.3216 12.7519C5.45716 12.7116 4.59313 12.6598 3.72972 12.5961L2.25733 12.4874C1.05994 12.3993 0.390593 11.049 1.03703 10.026C3.15765 6.66969 5.89012 3.75194 9.08885 1.42826L10.0933 0.698505C10.5071 0.397867 11.0643 0.397867 11.4779 0.698505L12.4825 1.42826C15.6811 3.75194 18.4136 6.66969 20.5343 10.026C21.1807 11.049 20.5113 12.3993 19.314 12.4874L17.8415 12.5961C16.8104 12.6721 15.7784 12.7314 14.7459 12.774C14.6476 16.2137 15.3343 19.6493 16.7751 22.8066L18.5841 26.7701C18.7957 27.2339 18.6939 27.7823 18.3304 28.1368ZM14.9742 24.5876L14.6204 23.8124C12.8598 19.9546 12.1166 15.7217 12.4355 11.5215C12.482 10.9098 12.9772 10.4321 13.5835 10.414C14.9463 10.3732 16.3084 10.3026 17.669 10.2023L17.7867 10.1937C15.9489 7.56425 13.689 5.25977 11.0978 3.37738L10.7857 3.15066L10.4734 3.37738C7.88216 5.25977 5.62235 7.56425 3.78446 10.1937L3.90225 10.2023C5.1167 10.2919 6.33244 10.3577 7.54881 10.3998C8.18798 10.4218 8.69474 10.9524 8.69474 11.5991V13.3038C8.69474 17.9394 11.0962 22.2082 14.9742 24.5876Z" fill="#F4F4F4" />
                                                </svg>

                                            </div>
                                            <span className="text-right font-medium text-[20px] px-0 lg:text-[16px] lg:mb-1 text-[#fff] mb-2">Features</span>
                                        </div>
                                        <div className="bg-login_Cicrl2 translate-x-y-[180] flex flex-col py-4 px-2 lg:py-2 justify-start items-start border-[#fff]   border-t border-l  origin-center rotate-[180] rounded-br-full">
                                            <div className="text-[#fff]">
                                                <svg width="29" height="21" viewBox="0 0 29 21" className="lg:w-5 lg:h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.4494 2.92831C28.8039 3.29189 28.8869 3.8374 28.6562 4.28799L27.5338 6.47987C24.8774 11.6673 19.4967 14.9371 13.6164 14.9371H13.0645C13.0242 15.8015 12.9724 16.6655 12.9087 17.529L12.8001 19.0013C12.7119 20.1987 11.3617 20.8681 10.3386 20.2216C6.98231 18.101 4.06456 15.3685 1.74089 12.1698L1.01113 11.1653C0.710489 10.7516 0.710489 10.1944 1.01113 9.78081L1.74089 8.77616C4.06456 5.57758 6.98231 2.84509 10.3386 0.724414C11.3617 0.0779584 12.7119 0.747354 12.8001 1.94471L12.9087 3.41719C12.9847 4.44826 13.0441 5.48028 13.0866 6.51277C16.5264 6.61102 19.9619 5.92438 23.1193 4.48354L27.0828 2.67454C27.5465 2.46301 28.0949 2.56474 28.4494 2.92831ZM24.9002 6.28448L24.125 6.63824C20.2672 8.39883 16.0343 9.14211 11.8341 8.82315C11.2225 8.77664 10.7447 8.28143 10.7266 7.67516C10.6858 6.31232 10.6153 4.95027 10.5149 3.58964L10.5063 3.47193C7.87687 5.30973 5.5724 7.56964 3.69 10.1608L3.46328 10.473L3.69 10.7853C5.5724 13.3765 7.87687 15.6363 10.5063 17.4742L10.5149 17.3564C10.6045 16.142 10.6703 14.9262 10.7124 13.7099C10.7345 13.0707 11.265 12.5639 11.9117 12.5639H13.6164C18.252 12.5639 22.5208 10.1624 24.9002 6.28448Z" fill="#F4F4F4" />
                                                </svg>
                                            </div>
                                            <span className="text-right font-medium text-[20px] px-0 lg:text-[16px] lg:mb-1 text-[#fff] mb-2">Compatibility</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full flex-row justify-between gap-16 relative">
                                    <div className="w-full px-3 py-3 bg-white border-[#003399] border-[2px] rounded-xl shadow md:mt-0  dark:bg-gray-800 dark:border-gray-700">
                                        <ul className="list-disc px-3 text-[#003399] font-medium">
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Centralized Platform helps eliminate dependency of OEM monitoring tool</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Local data storage and upload to portal in case of network failure</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Support Company Branding</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Web Portal customization</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Data driven O&M</li>
                                        </ul>
                                    </div>
                                    <div className="w-full px-3 py-3 bg-white border-[#003399] border-[2px] rounded-xl shadow md:mt-0  dark:bg-gray-800 dark:border-gray-700">
                                        <ul className="list-disc px-3 text-[#003399] font-medium">
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Support Rooftop & ground mounted projects</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Plug and play with any inverter, energy meter, SMB, switchgear</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Suitable for any capacity, any no of inverters, DG</li>
                                            <li className="text-[12px] xl:text-[12px] lg:text-[11px]">Scalable Architecture</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-9/12 xl:w-[88.5%] lg:w-[96%] px-6 py-2 mt-24 xl:mt-10 lg:px-2 lg:mt-6 overflow-hidden bg-white border-[#003399] border-[2px] rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                        <div className="w-full overflow-hidden lg:pl-2 flex justify-between lg:mx-2 animate-marquee whitespace-nowrap ">
                            <h3 className="text-lg xl:text-sm lg:text-xs text-center font-medium leading-tight tracking-tight text-[#003399] dark:text-white">Industrial Energy Management System</h3>
                            <h3 className="text-lg xl:text-sm lg:text-xs text-center font-medium leading-tight tracking-tight text-[#003399] dark:text-white">Flow Meter & Ground Water Monitoring</h3>
                            <h3 className="text-lg xl:text-sm lg:text-xs text-center font-medium leading-tight tracking-tight text-[#003399] dark:text-white">Smart Metering and DLMS Solution</h3>
                            <h3 className="text-lg xl:text-sm lg:text-xs text-center font-medium leading-tight tracking-tight text-[#003399] dark:text-white">Industrial Energy Management System</h3>
                        </div>
                    </div>
                    <div className="w-11/12 xl:mb-4 xl:w-12/12 lg:w-full bg-white items-center border-[#003399] border-[2px] rounded-xl shadow md:mt-0 dark:bg-gray-800 dark:border-gray-700 flex justify-between">
                        <div className="bg-[#003399] w-24 py-3 lg:py-2 lg:mr-1">
                            <h3 className="text-sm xl:text-xs text-center lg:text-[12px] font-medium leading-tight tracking-tight text-[#fff] dark:text-white">Power AMR in</h3>
                            <h3 className="text-xl xl:text-base text-center lg:text-[12px] font-medium leading-tight tracking-tight text-[#fff] dark:text-white">NEWS</h3>
                        </div>
                        <div className="w-full overflow-hidden lg:pl-2 flex justify-between">
                            <h3 className="text-[16px] xl:text-[14px] lg:text-[12px] whitespace-nowrap animate-marquee px-6 xl:px-2 py-2 pl-2 text-left font-medium leading-tight tracking-tight text-[#003399] dark:text-white">
                                are all in one Controller | Logics PowerAMR reaches to 10+ countries across the globe | Logics PowerAMR introduces LoRa based communication system | Logics PowerAMR reaches to 10+ countries across the globe
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
