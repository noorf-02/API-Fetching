import React from 'react'
import { useState , useEffect } from 'react'



const url = "https://dummyjson.com/products"
export default function APIfetching() {
    
    const [ apiData , setApiData ] = useState([]);

    async function fetchData() {
        const data = await fetch(url);
        const res = await data.json();
        setApiData(res.products);
        console.log(res.products); 
    }
    


    useEffect(()=>{
        fetchData();
        
    },[])
    



  return (
    <div>
      <h1> {apiData[0]?.title} </h1>
      <p>{apiData[0]?.description} </p>
      <p>{apiData[0]?.price} </p>
      <p>{apiData[0]?.category} </p>
    </div>
  )
}
