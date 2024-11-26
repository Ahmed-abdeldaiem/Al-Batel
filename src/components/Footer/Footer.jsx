import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Footer.module.css";

export default function Footer() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  return (
    <>
      {dir == "rtl" ? (
        <>
          <footer className="relative bg-[url('https://i.pinimg.com/originals/72/c9/38/72c938ba19bd22ccbb5d60c151414c2d.jpg')] bg-no-repeat bg-center bg-cover shadow  ">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl mx-auto p-4 md:py-8 ">
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link
                  to=""
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="/logo.png"
                    className="h-8 cursor-pointer "
                    alt="elbatel Logo"
                  />
                  <span className="self-center text-2xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap ">
                    الباتل
                  </span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 z-20">
                  <li>
                    <Link
                      to="contact"
                      className="transition-all duration-500 text-blue-600 hover:text-green-600 hover:underline me-4 md:me-6"
                    >
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col md:flex-row py-6 md:justify-between md:items-end  ">
                <a
                  href="https://www.linkedin.com/company/albatel-cpa/"
                  className="z-20"
                  target={"_blank"}
                >
                  <i className="fa-brands  fa-linkedin-in cursor-pointer text-lg text-green-50 hover:text-blue-500 transition-all duration-500"></i>
                </a>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  {" "}

                  <span className="text-blue-100 ">966550554262+ :</span>{" "}

                

                  <i className="fa-solid fa-square-phone"></i>
                </span>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  {" "}
                  <span className="text-blue-100 ">

                  albatelcpa@albatelcpa.com :

                   

                  </span>{" "}
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  {" "}
                  <span className="text-blue-100 ">
                    www.albatelcpa.com :
                  </span>{" "}
                  <i className="fa-solid fa-globe"></i>
                </span>
              </div>
              <hr className="my-6 border-green-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-400 sm:text-center z-20 dark:text-gray-400">
                © 2024 All Rights Reserved @ Albatel
              </span>

              <span className="block text-sm z-40 cursor-pointer text-gray-400 sm:text-center dark:text-gray-400">
                <a
                  href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                  className=" px-1"
                  target={"_blank"}
                >
                  <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                  className="px-2"
                  target="_blank"
                >
                  <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                </a>
                by Ahmed Abdeldaiem
              </span>
            </div>
          </footer>
        </>
      ) : (
        <>
          <footer className="relative bg-[url('https://i.pinimg.com/originals/72/c9/38/72c938ba19bd22ccbb5d60c151414c2d.jpg')] bg-no-repeat bg-center bg-cover shadow  mt-6">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link
                  to=""
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="/logo.png"
                    className="h-8 cursor-pointer "
                    alt="elbatel Logo"
                  />
                  <span className="self-center text-2xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap ">
                    Al-Batel
                  </span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 z-20">
                  <li>
                    <Link
                      to="contact"
                      className="transition-all duration-500 text-blue-600 hover:text-green-600 hover:underline me-4 md:me-6"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex  flex-col md:flex-row py-6 md:justify-between md:items-end  ">
                <a
                  href="https://www.linkedin.com/company/albatel-cpa/"
                  className="z-20"
                  target={"_blank"}
                >
                  <i className="fa-brands  fa-linkedin-in cursor-pointer text-lg text-green-50 hover:text-blue-500 transition-all duration-500"></i>
                </a>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  
                  <span className="text-blue-100 ">+966550554262 :</span>{" "}
                  <i className="fa-solid fa-square-phone"></i>
                </span>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  {" "}
                  <span className="text-blue-100 ">
                    info@albatelcpa.com :
                  </span>{" "}
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-green-600 text-lg z-20 cursor-pointer">
                  {" "}
                  <span className="text-blue-100 ">
                  albatelcpa@albatelcpa.com :
                  </span>{" "}
                  <i className="fa-solid fa-globe"></i>
                </span>
              </div>
              <hr className="my-6 border-green-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-200 sm:text-center z-20 dark:text-gray-400">
                © 2024 All Rights Reserved @ Albatel
              </span>
              <span className="block text-sm z-40 cursor-pointer text-gray-400 sm:text-center dark:text-gray-400">
             
                by Ahmed Abdeldaiem
                <a
                  href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                  className=" px-2"
                  target={"_blank"}
                >
                  <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                  className="px-1"
                  target="_blank"
                >
                  <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                </a>
              </span>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
