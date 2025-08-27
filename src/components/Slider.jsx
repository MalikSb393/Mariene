
import React, { useEffect, useState } from 'react'

import pic1  from '../assets/pic1.jpg'
import pic2  from '../assets/pic2.jpg'
import pic3  from '../assets/pic3.jpg'
import mob1 from '../assets/mob1.jpg'
import mob2 from '../assets/mob2.jpg'
import mob3 from '../assets/mob3.jpg'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Slider = () => {
     const [countslide, setcountslide] = useState(0)
    const DesktopSlider = [
        pic1,
        pic2,
        pic3
       
    ]

    const MobileSlider = [
         pic1,
        pic2,
        pic3
    ]
    const handleNext = () => {
        if (DesktopSlider.length - 1 > countslide) {

            setcountslide(preve => preve + 1)
        }
    }
    const handleprev = () => {
        if (DesktopSlider.length - 5 < countslide) {

            setcountslide(preve => preve - 1)
        }
    }
    useEffect(() => {
        const intervel = setInterval(() => {
            if (DesktopSlider.length - 1 > countslide) {

                handleNext()
            } else { setcountslide(0) }
        }, 3000);

        return () => {
            clearInterval(intervel)
        }
    }, [countslide])
  return (
    <div className=''>
            {/* Desktop Slider */}
            <div className='md:flex relative hidden   w-full overflow-hidden'>
                <div className='absolute z-10 flex w-full   h-full items-center justify-between '>
                    <button onClick={handleprev} className='text-2xl p-1  bg-white cursor-pointer rounded-full hover:scale-105 transition-all'><FaAngleLeft /></button>
                    <button onClick={handleNext} className='text-2xl p-1  bg-white cursor-pointer rounded-full hover:scale-105 transition-all'><FaAngleRight /></button>
                </div>

                {
                    DesktopSlider.map((img, index) => {
                        return (
                            <div className='h-[calc(100dvh-128px)] min-w-full ' key={index}>
                                <img className='h-full  w-full transition-all duration-500 ease-out ' style={{ transform: `translateX(-${countslide * 100}%)` }} src={img} alt="banner" />
                            </div>
                        )
                    })
                }
            </div>
            {/* MobileSlider */}
            <div className='flex relative md:hidden rounded-md w-full overflow-hidden'>
                

                {
                    MobileSlider.map((img, index) => {
                        return (
                            <div className='h-[calc(100dvh-80px)] min-w-full ' key={index}>
                                <img className='h-full  w-full transition-all duration-700 ease-out  ' style={{ transform: `translateX(-${countslide * 100}%)` }} src={img} alt="banner" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Slider
