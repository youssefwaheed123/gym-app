// eslint-disable-next-line no-unused-vars
import React from 'react'
import Buttton from './Buttton'

export default function Hero() {
  return (
    <div className='text-center min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-2'>
        <p>IT`S TIME TO BE</p>
        
        <h1 className='uppercase font-bold text-7xl sm:text-5xl md:text-8xl lg:text-9xl '>
            MI
            <span className='text-blue-600'>Lo</span>
        </h1>
        </div>
        <p className='text-sm md:text-base font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco<span className='text-blue-600 font-medium'>
            laboris nisi ut aliquip ex ea commodo </span> consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <Buttton func={()=>{
             document.getElementById('generate').scrollIntoView({ behavior: 'smooth' });
        }}text="Accept & Begin"/>
    </div>
  )
}
