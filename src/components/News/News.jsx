import React, { useState } from 'react'
import style from './News.module.css'





export default function News() {

const [counter, setcounter] = useState(0)

  return <>
  
  <div className='pt-48 h-96 bg-blue-500 flex flex-col justify-center items-center'>
 <h2>آخر الأخبار</h2>
  <p>الصفحة تحت الانشاء</p>
  
 </div>
  </>
}
