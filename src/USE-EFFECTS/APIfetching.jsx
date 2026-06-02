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
      
    </div>
  )
}
