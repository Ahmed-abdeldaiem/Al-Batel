import React, { useState } from 'react'
import Slider from 'react-slick';
import style from './Partners.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Partners() {


  const sponcers = ['https://pbs.twimg.com/media/ErBujIqXMAAe5E5.jpg:large','https://www.pwc.com.sa/wp-content/uploads/2018/11/LOGO-22.png?id=615',
'https://media.licdn.com/dms/image/v2/C4D0BAQFXt6OC-gAsWw/company-logo_200_200/company-logo_200_200/0/1631304915077?e=2147483647&v=beta&t=z3N8snG144c9gE4oRbgPGtk-ncGMTsYNCKn5t59jgyU',
'https://www.chemstage.com/wp-content/uploads/2022/08/gso.png',
'https://pbs.twimg.com/profile_images/1082911651836370945/tkm4INLv_400x400.jpg',
'https://pbs.twimg.com/profile_images/1409095101901676545/HbpbG44z_400x400.jpg',
'https://manh.rajhifoundation.org/imgs/syslogo2.png?efwdfsdwefFGef',
'https://saudipedia.com/saudipedia/uploads/images/2023/08/21/62027.jpg',
'https://www.gamr.gov.sa/attachments/news/33',
'https://etqaan.sa/wp-content/uploads/2021/11/Etqaan_Logo2.png',
'https://www.efcongress.com/wp-content/uploads/2020/02/KPMG_NoCP_RGB_280.png',
'https://garbnews.net/contents/newsm/236336_0.jpg',
'https://m-quality.net/wp-content/uploads/2021/10/%D8%AE%D8%A7%D9%84%D8%AF-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86.jpg'

]



let settings = {
  dots: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
  pauseOnHover: false,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



  return <>
  

<div className={`relative w-full py-2 my-20 bg-[url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-fixed bg-cover bg-no-repeat`}>
 {/* Gradient blue overlay */}
 <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>

<div className='z-30 '>
<Slider {...settings} className='my-10 z-30'>


{sponcers?.map((sponcer,index)=>
<div key={index} className='p-3 my-4  rounded-lg z-20'>
 <img className='h-[150px] w-full size-fit rounded-xl z-20' src={sponcers[index]} alt='sponcer logo' />

</div>
)}


</Slider>
</div>

</div>



  </>
}
