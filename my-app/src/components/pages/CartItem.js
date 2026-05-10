import React, { useContext, useState,useMemo } from 'react'
import { ShopContext } from '../Context/ShopContext'
import removeIcon from '../../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {products,cartItems,removeCartItem} = useContext(ShopContext)
return (
    <div className='p-[125px]'> 
        <div className='grid grid-cols-5 text-lg font-medium py-2'>
            <p>Product</p>
            <p>Title</p>
            <p>Quentity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
          products.map((e)=>{
            
            if(cartItems[e.id]>0){
                 
              return<div> 
               <div className='grid grid-cols-5 items-center'>
                            <img src={e.image} className='w-32' />
                            <p className='w-60'>{e.name}</p>
                            <p>{cartItems[e.id]}</p>
                            <p>{cartItems[e.id] * e.new_price}</p>
                            <img className=" cursor-pointer" onClick={()=>{removeCartItem(e.id)}} src={removeIcon} />
                         </div>
                         <hr/>
                         </div>
                         
            }
          })
        }
        <hr/>

        <div className='py-32 flex justify-between'>
            <div className='w-96'>
                <p className='text-lg font-medium py-4'>Cart Totals</p>
                <div className='flex gap-2 flex-col'>
                    <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>$0</p>
                    </div>
                    <hr/>
                        <div className='flex justify-between'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='flex justify-between'>
                            <p className='font-medium'>Total</p>
                            <p className='font-medium'>$0</p>
                        </div>
                        
                        <button className='py-4 px-8 bg-red-600 text-lg font-medium my-4 text-white w-52'>Checkout</button>
                </div>
            </div>
            <div>
            <p className='text-lg font-medium py-4'>If you have promo code enter here</p>
        <input type='text' placeholder='Promo code' className='border border-gray-400 bg-white-900 py-2 px-4 w-96 rounded-full text-white font-normal'/>
     <button className=' relative right-12 py-2 px-8 bg-black text-white rounded-full text-lg'>Submit</button>
     </div>
        </div>
    </div>
  )
      }


export default CartItem