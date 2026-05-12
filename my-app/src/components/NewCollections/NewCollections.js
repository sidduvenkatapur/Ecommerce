import React, { useEffect, useState } from 'react'
import NewCollection from '../../Assets/new_collections'
import Item from '../Items/Item'

const NewCollections = () => {

  const[newcollectins,setNewcollections]= useState([]);

  useEffect(()=>{
   fetchNewCollections(); 
  },[])

  const fetchNewCollections = async ()=>{
     const data = await fetch(${process.env.REACT_APP_API_URL}/newcollections`);
     const jsonData = await data.json();
     setNewcollections(jsonData);
  }
  return (
    <>
    <h1 className=' flex flex-col justify-center items-center text-center text-4xl font-semibold mt-10'>NEW COLLECTIONS <hr className='h-1 bg-black w-28 mt-2'/></h1>
    <div className='grid grid-cols-4 flex-row gap-6 py-10 px-32 mb-12'>{
        newcollectins.map((data)=>{
            return <Item key={data.id} data={data} />
        })
    }
       
 
    </div>
    </>
  )
}

export default NewCollections
