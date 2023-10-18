import React , {useEffect, useState} from 'react'
import axios from 'axios'

function RandomUser() {
    const [store ,setStore] = useState({})
 



    function handleChange(){
        axios.get('https://randomuser.me/api/')
        .then((response)=>{
            console.log(response.data.results)

            setStore(response.data.results[0])
        })
    }
   
    useEffect(()=>{
        
     handleChange()
        
            },[])
            console.log(store)



  return (
  

     <div> 
     <img src={store.picture?.large} alt=''/>
     <h1>{store.name?.first}</h1>


     <button onClick={handleChange}>click me</button>
     </div>

  )
}

export default RandomUser
