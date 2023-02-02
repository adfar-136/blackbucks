import React, { useEffect, useState } from 'react'
import GetQuote from './GetQuote'
const mystyle={
  padding:"10px 20px",
  backgroundColor:"4caf50",
  color:"red",
  fontSize:"18px",
  cursor:"pointer"
}
const mystyle1 = {
  color:"white",
  padding:"30px",
  margin:"30px",
  backgroundColor:"gray",
  fontSize:"20px"

}
export default function App() {
  const [joke,setJoke] = useState({})
  const getJoke=async ()=>{
    const res = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await res.json()
    setJoke(data)
  }
  useEffect(()=>{
    getJoke()
  },[])
  const handleclick =async()=>{
    await getJoke()
  }
  return (
    <div>
      <h1 style={mystyle1}>{joke.setup} ... {joke.punchline}</h1>
      <button  style={mystyle1} onClick={handleclick}>Generate Joke</button>
      <GetQuote/>
    </div>
  )
}
