import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
const [signup,setSignup]= useState("Login")
const [signupData,setSignUpData] = useState({
  username:"",
  email:"",
  password:""
})

const handleChange = (e)=>{
  setSignUpData((prev)=>({...prev,[e.target.name]:e.target.value}))
}
// useEffect(()=>{
 
// },[])

const handleSignup = async()=>{
  const responsedata = await fetch("http://localhost:4000/signup",{
    method:"POST",
    headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(signupData),
  });
  const jsonResponse = await responsedata.json();
  if(jsonResponse.success){
      // toast.success("Successfuly Signed up !");
    sessionStorage.setItem('auth-token',jsonResponse.token);
    sessionStorage.setItem("username",jsonResponse.username);
    window.location.replace("/");
  }
  else{
    alert(jsonResponse.error)
  }
}

const handleLogin = async()=>{
  const responsedata = await fetch("http://localhost:4000/login",{
    method:"POST",
    headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
    },
    body:JSON.stringify(signupData),
  });
  const jsonResponse = await responsedata.json();
  if(jsonResponse.success){
    // alert(jsonResponse.username);
    
    sessionStorage.setItem('auth-token',jsonResponse.token);
    sessionStorage.setItem('username',jsonResponse.username);
    window.location.replace("/");
    // toast("Successfuly Loged In !");
  }
  else{
    alert(jsonResponse.error)
  }
}


console.log(signupData);
  return (
    <div className='flex justify-center py-24 bg-red-50'>
      <div className='flex flex-col w-[600px] bg-white p-12 gap-10'>
        <h1 className='text-3xl'>{signup}</h1>
       {signup != "Login"?<input value={signupData.username} name='username' type="text" placeholder='Your name' className='border p-4' onChange={handleChange}/>:<></>}
        <input value={signupData.email} type="email" name='email' placeholder='Email address' className='border p-4' onChange={handleChange}/>
        <input value={signupData.password} type="password" name='password' placeholder='password' className='border p-4' onChange={handleChange}/>
        {signup != "Login"?<button className='border p-4 text-white bg-red-600 text-lg' onClick={()=>handleSignup()}>Continue</button>:<button className='border p-4 text-white bg-red-600 text-lg' onClick={()=>handleLogin()}>Login</button>}
        {signup != "Login"?<p>Already have an account? <span onClick={()=>setSignup("Login")} className='text-red-600 cursor-pointer'>Login here</span></p>:<p>Create an account? <span onClick={()=>setSignup("Sign Up")} className='text-red-600 cursor-pointer'>Click here</span></p>}
        <div className='flex items-center gap-3'>
        <input id="agreecheck" type="checkbox" className='w-6 h-6'/> 
          <label  htmlFor='agreecheck'>By continuing I agree to the terms of use & privacy police</label>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Signup