import React from 'react'
import { useState , useEffect } from 'react'


const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3693c88e85214529b468dfec1fdbf35d"
export default function NewsApi() {

    const [ data, setData ] = useState([]);

    async function getData () {
        const apiData = await fetch(url);
        const res = await apiData.json();
        setData(res.articles);
        console.log(res.articles);
    }

    useEffect(()=>{
        getData();
    }, []);


  return (
    <div>
      <h1>{data[0]?.description}</h1>
    </div>
  )
}
