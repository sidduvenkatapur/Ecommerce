import React from 'react'
import product1 from '../../Assets/product_1.png'
import { Link } from 'react-router-dom'

const Item = ({data}) => {
  return (
    <Link to={`/product/${data.id}`}>
    <div className='flex flex-col'>
    <img alt="item" src={data.image.startsWith('http') ? data.image : `${process.env.REACT_APP_API_URL}/${data.image}`} />
    <p className='py-4 text-lg'>{data.name}</p>
    <p className=''><span className='pr-4'>${data.new_price}</span> <span className='text text-neutral-400 line-through'>${data.old_price}</span></p>
    </div>
    </Link>
  )
}

export default Item
