import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'





export default function Footer() {

const [counter, setcounter] = useState(0)

  return <>
  
 

 

<footer className="bg-slate-400 bg-opacity-40 rounded-lg shadow  mt-6">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link to="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" className="h-8" alt="elbatel Logo" />
        <span className="self-center text-2xl text-green-800 font-semibold whitespace-nowrap dark:text-white">الباتل</span>
      </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <Link to="contact" className="transition-all duration-500 text-blue-600 hover:text-green-600 hover:underline me-4 md:me-6">تواصل معنا</Link>
        </li>

      </ul>
    </div>
    <div className='flex flex-col md:flex-row py-6 md:justify-between md:items-end'>
    <a href="https://www.linkedin.com/company/albatel-cpa/" target={'_blank'}><i className="fa-brands fa-linkedin-in cursor-pointer text-lg text-green-500 hover:text-blue-500 transition-all duration-500"></i></a>
    <span className='text-green-600 text-lg'> <span className='text-blue-600'>966552214444+ :</span> <i class="fa-solid fa-square-phone"></i></span>
    <span className='text-green-600 text-lg'> <span className='text-blue-600'>info@albatelcpa.com :</span> <i class="fa-solid fa-envelope"></i></span>
    <span className='text-green-600 text-lg'> <span className='text-blue-600'>www.albatelcpa.com :</span> <i class="fa-solid fa-globe"></i></span>
    </div>
    <hr className="my-6 border-green-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024  All Rights Reserved @ Albatel</span>
  </div>
</footer>



  </>
}
