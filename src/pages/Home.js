import React, { useEffect, useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import Card from '../components/Card';
import { ProductDataContext } from '../context/context';
function Home() {

  const { userId } = useContext(ProductDataContext);
  const [data,setData]=useState(null);
  // Fetch data from API
  useEffect(()=>{
    axios.get('http://localhost:3000/products').then((response)=>{
      setData(response.data);
      console.log(data);
     
    });
  },[]);
 
  return (
    <div className='bg-blue-100'>
      <Navbar/>
      <div className='p-4 '>
      {data?(<div className='flex flex-wrap justify-center gap-5'>{data.map((e,key)=>(
        <div><Card data={e} /> </div>
      )
        
      )}</div>):(<div>error</div>)}
      </div>
    </div>
  )
}

export default Home