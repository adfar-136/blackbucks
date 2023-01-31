import React, { useState } from 'react'

export default function App() {
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(name)
  console.log(password)
  }
  return (
    <div>
      <form>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={(e)=>{handlesubmit(e)}}>Submit</button>
      </form>
    </div>
  )
}
