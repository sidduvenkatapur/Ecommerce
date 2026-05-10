import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import logo from '../../assets/logo.png'
import ProductUpload from '../Pages/ProductUpload'
import ProductList from '../Pages/ProductList'

const Header = () => {
  return (
    <>
    <div className='text-lg flex justify-between px-7 py-4 shadow-lg'>
        <div className='flex gap-2 justify-center items-center'> 
         <img src={logo} />
         <span>SHOPPER ADMIN</span>
        </div>
        <div className='flex items-center'>
            <p>Siddu</p>
        </div>
        </div>
    </>
  )
}

export default Header