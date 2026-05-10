import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Items/Item'
import bannerImage from '../../Assets/banner_mens.png'
import bannerImageKids from '../../Assets/banner_kids.png'
import bannerImageWomen from '../../Assets/banner_women.png'

const Category = ({category}) => {
    const {products} = useContext(ShopContext)
    // console.log(products[0]?.category);
     console.log(category)
  return (
    <>
    <div className='py-10 px-32 mb-4'>
    { category =="Men"?<img src={bannerImage} />:<>{category =="Women"?<img src={bannerImageWomen}/>:<img src={bannerImageKids} />}</>}
      </div>
      <div className='flex justify-between px-32'>
        <p><span className='font-semibold'>Showing 1-12</span> out of 60 Products</p>
        <select  className='py-3 px-4 rounded-full'>
          <option>Sort by</option>
          <option>color</option>
          <option>Brand</option>
        </select>
      </div>
    <div className='grid grid-cols-4 flex-row gap-6 py-10 px-32 mb-12'>{
      
      products.map((product)=>{
         console.log(product.category)
            if(product.category == category){
              console.log(product)
                return <Item key={product.id} data={product} />
            }
            
        })
    }
    </div>
    <div className='flex justify-center mb-20'>
    <button className='py-3 px-6 rounded-full bg-neutral-200 '>Explore more</button>
    </div>
   
    </>
  )
}

export default Category