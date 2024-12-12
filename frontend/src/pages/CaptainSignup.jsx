import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData,setUserData] = useState({});

    const submitHandler = (e)=>{
        e.preventDefault();
        setUserData({
            fullName:{
                firstName : firstName,
                lastName : lastName,    
            },
            email : email,
            password : password,
        });
        // console.log(userData);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>

<form onSubmit={(e)=>{
    submitHandler(e)
  
}}>

    <h3 className='text-base font-medium mb-2'>What's your name</h3>
    <div className='flex gap-x-4 mb-5'>
        <input 
    type="text" 
    required 
    value = {firstName} 
    onChange = {(e)=>{
        setFirstName(e.target.value);
    }}
    className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:size-base" 
    placeholder="First Name" />

    <input 
    type="text" 
    value = {lastName}
    onChange = {(e)=>{
        setLastName(e.target.value);
    }} 
    className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-base placeholder:size-base" 
    placeholder="Last Name" />
    </div>
    
    <h3 className='text-base font-medium mb-2'>What's your email</h3>
    <input 
    type="email" 
    required 
    onChange = {(e)=>{
        setEmail(e.target.value);
    }}
    value = {email}
    className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-base placeholder:size-base" 
    placeholder="email@example.com" />

    <h3 className='text-base     mb-2 font-medium'>Enter Password</h3>

    <input 
    type="password"
    required 
    onChange = {(e)=>{
        setPassword(e.target.value);
    }}
    value={password}
    className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-base placeholder:size-base" 
    placeholder="password" /> 

    <button className="bg-[#111] rounded px-4 py-2 w-full text-white font-semibold placeholder:size-base mb-3">Sign Up</button>
</form>
    <p className="text-center ">Already have an account? <Link to='/captain-login' className='text-blue-600'>login here</Link></p>

        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
        <div>
            <Link to='/login' className="bg-[#5783db] flex items-center justify-center rounded px-4 py-2 w-full text-white font-semibold placeholder:size-base">Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainSignup