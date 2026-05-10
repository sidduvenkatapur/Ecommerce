import React from 'react'
import heroimage from '../../Assets/hero_image.png'
import hand from '../../Assets/hand_icon.png'

const HeroBanner = () => {
  return (
    <div className='hero-banner bg-gradient-to-b from-pink-100 flex flex-1 mb-8'>
        <div className='banner-left flex flex-1 justify-center items-start flex-col px-[140px] font-bold'>
         <div className='font-semibold' data-testid="newArivals">NEW ARIVALS ONLY</div>
         <div className='text-6xl my-10'>
            <div className='flex'>
            New <img src={hand} className='w-20' />
            </div>collections for everyone</div>
         <button className='py-2 px-8 bg-red-600 text-white rounded-full text-xl'>Latest collection</button>
        </div>
        <div className='banner-right'>
         <img alt="banner" data-testid="heroimg" className='w-[400px]' src={heroimage}/>
        </div>
    </div>
  )
}

export default HeroBanner