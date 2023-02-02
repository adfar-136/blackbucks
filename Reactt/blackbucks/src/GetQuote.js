import React, { useEffect, useState } from 'react'
const mystyle ={
    color:"white",
    padding:"20px 30px",
    marginTop:"30px",
    marginLeft:"30px",
    marginRight :"30px",
    backgroundColor:"gray",
    fontSize : "18px",
    border:"solid 2px green"
}
const mystyle1 = {
    color:"white",
    padding:"30px",
    margin:"30px",
    backgroundColor:"gray",
    fontSize:"20px"

}
const mystyle3={
    padding:"10px 20px",
  backgroundColor:"4caf50",
  color:"red",
  fontSize:"18px",
  cursor:"pointer"
}
export default function GetQuote() {
    const [quote,setQuote] = useState({})
    const getQuote=async()=>{
      const response =await fetch("https://api.quotable.io/random")
      const data =await response.json()
      setQuote(data)
    }
    useEffect(()=>{
        getQuote()
    },[])
  return (
    <div>
       <h2 style={mystyle1}>Quote : {quote.content}</h2>
       <h4 style={mystyle1}>Author: {quote.author}</h4>
       <button style={mystyle1} onClick={getQuote}>GetQuote</button>
    </div>
  )
}
