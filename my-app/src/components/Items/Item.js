import React from 'react'
import product1 from '../../Assets/product_1.png'
import { Link } from 'react-router-dom'

const Item = ({data}) => {

//   const getImageSrc = () => {
//     if (!data || !data.image) return "";

//     if (/^https?:\/\//i.test(data.image)) {
//         return data.image;
//     }

//     // const baseUrl = (process.env.REACT_APP_API_URL || 'http://app-load-balancer-2109406327.us-east-1.elb.amazonaws.com:8080').replace(/\/$/, '');
//     const baseUrl = "https://ecommerce-product-images-s3-865230234414-us-east-1-an.s3.us-east-1.amazonaws.com"
//     const relativePath = data.image.replace(/^\/+/, '');
//     return `${baseUrl}/${relativePath}`;
// };

  return (
    <Link to={`/product/${data.id}`}>
    <div className='flex flex-col'>
     <img alt="item" src={data.image.startsWith('http') ? data.image : `${process.env.REACT_APP_API_URL}/${data.image}`} />
    {/* <img alt="item" src={getImageSrc()} /> */}
    <p className='py-4 text-lg'>{data.name}</p>
    <p className=''><span className='pr-4'>${data.new_price}</span> <span className='text text-neutral-400 line-through'>${data.old_price}</span></p>
    </div>
    </Link>
  )
}

export default Item
