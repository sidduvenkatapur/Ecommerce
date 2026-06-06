import React, { useState } from 'react'

const ProductUpload = () => {

    const [image,setImage]= useState(false);
    const imagehandler =(e)=>{
      setImage(e.target.files[0])
    }
    const [Product,setProduct]=useState({
        name:"",
        category:"Women",
        old_price:"",
        new_price:"",
        image:""
    })

const Changehandler =(e)=>{
    setProduct({...Product, [e.target.name]:e.target.value})
}

const uploadProduct = async()=>{
    console.log(Product);
    let responsedata;
    let product = Product;
    let formdata = new FormData();
    formdata.append('product',image);
    await fetch(`${import.meta.env.VITE_API_URL}/upload`,{
        method:'POST',
        headers:{
            Accept:"application/json",
        },
        body:formdata,
    }).then((resp)=> resp.json()).then((data)=>{responsedata = data})
    if(responsedata.success){
        product.image = responsedata.image_url
        console.log(product);

        await fetch(`${import.meta.env.VITE_API_URL}/addproduct`,{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Product Added"):alert("Failed");
            
        })
        // setProduct({[e.target.name]:""})
    }  
     setProduct({
        name:"",
        category:"Women",
        old_price:"",
        new_price:"",
        image:""
    }); 
}

  return (
    <div className='p-10 my-10 w-[600px] bg-slate-100'>   
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter the product details
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Product Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter product name"
                    onChange={Changehandler}
                    value={Product.name}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="old_price" className="block text-sm font-medium leading-6 text-gray-900">
                Old Price
              </label>
              <div className="mt-2">
                <input
                type='number'
                  id="old_price"
                  name="old_price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Enter old price'
                  onChange={Changehandler}
                  value={Product.old_price}
                />
              </div>
             
            </div>
            <div className="col-span-full">
              <label htmlFor="old_price" className="block text-sm font-medium leading-6 text-gray-900">
                New Price
              </label>
              <div className="mt-2">
                <input
                type='number'
                  id="new_price"
                  name="new_price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder='Enter new price'
                  onChange={Changehandler}
                  value={Product.new_price}
                />
              </div>
             
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Select Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={Changehandler}
                  value={Product.category}
                >
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kid</option>
                </select>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Product Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                         {/* <img src={URL.createObjectURL(image)}/>  */}
                      <input id="image" name="image" type="file" className="sr-only"  onChange={imagehandler}  value={Product.image}/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
       onClick={uploadProduct} >
          Upload
        </button>
      </div>
    </div>
  )
}

export default ProductUpload
