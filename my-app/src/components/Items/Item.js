import React from 'react'
import product1 from '../../Assets/product_1.png'
import { Link } from 'react-router-dom'

const Item = ({data}) => {

const getImageSrc = () => {
    if (!data || !data.image) return "";

    // 1. If it's a new upload (already contains http:// or https://), use it natively
    if (data.image.startsWith('http')) {
        return data.image;
    }

    // 2. Your live AWS backend container URL where your old images live on disk
    const s3BucketUrl ='https://ecommerce-product-images-s3-865230234414-us-east-1-an.s3.us-east-1.amazonaws.com'
    // 3. Extract just the raw filename to strip out any duplicate folder prefixes
    const fileName = data.image.split('/').pop();

    // 4. Combine them cleanly to point directly to your backend's static file folder
    return `${s3BucketUrl}/${fileName}`;
};

  return (
    <Link to={`/product/${data.id}`}>
    <div className='flex flex-col'>
     {/* <img alt="item" src={data.image.startsWith('http') ? data.image : `${process.env.REACT_APP_API_URL}/${data.image}`} /> */}
    <img alt="item" src={getImageSrc()} />
    <p className='py-4 text-lg'>{data.name}</p>
    <p className=''><span className='pr-4'>${data.new_price}</span> <span className='text text-neutral-400 line-through'>${data.old_price}</span></p>
    </div>
    </Link>
  )
}

export default Item
