import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

export default function News() {
   const [news,setNews] = useState([])
   const GetNews= async()=>{
    const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
    const jsondata =await data.json()
    setNews(jsondata.articles)
   }
   useEffect(()=>{
    GetNews()
   },[])
   
  return (
    <div  className="container">
        <div className='row'>
             {news.map((element)=>{
                return (
                    <div className='col-md-4'>
                        <Newsitem title={element.title} decription={element.description} urlToImage={element.urlToImage} url={element.url}/>

                    </div>
                )
             })}
        </div> 
    </div>
  )
}
