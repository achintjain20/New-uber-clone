import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captainData,setcaptainData] = useState({});


    const submitHandler = (e)=>{
        e.preventDefault();
        setcaptainData({
            email : email,
            password : password,
        });
        // console.log(captainData);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg'/>

<form onSubmit={(e)=>{
    submitHandler(e)
  
}}>
    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    <input 
    type="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)} 
    required 
    className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:size-base" 
    placeholder="email@example.com" />

    <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>

    <input 
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required 
    className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:size-base" 
    placeholder="password" /> 

    <button className="bg-[#111] rounded px-4 py-2 w-full text-white font-semibold placeholder:size-base mb-3">Login</button>
    <p className="text-center ">Join a fleet <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>

</form>
        </div>

        <div>
            <Link to='/login' className="bg-[#5783db] flex items-center justify-center rounded px-4 py-2 w-full text-white font-semibold placeholder:size-base">Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin