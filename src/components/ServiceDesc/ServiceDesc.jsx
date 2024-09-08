import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './ServiceDesc.module.css'





export default function ServiceDesc() {

const [counter, setcounter] = useState(0)

  return <>
  
  <div className="container my-16 ">
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
          خدماتنا
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className=" flex flex-col md:flex-row w-full overflow-hidden rounded-md md:rounded-full border-2 border-blue-300 shadow-lg shadow-green-300 transition-all duration-700  hover:border-green-400 hover:shadow-blue-300">
          <div
            className={`relative w-full  bg-[url('https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover bg-no-repeat`}
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>
            <div className="z-20  flex flex-col md:flex-row  justify-center gap-5 p-10">
              <span className="rounded-full z-20 md:px-8 mx-1 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl py-3 border-green-600 border-2 ">ادارة</span>
              <span className="rounded-full z-20 md:px-8 mx-1 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl py-3 border-green-600 border-2 ">تخطيط</span>
              <span className="rounded-full z-20 md:px-8 mx-1 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl py-3 border-green-600 border-2 ">تدقيق</span>
              <span className="rounded-full z-20 md:px-8 mx-1 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl py-3 border-green-600 border-2 ">تطوير</span>
              <span className="rounded-full z-20 md:px-8 mx-1 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl py-3 border-green-600 border-2 ">تدريب</span>
            </div>
            <div className="z-20 flex justify-center items-center gap-5 p-10">
              <span className="animate-pulse	 z-20 text-yellow-500 text-xl font-semibold ">يمكنك الاطلاع على خدماتنا من هنا<span className="mx-2"><i class="fa-solid fa-arrow-left"></i></span></span>
              <Link className="z-20" to={'services'} >
              <button class=" my-2 px-7 z-20 py-2 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                  خدماتنا
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
  </>
}
