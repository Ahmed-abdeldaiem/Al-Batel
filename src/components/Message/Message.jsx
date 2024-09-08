import React, { useState } from 'react'
import style from './Message.module.css'





export default function Message() {



  return <>
  
  <div className="container my-10 ">
        
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
              رسالة الشركة
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
    className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
    src="https://gulf5.com/wp-content/uploads/2023/03/%D9%85%D8%A7-%D9%87%D9%8A-%D8%AF%D9%84%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%9F.jpg"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-6">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start">
<h2 className='text-green-600 text-2xl mb-4 font-semibold text-start'>رسالتنا</h2>
<p className='text-gray-800 text-lg  font-semibold text-center my-4 lg:text-start'>
انطلاقا من الشعور الراسخ بالمسؤولية تجاه وطننا ودعما لرواد الأعمال نؤمن بقدرتنا على تقديم استشارات مهنية داعمة ومتخصصة بكل شفافية وموثوقية
  </p>
<p className='text-green-600 text-2xl font-semibold text-center'>
لنكن شريك اقتصادي فعال لوطن طموح.
   </p>

        </div>
      </div>


        </div>
      </div>
  </>
}
