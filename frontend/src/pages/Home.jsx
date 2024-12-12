import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://files.oaiusercontent.com/file-CuDfYdQpq1xSmDJnNJFSr2?se=2024-12-12T07%3A46%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc9a1a383-15f4-48da-a816-fa2cd7258b6e.webp&sig=SR6FZSRD/J%2B4TklB/kwxMgyYO3JQ69UVDVLfVjesTpI%3D)] h-screen w-full pt-8 flex flex-col justify-between bg-red-400'>
            <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home