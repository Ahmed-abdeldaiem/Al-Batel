import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let TeamContext=  createContext()

export default function TeamContextProvider(props) {

let baseUrl='https://my-json-server.typicode.com/Ahmed-abdeldaiem/Albatel-API'

let key='$2a$10$lsiPImdgxhQ/5hNc18QrKep9fw0O6QDW/S5IahlZHZI0pdRIh.xkG'
let binId='66e6fc2be41b4d34e430b31d'
// let masterKey='$2a$10$lsiPImdgxhQ/5hNc18QrKep9fw0O6QDW/S5IahlZHZI0pdRIh.xkG'

    function getAllFirstTeam(){
     

        return  axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
            headers: {
              'X-Master-Key': `${key}`,
              'Content-Type': 'application/json',
            },
          })
        .then((data)=>{
            console.log("context",data.data);
            return data.data
        })
        .catch((error)=>{
            console.log(error);
          
        })
    }
    
    // function getCustomerById(id){
     
    //     return axios.get(`${baseUrl}/customers/${id}`)
    //     .then((data)=>{
    //         // console.log(data);
    //         return data
    //     })
    //     .catch((error)=>{
    //         console.log(error);
          
    //     })
    // }
    
 
   

  return (
    <TeamContext.Provider value={{getAllFirstTeam}} >
    {props.children}
    </TeamContext.Provider>
  )
}













