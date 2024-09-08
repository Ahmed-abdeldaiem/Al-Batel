import React, { useState } from "react";
import style from "./Branches.module.css";

export default function Branches() {
  const [counter, setcounter] = useState(0);

  return (
    <>
      <div className="container my-10">
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
          فروع الشركة
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

        <div className="flex flex-wrap items-stretch w-full my-9">


          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://www.mosoah.com/wp-content/uploads/2019/07/%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%85%D9%86-%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D9%8A%D8%A9.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  الرياض
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
                  7162 مبنى السمو، الطريق الدائرى الشرقى، حى الربوة
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://daleli.sa/media/blog/2020/12/28/Jeddah.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  جدة
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
               العزيزية، جدة 23337
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://cdn.arabsstock.com/uploads/images/27013/image-27013-picture-courtyard-prophets-mosque-medina-kingdom-saudi-arabia-thumbnail.webp"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  المدينة المنورة
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
              المدينة المنورة
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://tourguidemap.com/wp-content/uploads/2024/01/places-to-visit-in-dammam-840x450-1.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
            الدمام
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
            مدينة الدمام
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://dealapp.sa/blog/wp-content/uploads/2020/05/1485074298177347400.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
            بريدة
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
            مدينة بريدة
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://static.sayidaty.net/styles/1375_scale/public/2021/05/26/7594406-1390592781.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
            خميس مشيط
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
            مدينة خميس مشيط
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://gate.ahram.org.eg/Media/News/2024/4/18/19_2024-638490336544002868-400.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
           البحرين
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
          دولة البحرين
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://cdn4.premiumread.com/?url=https://www.alroeya.com/uploads/images/2021/11/17/1418970.jpg&w=w850&q=100&f=jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
           الامارات
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
          دولة الامارات العربية
                </p>
               </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4  lg:w-1/3">


            <div className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg h-[350px] duration-700 transition-all group-hover:scale-125"
                  src="https://images.skynewsarabia.com/images/v1/2023/06/17/1630394/800/450/1-1630394.jpg"
                  alt="Reiad city"
                  
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  <span className="mx-1 text-blue-700">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
           عمان
                </h5>

               <div className="absolute inset-0 flex justify-center items-center bg-gray-400 bg-opacity-50 transition-all duration-700 translate-y-full group-hover:translate-y-0">
               <p className="mb-3 text-2xl text-center text-gray-950 font-semibold ">
          سلطنة عمان            </p>
               </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}
