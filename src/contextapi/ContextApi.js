import React, { useState } from 'react'
import { createContext } from 'react'
import App from '../App'

export const thisContext = createContext({})

function ContextApi() {
    const [data, setData] = useState("priya vyas")
  return (
    <div>
      <thisContext.Provider value= {{data , setData}}>
<App/>
      </thisContext.Provider>
    </div>
  )
}

export default ContextApi
