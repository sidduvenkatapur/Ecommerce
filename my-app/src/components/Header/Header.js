import React, { useContext, useEffect, useState } from 'react'
import logo from  '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import userImage from '../../Assets/nav-profile.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const [menu, setMenu] = useState("Shop")
    const {cartItems, products} = useContext(ShopContext || "");
    const [login,setLogin] = useState("Login");
     const userdata = sessionStorage.getItem("auth-token");
     const username = sessionStorage.getItem("username");
     console.log(username)

     useEffect(()=>{
      if(userdata){
        toast.success("Successfuly Loged In !");
        setLogin("Logout");
      }
     },[userdata])
    
    const logout = ()=>{
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("username");
    window.location.replace("/");
    }
    const totalCartItems = products.map((e)=>{
        let total = 0;
        if(cartItems[e.id]>0){
            total += 1;
        }
        return total;
    })

    function isNonZero(element) {
        return element !== 0;
      }
      
      // Use the filter method to create a new array with only non zero values
      let nonZeroArray = totalCartItems.filter(isNonZero);
      // console.log(nonZeroArray);
      
      // The length of the new array is the number of non zero values in the original array
      let nonZeroCount = nonZeroArray.length;



  return (
    <div className='flex mt-3 shadow-md py-3'>
    <div className=' flex flex-1 justify-center items-center'> 
    <img alt="logo" data-testid="logo" className="mx-4" src={logo}/>
    <span className='font-bold text-4xl'>SHOPPER</span>    
    </div>   
    <ul className=' flex gap-10 flex-1 list-none justify-center items-center text-xl'>
     <Link to="/"><li onClick={()=>{setMenu("Shop")}}>Shop {menu === "Shop"?<hr className=' bg-red-500 h-0.5'/>:<></>}</li></Link>
    <Link to="/mens"> <li onClick={()=>{setMenu("Men")}}>Men {menu === "Men"?<hr className=' bg-red-500 h-0.5'/>:<></>}</li></Link>
    <Link to="/womens"><li onClick={()=>{setMenu("Women")}}>Women {menu === "Women"?<hr className=' bg-red-500 h-0.5'/>:<></>}</li></Link>
    <Link to="/kids"> <li onClick={()=>{setMenu("Kids")}}>Kids {menu === "Kids"?<hr className=' bg-red-500 h-0.5'/>:<></>}</li></Link>
    </ul> 
    <div className='flex flex-1 justify-center items-center text-xl gap-8'>
     {login ==="Login"?<Link to="/signup"><button className='border border-l-slate-100 px-8 py-2 rounded-full text-xl'>{login}</button></Link>:<button className='border border-l-slate-100 px-8 py-2 rounded-full text-xl' onClick={()=>{logout()}}>{login}</button>}
     <Link to="/cart" className='flex'><img alt="cart" src={cart} className='w-8' />
      <span className='bg-red-600 text-white rounded-full p-2 h-6 text-sm w-6 absolute  top-6 cursor-pointer flex items-center'>{nonZeroCount}</span></Link>
     {username && <p className='flex gap-1'>{username}<img className="w-12" src={userImage} /></p>}
    </div>
    <ToastContainer />
    </div>
  )
}

export default Header