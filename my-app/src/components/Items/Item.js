import React from 'react'
import product1 from '../../Assets/product_1.png'
import { Link } from 'react-router-dom'

const Item = ({data}) => {

  const getImageSrc = () => {
    if (!data || !data.image) return "";

    // 1. If it's a new S3 upload, it will start with http/https - use it straight away
    if (data.image.startsWith('http')) {
        return data.image;
    }

    // 2. Your live backend static asset container base URL
    const baseUrl = process.env.REACT_APP_API_URL || 'http://app-load-balancer-2109406327.us-east-1.elb.amazonaws.com:8080';

    // 3. Extract just the raw filename out of the string (e.g., 'undefined_1707129465518.png')
    let fileName = data.image.split('/').pop();

    //  if(fileName.startsWith('undefined_')){
    //   fileName = fileName.replace('undefined_','product_')
    //  }
    // 4. Combine them cleanly with exactly one '/images/' folder block
    const relativePath = fileName.startsWith('images/') ? fileName : `images/${fileName}`;
    return `${baseUrl.replace(/\/$/, '')}/${relativePath}`;
};

  return (
    <Link to={`/product/${data.id}`}>
    <div className='flex flex-col'>
    {/* <img alt="item" src={data.image.includes('://amazonaws.com') ? data.image : `${process.env.REACT_APP_API_URL}/${data.image}`} /> */}
    <img alt="item" src={getImageSrc()} />
    <p className='py-4 text-lg'>{data.name}</p>
    <p className=''><span className='pr-4'>${data.new_price}</span> <span className='text text-neutral-400 line-through'>${data.old_price}</span></p>
    </div>
    </Link>
  )
}

export default Item
