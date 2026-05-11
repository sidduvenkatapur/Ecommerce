import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import allProducts from '../../Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{

    let cart ={}
    for(let index=0;index<300+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [products,setProducts]= useState([])

    const [cartItems, SetCartItems] = useState(getDefaultCart());
     console.log(cartItems);
   
    
    useEffect(()=>{
        getAllProducts();  
        if(sessionStorage.getItem("auth-token")){
            fetch(`${process.env.REACT_APP_API_URL}/getcart`,{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${sessionStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:"",
            }).then((resp)=> resp.json()).then((data)=>SetCartItems(data))
        }
        
       },[])

    const getAllProducts = async()=>{
        const data = await fetch(`${process.env.REACT_APP_API_URL}/allproducts`);
        const jsonData = await data.json();
        setProducts(jsonData);
        // console.log(jsonData);
    }

    const addToCart = async (itemId)=>{
      SetCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
      if(sessionStorage.getItem("auth-token")){
        const data = await fetch(`${process.env.REACT_APP_API_URL}/addtocart`,{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "auth-token":`${sessionStorage.getItem("auth-token")}`,
                "Content-Type":"application/json",
            },
            body:JSON.stringify({"itemId":itemId})
        });
        const responsedata = await data.json();
        toast.success(responsedata.success);
      }
    }

    const removeCartItem = async (itemId)=>{
        SetCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(sessionStorage.getItem("auth-token")){
            const data =  await fetch(`${process.env.REACT_APP_API_URL}/removefromcart`,{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${sessionStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"itemId":itemId})
            });
            const responsedata =  await data.json();
            console.log(responsedata);
          }

      }
      const ContaxtValue ={products,cartItems,addToCart,removeCartItem}
     return(
    <ShopContext.Provider value={ContaxtValue}>
        {props.children}
        </ShopContext.Provider>
     )
}

export default ShopContextProvider
