import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'



import About from './components/About/About'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs'
import Partners from './components/Partners/Partners'



import LanguageContextProvider from './Context/LanguageContext'
import TeamContextProvider from './Context/TeamContext'
import TeamMemberDetails from './components/TeamMemberDetails/TeamMemberDetails'
import SendCv from './components/SendCv/SendCv'
import Rfp from './components/Rfp/Rfp'


function App() {

  

  let route = createHashRouter([
    {path:'',element:<LayOut/>,children:[
      {index:true ,element: <Home/>},
     
      {path:'about' ,element:<About/>},
      {path:'services' ,element:<Services/>},
      {path:'team' ,element:<Team/>},
      {path:'team/:id' ,element:<TeamMemberDetails/>},
      {path:'contact' ,element:<ContactUs/>},
      {path:'partners' ,element:<Partners/>},
      {path:'sendCv' ,element:<SendCv/>},
    
      {path:'RFP' ,element:<Rfp/>},
    ]}
  ])

  

  return (
    <>
    <LanguageContextProvider>

  <TeamContextProvider>
  {/* <ScrollToTop /> */}
    <RouterProvider router={route}>

</RouterProvider>

</TeamContextProvider>
    </LanguageContextProvider>
  
    </>
  )
}

export default App
