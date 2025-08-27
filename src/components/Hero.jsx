import React from 'react'
import hero from '../assets/hero.webp'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import head from '../assets/head.jpg'
const Hero = ({Name}) => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='h-[350px] w-full  mix-blend-multiply' src={head} alt="hero Image" />
                <div className='h-[350px] opacity-55 bg-sky-900 absolute top-0 w-full'></div>
                <img className='absolute bottom-0 right-0' src={hero} alt="hero image" />
            <div className=' w-full h-[350px] flex justify-center items-center flex-col absolute top-0'>
                <h1 className='text-center py-6 text-4xl text-white font-bold'>{Name}</h1>
                <div className='flex items-center gap-3'>
                    <span className='font-medium text-lg text-white'>Home</span>
                    <span className='text-red-500 text-2xl'><MdOutlineKeyboardDoubleArrowRight/></span>
                    <span className='font-medium text-lg text-white'>{Name}</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero
