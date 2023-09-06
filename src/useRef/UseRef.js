
import React ,{useState , useRef, useEffect}from 'react'

function UseRef() {
    const [input, setInput] = useState("")
    const count = useRef(0)
    console.log(count.current)

    useEffect(()=>{
        count.current = count.current+1   
    })


// useRef  create a mutuable variable which will be not re- render component 
// to access DOM elemet direclty
  return (
    <div>
      <input type='text' placeholder='enter your name' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <p>The character u write :- {count.current}</p>
      {/* <input type='text' placeholder=''></input> */}
    </div>
  )
}

export default UseRef
