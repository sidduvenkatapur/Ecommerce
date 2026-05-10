import React, { useEffect, useState } from 'react'
import Item from '../Items/Item'
import WomensData from '../../Assets/data'

const WomenPopular = () => {

  const[popular,setPopular]= useState([]);

  useEffect(()=>{
    getPopular();
  },[])

  const getPopular = async()=>{
    const data = await fetch("http://localhost:4000/popularinwomen");
    const jsonData = await data.json();
    setPopular(jsonData);
  }

  return (
    <>
    <h1 className=' flex flex-col justify-center items-center text-center text-4xl font-semibold mt-10'>POPULAR IN WOMEN <hr className='h-1 bg-black w-28 mt-2'/></h1>
    <div className='grid grid-cols-4 gap-6 py-10 px-32 mb-8'>{
        popular.map((data)=>{
            return <Item key={data.id} data={data} />
        })
    }
       
 
    </div>
    </>
  )
}

export default WomenPopular