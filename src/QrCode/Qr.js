import React, { useState } from 'react'

function Qr() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [ username, setUsername] = useState('')
    
    return (
        <>
            <div>
                <form>
                    <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    <input type='username' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                </form>
            </div>
        </>
    )
}

export default Qr
