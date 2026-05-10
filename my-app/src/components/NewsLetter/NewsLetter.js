import React from 'react'

const NewsLetter = () => {
  return (
    <div className='hero-banner flex flex-1 bg-gradient-to-b from-pink-100 mt-4 mx-32 pb-12 mb-16'>
    <div className='banner-left flex flex-1 justify-center items-center flex-col font-semibold'>
     <div className='text-5xl my-10'>Get Exclusive Offers On Your Email</div>
     <div className='mb-4 font-normal'>Subscribe to our newsletter and stay updated</div>
     <div>
        <input type='email' placeholder='your email ID' className='border border-gray-400 bg-white-900 py-2 px-4 w-96 rounded-full text-white font-normal'/>
     <button className=' relative right-12 py-2 px-8 bg-black text-white rounded-full text-lg'>Subscribe</button>
     </div>
    
    </div>
</div>
  )
}

export default NewsLetter