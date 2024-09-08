import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import UserContextProvider from './Context/UserContext'
import TransactionContextProvider from './Context/TransactionContext'
import AddCustomer from './components/AddCustomer/AddCustomer'
import CustomerDetails from './components/CustomerDetails/CustomerDetails'
import AddTtansaction from './components/AddTtansaction/AddTtansaction'
import AllTransactions from './components/AllTransactions/AllTransactions'
import About from './components/About/About'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs'
import Partners from './components/Partners/Partners'
import News from './components/News/News'
import Cources from './components/Cources/Cources'
import Jobs from './components/Jobs/Jobs'

function App() {

  

  let route = createBrowserRouter([
    {path:'',element:<LayOut/>,children:[
      {index:true ,element: <Home/>},
     
      {path:'about' ,element:<About/>},
      {path:'services' ,element:<Services/>},
      {path:'team' ,element:<Team/>},
      {path:'addtransaction/:id' ,element:<AddTtansaction/>},
      {path:'contact' ,element:<ContactUs/>},
      {path:'partners' ,element:<Partners/>},
      {path:'news' ,element:<News/>},
      {path:'courses' ,element:<Cources/>},
      {path:'jobs' ,element:<Jobs/>},
    ]}
  ])

  

  return (
    <>
    <TransactionContextProvider>

  
    <UserContextProvider>
    <RouterProvider router={route}>

</RouterProvider>

    </UserContextProvider>
    </TransactionContextProvider>
  
    </>
  )
}

export default App
