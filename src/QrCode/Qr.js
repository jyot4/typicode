import React, { useState } from 'react'

function Qr() {
   const [formData , setFormData] = useState({text: ''})

    function handleChange (e) {
        setFormData({text:e.target.value })
    }



    function handleSubmit(e){
e.preventDefault()


const newTab = window.open('','blank')
// newTab.document.write(`<img src= https://api.qrserver.com/v1/create-qr-code/?${formData.text}`)

newTab.document.write( `<img src= https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${formData.text}/>`)

    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='enter name' value={formData.text} onChange={handleChange}></input>
                    


                    <button type='submit'> submit</button>
                </form>
                
            </div>
        </>
    )
}

export default Qr
