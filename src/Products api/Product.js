import React, { useEffect, useState} from 'react'
import axios from 'axios'
import gsap from 'gsap'
import './Product.css'

function Product() {
    const [data ,setData] = useState([])

useEffect(()=>{

    axios.get('https://dummyjson.com/products')
    .then((result)=>{
console.log(result.data)
setData(result.data.products)



    })
},[])

useEffect(()=>{

    gsap.to('.dataOfProduct',{
    //     opacity:0.3,
    //     duration: 1,
    //    stagger:0.2,
    // //    scale:0.7
    // rotation: 260     
    
    x : 100,
    repeat:-1,
    repeatDelay : 1,
    yoyo: true
    })
},[data])

  return (
    <>
    <div className='wrapper'>
       {
        data.map((list)=>{
return(
    <div className='dataOfProduct'>
    <img src={list.images[0]}/>
    <h1>{list.title}</h1>
  </div>

)
        })
       }
        </div>
        </>
  )
}

export default Product
