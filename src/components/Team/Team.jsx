import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './Team.module.css'





export default function Team() {

const [counter, setcounter] = useState(0)
const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  return <>
  
  <div className='pt-48 h-96 bg-blue-500 flex flex-col justify-center items-center'>
 <h2>فريق العمل</h2>
  <p>الصفحة تحت الانشاء</p>
  
 </div>
  </>
}
