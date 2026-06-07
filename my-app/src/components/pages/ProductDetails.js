import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import starIcon from '../../Assets/star_icon.png'
import star_dull_Icon from '../../Assets/star_dull_icon.png'

const ProductDetails = () => {
    const params = useParams();
    const { products, addToCart } = useContext(ShopContext);

    const product = products.find((p) => p.id == params.id);

    const getImageSrc = (image) => {
        if (!image) return "";
        if (/^https?:\/\//i.test(image)) return image;
        const baseUrl = (process.env.REACT_APP_API_URL || 'http://app-load-balancer-2109406327.us-east-1.elb.amazonaws.com:8080').replace(/\/$/, '');
        return `${baseUrl}/${image.replace(/^\/+/, '')}`;
    };

    if (!product) {
        return <div className='p-32'>Product not found.</div>;
    }

  return (
    <div className='p-32 flex gap-10'>
      <div className='flex gap-4'>
        <div className='flex flex-col w-32 gap-3'>
          <img src={getImageSrc(product.image)} alt={product.name} />
          <img src={getImageSrc(product.image)} alt={product.name} />
          <img src={getImageSrc(product.image)} alt={product.name} />
          <img src={getImageSrc(product.image)} alt={product.name} />
        </div>
        <img className="w-[30rem]" alt={product.name} src={getImageSrc(product.image)} />
      </div>
    <div className='flex flex-col gap-8'>
        <p className='text-4xl'>{product?.name}</p>
        <p className='flex'><img src={starIcon}/> <img src={starIcon}/> <img src={starIcon}/> <img src={starIcon}/> <img src={star_dull_Icon}/>(122)</p>
        <p className=''><span className='pr-4 font-medium text-red-800 text-lg'>${product?.new_price}</span> <span className='text text-neutral-400 line-through text-lg'>${product?.old_price}</span></p>
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
        <button className='bg-red-700 py-3 px-6 text-white w-60 text-lg font-medium' onClick={async ()=>addToCart(product?.id)}>Add To Cart</button>
    </div>
    </div>
  )
}

export default ProductDetails
