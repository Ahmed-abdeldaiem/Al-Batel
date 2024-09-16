import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [openDropdown2, setOpenDropdown2] = useState(null); // Track which dropdown is open
  const [currentLanguage, setCurrentLanguage] = useState('ar');

  const [isOpen , setIsOpen]=useState(false)


  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);



  // Function to toggle dropdowns and close others
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdownName); // Open new dropdown and close others
    }
  };

  // Function to switch languages
  const switchLanguage = (language) => {
    setCurrentLanguage(language);
    setOpenDropdown(null); // Close language dropdown after selecting a language
  };



  return (
    <>
    {dir=='rtl'?<>
    <header className="bg-gray-400 bg-opacity-50 backdrop-blur-lg shadow-sm shadow-green-200 fixed top-0 z-50 w-full">
      <div className="mx-auto flex justify-center md:justify-evenly h-16 w-full items-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-start gap-2 lg:gap-16 mx-8 lg:text-xl">
          <Link className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5" to="">
            <img src="/logo.png" className="w-16 inline-block px-2" alt="Elbatel Logo" />
            <span className="text-green-600 mx-3">الباتل</span>
          </Link>

          <div>
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
                <li>
                  <NavLink className="p-2 text-gray-700 linkStyle" to="">الرئيسية</NavLink>
                </li>

                <li className="relative">
                  <button
                    onClick={() => toggleDropdown('company')}
                    id="dropdownNavbarLink"
                    className="flex linkStyle items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
                  >
                    الشركة
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
                    className={`absolute -bottom-34 mt-2 z-10 shadow-sm shadow-green-200 transition-all duration-500 ${
                      openDropdown === 'company' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
                    } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg overflow-hidden rounded-lg w-44`}
                    
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li><NavLink to="about" className="block text-gray-700 linkStyle px-4 py-2">من نحن</NavLink></li>
                      <li><NavLink to="services" className="block text-gray-700 px-4 py-2 linkStyle">خدماتنا</NavLink></li>
                      <li><NavLink to="team" className="block text-gray-700 px-4 py-2 linkStyle">فريقنا</NavLink></li>
                      
                    </ul>
                  </div>
                </li>

                <li><NavLink className="p-2 text-gray-700 linkStyle" to="partners">شركاء النجاح</NavLink></li>
                <li>
                  <NavLink
                    className="p-2 text-gray-700 linkStyle"
                    to="contact"
                  >
                    تواصل معنا
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-2 text-gray-700 linkStyle" to="news">
                    الأخبار
                  </NavLink>
                </li>

                <li className="relative">
                  <button
                    onClick={() => toggleDropdown('services')}
                    id="dropdownNavbarLink"
                    className="flex linkStyle items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
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
                    className={`absolute -bottom-24 z-10 shadow-sm shadow-green-200 transition-all duration-500 ${
                      openDropdown === 'services' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
                    } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg rounded-lg w-44 overflow-hidden`}
                    
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li><NavLink to="courses" className="block linkStyle px-4 py-2">الدورات التدريبية</NavLink></li>
                      <li><NavLink to="jobs" className="block px-4 py-2 linkStyle">الوظائف المتاحة</NavLink></li>
                    </ul>
                  </div>
                </li>

               
              </ul>
            </nav>
          </div>
        </div>

        {/* Toggle Button between Arabic and English */}
        <div className="flex items-center lg:me-8 md:order-2">
          <button
            type="button"
            onClick={() => toggleDropdown('language')}
            className="inline-flex text-nowrap relative px-5 items-center bg-blue-100 bg-opacity-50 backdrop-blur-lg font-medium justify-center py-2 text-sm text-gray-900 transition-all duration-700 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <img
              src={currentLanguage === 'en' ? 'https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg' : 'https://m.media-amazon.com/images/I/61eIGogZI2L.jpg'}
              className="w-5 h-5 rounded-full me-3"
              alt={currentLanguage === 'en' ? 'English' : 'Arabic'}
            />
            {currentLanguage === 'en' ? 'English (US)' : 'العربية'}
          </button>

          {/* Dropdown for Language */}
          <div
            className={`absolute top-12 my-4 z-50 overflow-hidden text-base list-none bg-blue-100 bg-opacity-80 backdrop-blur-lg divide-y divide-gray-100 rounded-lg shadow-sm shadow-green-200 transition-all duration-500 ${
              openDropdown === 'language' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
            }`}
          
          >
            <ul className="py-2 font-medium">
              <li>
                <button
                  onClick={() =>{
                    switchLanguage('en')
                    leftToRight()
                  } }
                  className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-500 w-full"
                >
                  <img
                    src="https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                    className="h-4 w-4 rounded-full me-2"
                    alt="English"
                  />
                  English (US)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    switchLanguage('ar')
                    rightToLeft()
                  }}
                  className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500 transition-all duration-500 w-full"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                    className="h-4 w-4 rounded-full me-2"
                    alt="Arabic"
                  />
                  العربية
                </button>
              </li>
            </ul>
          </div>
        </div>

                {/* menue button in small screens */}
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
            onClick={() => setOpenDropdown2(!openDropdown2)}
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
            className={`absolute -bottom-24 end-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
              openDropdown2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } font-semibold transition-all duration-500 bg-blue-100 bg-opacity-90 backdrop-blur-lg  shadow-sm shadow-green-200 rounded-lg  w-44`}
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <NavLink to="courses" className="block linkStyle px-4 py-2">
                  الدورات التدريبية
                </NavLink>
              </li>
              <li>
                <NavLink to="jobs" className="block px-4 py-2 linkStyle">
                  الوظائف المتاحة
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    </>:
     <header className="bg-blue-100 bg-opacity-50 backdrop-blur-lg shadow-sm shadow-green-200 fixed top-0 z-50 w-full">
      <div className="mx-auto flex justify-center md:justify-evenly h-16 w-full items-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-start gap-2 lg:gap-16 mx-8 lg:text-xl">
          <Link className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5" to="">
            <img src="/logo.png" className="w-16 inline-block px-2" alt="Elbatel Logo" />
            <span className="text-green-600 mx-3">Al-Batel</span>
          </Link>

          <div>
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
                <li>
                  <NavLink className="p-2 text-gray-700 linkStyle" to="">Home</NavLink>
                </li>

                <li className="relative">
                  <button
                    onClick={() => toggleDropdown('company')}
                    id="dropdownNavbarLink"
                    className="flex linkStyle items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
                  >
                    Company
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
                    className={`absolute -bottom-34 mt-2 z-10 shadow-sm shadow-green-200 transition-all duration-500 ${
                      openDropdown === 'company' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
                    } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg overflow-hidden rounded-lg w-44`}
                    
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li><NavLink to="about" className="block text-gray-700 linkStyle px-4 py-2">About Us</NavLink></li>
                      <li><NavLink to="services" className="block text-gray-700 px-4 py-2 linkStyle">Services</NavLink></li>
                      <li><NavLink to="team" className="block text-gray-700 px-4 py-2 linkStyle">Our Team</NavLink></li>
                      
                    </ul>
                  </div>
                </li>

                <li><NavLink className="p-2 text-gray-700 linkStyle" to="partners">Parteners</NavLink></li>
                <li>
                  <NavLink
                    className="p-2 text-gray-700 linkStyle"
                    to="contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-2 text-gray-700 linkStyle" to="news">
                    News
                  </NavLink>
                </li>

                <li className="relative">
                  <button
                    onClick={() => toggleDropdown('services')}
                    id="dropdownNavbarLink"
                    className="flex linkStyle items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
                  >
                  New Services
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
                    className={`absolute -bottom-24 z-10 shadow-sm shadow-green-200 transition-all duration-500 ${
                      openDropdown === 'services' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
                    } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg rounded-lg w-44 overflow-hidden`}
                    
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li><NavLink to="courses" className="block linkStyle px-4 py-2">Courses</NavLink></li>
                      <li><NavLink to="jobs" className="block px-4 py-2 linkStyle">Jobs</NavLink></li>
                    </ul>
                  </div>
                </li>

               
              </ul>
            </nav>
          </div>
        </div>

        {/* Toggle Button between Arabic and English */}
        <div className="flex items-center lg:me-8 md:order-2">
          <button
            type="button"
            onClick={() => toggleDropdown('language')}
            className="inline-flex text-nowrap relative px-5 items-center bg-blue-100 bg-opacity-50 backdrop-blur-lg font-medium justify-center py-2 text-sm text-gray-900 transition-all duration-700 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <img
              src={currentLanguage === 'en' ? 'https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg' : 'https://m.media-amazon.com/images/I/61eIGogZI2L.jpg'}
              className="w-5 h-5 rounded-full me-3"
              alt={currentLanguage === 'en' ? 'English' : 'Arabic'}
            />
            {currentLanguage === 'en' ? 'English (US)' : 'العربية'}
          </button>

          {/* Dropdown for Language */}
          <div
            className={`absolute top-12 my-4 z-50 overflow-hidden text-base list-none bg-blue-100 bg-opacity-80 backdrop-blur-lg divide-y divide-gray-100 rounded-lg shadow-sm shadow-green-200 transition-all duration-500 ${
              openDropdown === 'language' ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
            }`}
          
          >
            <ul className="py-2 font-medium">
              <li>
                <button
                  onClick={() =>{
                    switchLanguage('en')
                    leftToRight()
                  } }
                  className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-500 w-full"
                >
                  <img
                    src="https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                    className="h-4 w-4 rounded-full me-2"
                    alt="English"
                  />
                  English (US)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    switchLanguage('ar')
                    rightToLeft()
                  }}
                  className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500 transition-all duration-500 w-full"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                    className="h-4 w-4 rounded-full me-2"
                    alt="Arabic"
                  />
                  العربية
                </button>
              </li>
            </ul>
          </div>
        </div>

                {/* menue button in small screens */}
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
            Home
          </NavLink>
          <NavLink className="p-2 linkStyle" to="about">
          About Us
          </NavLink>

          <NavLink className="p-2 linkStyle" to="services">
            Services
          </NavLink>
          <NavLink className="p-2 linkStyle" to="team">
            Our Team
          </NavLink>
          <NavLink className="p-2 linkStyle" to="partners">
            Parteners
          </NavLink>
          <NavLink className="p-2 linkStyle" to="contact">
            Contact Us
          </NavLink>
          <NavLink className="p-2 linkStyle" to="news">
            News
          </NavLink>

          <button
            onClick={() => setOpenDropdown2(!openDropdown2)}
            id="dropdownNavbarLink"
            className="flex relative p-2 linkStyle items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
          >
            New Services
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
            className={`absolute -bottom-24 end-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
              openDropdown2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } font-semibold transition-all duration-500 bg-blue-100 bg-opacity-90 backdrop-blur-lg  shadow-sm shadow-green-200 rounded-lg  w-44`}
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <NavLink to="courses" className="block linkStyle px-4 py-2">
                  courses
                </NavLink>
              </li>
              <li>
                <NavLink to="jobs" className="block px-4 py-2 linkStyle">
                  Jobs                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    }
  
  </>

  );
}




























  