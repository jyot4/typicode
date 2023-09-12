import React, { useState } from 'react'
import  {useForm } from 'react-hook-form'

function HookFrom() {
const {handleSubmit,register} = useForm('')
const [data,setData] = useState()

const onSubmit = (Formdata)=>{
setData(Formdata)
}
  return (
    <>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
     <input type='text' placeholder='Enter Anything' {...register("name")}></input> 
     <button> Submit</button>
     </form>
    </div>

    <p>{data.name}</p>
    </>
  )
}

export default HookFrom
