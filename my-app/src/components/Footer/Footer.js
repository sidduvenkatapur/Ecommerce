import React from 'react'
import logo from '../../Assets/logo.png'
import Icon1 from '../../Assets/instagram_icon.png'
import Icon2 from '../../Assets/pintester_icon.png'
import Icon3 from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-1 justify-center items-center mt-8'> 
    <img alt="logo" className="mx-4" src={logo}/>
    <span className='font-bold text-4xl'>SHOPPER</span>    
    </div>  
    <ul className=' flex gap-10 flex-1 list-none justify-center items-center text-xl py-8'>
      <li>Company</li>
      <li>Products</li>
      <li>Office</li>
      <li>About</li>
      // <li>Contact</li>
    </ul> 
    <ul className=' flex gap-10 flex-1 list-none justify-center items-center text-xl px-8 py-8'>
      <li className='border border-gray-200 p-2 bg-gray-100'><img alt="insta" src={Icon1}/></li>
      <li className='border border-gray-200 p-2 bg-gray-100'><img alt="pint" src={Icon2}/></li>
      <li className='border border-gray-200 p-2 bg-gray-100'><img alt="whattsapp" src={Icon3} /></li>
    </ul> 
    <hr className='my-4 mx-[125px]'/>
    <div className='text-center'>
        Copyright @2024 - All right reserved
    </div>
    </div>
  )
}

export default Footer
