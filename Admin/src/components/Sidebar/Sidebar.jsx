import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='flex gap-7 h-[500px]'>
        <div className='flex flex-col gap-10 w-52 shadow-lg px-3 py-5'>
           <Link to="/"> <p className='text-xl font-semibold'>Upload Product</p></Link>
           <Link to="/productList"> <p className='text-xl font-semibold'>Product List</p></Link>
        </div>
    </div>
  )
}

export default Sidebar