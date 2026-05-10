import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import starIcon from '../../Assets/star_icon.png'
import star_dull_Icon from '../../Assets/star_dull_icon.png'

const ProductDetails = () => {
    const params = useParams();
    
    const {products,addToCart} = useContext(ShopContext);
    //  const data = all_product.allProducts.id === (params.id);
  const data = products.filter((p)=>{
    // console.log(p.id);
    // console.log(params.id)
        if(p.id == params.id){
    //   console.log(p)
      return p;
      }
    })
    // console.log(data);
  return (
    <div className='p-32 flex gap-10'>
    <div className='flex gap-4'>
    <div className='flex flex-col w-32 gap-3'>
        {<img src={data[0]?.image} />}
        {<img src={data[0]?.image} />}
        {<img src={data[0]?.image} />}
        {<img src={data[0]?.image} />}
    </div>
    <img  className="w-[30rem]" alt='img' src={data[0]?.image} />
    </div>
    <div className='flex flex-col gap-8'>
        <p className='text-4xl'>{data[0]?.name}</p>
        <p className='flex'><img src={starIcon}/> <img src={starIcon}/> <img src={starIcon}/> <img src={starIcon}/> <img src={star_dull_Icon}/>(122)</p>
        <p className=''><span className='pr-4 font-medium text-red-800 text-lg'>${data[0]?.new_price}</span> <span className='text text-neutral-400 line-through text-lg'>${data[0]?.old_price}</span></p>
        <p> bnbnb wafebhwbf awsfdbchdc wasefhvcbhedbcv wdhvchfdbvc wdcfbkhdbcv akhbcvkhdbc wkhevckhdsbc</p>
        <div className='gap-2 flex flex-col'>
            <p className='text-lg font-semibold'>Select Size</p>
            <div className='gap-4 flex'>
            <span className='py-2 px-4 bg-gray-300'>S</span>
            <span className='py-2 px-4 bg-gray-300'>M</span>
            <span className='py-2 px-4 bg-gray-300'>L</span>
            <span className='py-2 px-4 bg-gray-300'>XL</span>
            <span className='py-2 px-4 bg-gray-300'>XXL</span>
            </div>
        </div>
        <button className='bg-red-700 py-3 px-6 text-white w-60 text-lg font-medium' onClick={async ()=>addToCart(data[0]?.id)}>Add To Cart</button>
    </div>
    </div>
  )
}

export default ProductDetails