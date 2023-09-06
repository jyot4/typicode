import React, { useState } from 'react'
import { createContext } from 'react'
import App from '../App'

export const context = createContext({})

function ContextApi() {
   
    const[data , setData] =useState("Sachin and Priya")

  return (
   <>
   <context.Provider value={{setData,data}}>
    <App/>
   </context.Provider>

   </>
  )
}

export default ContextApi
