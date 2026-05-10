import React from 'react'
import ExclusiveOffer from '../../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='hero-banner flex flex-1 bg-gradient-to-b from-pink-100 mt-4 mx-32 mb-12'>
    <div className='banner-left flex flex-1 justify-center items-start flex-col px-[140px] font-bold'>
     <div className='text-6xl my-10 leading-[70px]'>Exclusive <br/>Offers For You</div>
     <div className='mb-4 font-normal'>ONLY ON BEST SELLER PRODUCTS</div>
     <button className='py-2 px-8 bg-red-600 text-white rounded-full text-xl'>Check now</button>
    </div>
    <div className='banner-right'>
     <img alt="banner" className='w-[300px] pr-12' src={ExclusiveOffer}/>
    </div>
</div>
  )
}

export default Offer