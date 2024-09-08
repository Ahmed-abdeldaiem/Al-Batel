import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-100 bg-opacity-50 backdrop-blur-lg  shadow-sm shadow-green-200 fixed top-0 z-50 w-full">
        <div className="mx-auto flex justify-between h-16 w-full items-center gap-8  px-4 sm:px-6 lg:px-8">
          <div className="flex  w-full items-center justify-start gap-16 mx-8 lg:text-xl">
            <Link
              className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5"
              to=""
            >
              <img
                src="/logo.png"
                className="w-16  inline-block  px-2"
                alt="Elbatel Logo"
              />
              <span className="text-green-600 mx-3">الباتل</span>
            </Link>

            <div className="">
              <nav aria-label="Global" className="hidden lg:block">
                <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
                  <li>
                    <NavLink className="p-2 text-gray-500 linkStyle" to="">
                      الرئيسية
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-gray-500 linkStyle" to="about">
                      من نحن
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="p-2 text-gray-500 linkStyle"
                      to="services"
                    >
                      خدماتنا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-gray-500 linkStyle" to="team">
                      فريقنا
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="p-2 text-gray-500 linkStyle"
                      to="partners"
                    >
                      شركاء النجاح
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="p-2 text-gray-500 linkStyle"
                      to="contact"
                    >
                      تواصل معنا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="p-2 text-gray-500 linkStyle" to="news">
                      الأخبار
                    </NavLink>
                  </li>

                  <li className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      id="dropdownNavbarLink"
                      className="flex linkStyle items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                    >
                      خدمات جديدة
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div
                      id="dropdownNavbar"
                      className={`absolute -bottom-24 z-10 ${
                        isDropdownOpen ? "" : "hidden"
                      } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg  shadow-sm shadow-green-200 rounded-lg  w-44`}
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <NavLink
                            to="courses"
                            className="block linkStyle px-4 py-2"
                          >
                            الدورات التدريبية
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="jobs"
                            className="block px-4 py-2 linkStyle"
                          >
                            الوظائف المتاحة
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block rounded bg-gray-300  p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } lg:hidden overflow-hidden text-center transition-max-height duration-700 ease-in-out`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
            <NavLink className="p-2 linkStyle" to="">
              الرئيسية
            </NavLink>
            <NavLink className="p-2 linkStyle" to="about">
              من نحن
            </NavLink>

            <NavLink className="p-2 linkStyle" to="services">
              خدماتنا
            </NavLink>
            <NavLink className="p-2 linkStyle" to="team">
              فريقنا
            </NavLink>
            <NavLink className="p-2 linkStyle" to="partners">
              شركاء النجاح
            </NavLink>
            <NavLink className="p-2 linkStyle" to="contact">
              تواصل معنا
            </NavLink>
            <NavLink className="p-2 linkStyle" to="news">
              الأخبار
            </NavLink>
            
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      id="dropdownNavbarLink"
                      className="flex relative p-2 linkStyle items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                    >
                      خدمات جديدة
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div
                      id="dropdownNavbar"
                      className={`absolute -bottom-24 end-1/2 -translate-x-1/2 z-10 ${
                        isDropdownOpen ? "" : "hidden"
                      } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg  shadow-sm shadow-green-200 rounded-lg  w-44`}
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <NavLink
                            to="courses"
                            className="block linkStyle px-4 py-2"
                          >
                            الدورات التدريبية
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="jobs"
                            className="block px-4 py-2 linkStyle"
                          >
                            الوظائف المتاحة
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                 
          </div>
        </div>
      </header>
    </>
  );
}
