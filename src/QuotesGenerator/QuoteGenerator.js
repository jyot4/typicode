import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Quotes.css'

function QuoteGenerator() {
  const [data, setData] = useState([])
const [newData ,setNewData] = useState( {text:'', author:''})

  useEffect(() => {
    axios.get("https://type.fit/api/quotes")
      .then((result) => {
        console.log(result.data)
         setData(result.data)
        return setNewData(random(result.data));
       
      }
      )

  }, [])

  function random (data){
  return data[Math.floor(Math.random() * data.length)]

  }

function getAllQuotes (){
  setNewData(random(data))
}

  return (
    <>
      <div className='quotesMain'>
        <h1>quote generate</h1>
        <div className='quotes'>
       <div className='quotesContent'>
            <h2>{newData.text}</h2>
            <p>{newData.author}</p>
            <button onClick={getAllQuotes}>Next Quotes</button>
            </div>
            </div>
            
          
        

      </div>
    </>
  )
}

export default QuoteGenerator
