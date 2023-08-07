import React, { useEffect, useState } from "react";
import "../styles/App.css";
import axios from 'axios'
// import  Loader  from "./Loader";


const Index = () => {

  const [search, setSearch] = useState({})
  const [input, setInput] = useState("")
  console.log(search)

  useEffect(() => {

    setTimeout(() => {
      axios.get(` https://jsonplaceholder.typicode.com/photos/${input} `)
        .then((response) => {
          setSearch(response.data)
          // console.log(response.data)
        })
    }, 2000)
    
  } ,[input])


  return (

    <div>
      <label>Write a number</label>
      <input type="number" maxLength={5000} value={input} onChange={(e) => setInput(e.target.value)} />

      <div className='photoFrame'>

        <img src={search.url} />
      </div>
      <div className="caption">
        <h2>{search.title}</h2>
      </div>
    </div>

  )
}

export default Index;
