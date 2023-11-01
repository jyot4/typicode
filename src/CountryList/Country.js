import React, { useEffect, useState } from 'react'

function Country() {

    const [list ,setList] = useState([
        {
            country: "India",
            states: ["Rajasthan", "MP", "Punjab", "UP"]
        },
        {
            country: "USA",
            states: ["California", "Texas", "Florida", "Virginia"]
        },
        {
            country: "Australia",
            states: ["NSW", "Quennsland", "Tasmania", "Victoria"]
        },
        {
            country: "UK",
            states: ["England", "Scotland", "Wales", "Northern Ireland"]
        },
    ])



  return (

    <div>
        
            {
                list.map((data,index)=>{
                    return(
                        <div>
                    <ul key={index}><strong>{data.country}</strong></ul>
                   <ul>
{
  data.states.map((states , index)=>{
    return(
        <div>
            <ul>
                <li key={index}>{states}</li>
            </ul>
        </div>
    )
  })
}
                   </ul>
                    </div>
                    )
                })
            
            }
        
      
    </div>
  )
}

export default Country
