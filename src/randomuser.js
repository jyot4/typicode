import React,{useEffect} from 'react'

function randomuser() {

    useEffect(()=>{
axios.get('https://randomuser.me/api/')
.then((response)=>{
    console.log(response.data)
})

    },[])

  return (
    <div>
      
    </div>
  )
}

export default randomuser
