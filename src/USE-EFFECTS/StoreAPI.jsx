import React from 'react'
import { useState , useEffect  } from 'react'


const url = "https://dummyjson.com/products"
export default function StoreAPI() {

  const [data, setData] = useState([]);

  async function fetchData(){
    const APIdata = await fetch(url);
    const res = await APIdata.json();
    setData(res.products);
    console.log(res.products);
  }

  useEffect(()=>{
  fetchData();
  },[])


  return (
    <div>
      {
        data.map((myProduct)=>{
           console.log(myProduct)

            return (
              <div>
         <h1 className='text-2xl font-bold'>{myProduct.title}</h1>
        <p className="text[15px] text-blue-950">{myProduct.description}</p>
        </div>
        )
        })

       

      }
    </div>
  )
}
