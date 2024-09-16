import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'



import About from './components/About/About'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs'
import Partners from './components/Partners/Partners'
import News from './components/News/News'
import Cources from './components/Cources/Cources'
import Jobs from './components/Jobs/Jobs'
import LanguageContextProvider from './Context/LanguageContext'
import TeamContextProvider from './Context/TeamContext'
import TeamMemberDetails from './components/TeamMemberDetails/TeamMemberDetails'

function App() {

  

  let route = createBrowserRouter([
    {path:'',element:<LayOut/>,children:[
      {index:true ,element: <Home/>},
     
      {path:'about' ,element:<About/>},
      {path:'services' ,element:<Services/>},
      {path:'team' ,element:<Team/>},
      {path:'team/:id' ,element:<TeamMemberDetails/>},
      {path:'contact' ,element:<ContactUs/>},
      {path:'partners' ,element:<Partners/>},
      {path:'news' ,element:<News/>},
      {path:'courses' ,element:<Cources/>},
      {path:'jobs' ,element:<Jobs/>},
    ]}
  ])

  

  return (
    <>
    <LanguageContextProvider>

  <TeamContextProvider>
  
    <RouterProvider router={route}>

</RouterProvider>

</TeamContextProvider>
    </LanguageContextProvider>
  
    </>
  )
}

export default App
