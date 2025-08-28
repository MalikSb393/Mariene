import React from 'react'
import Hero from '../components/Hero'
import img1 from '../assets/industrial/1.webp'
import img2 from '../assets/industrial/2.webp'
import img3 from '../assets/industrial/3.webp'
import img4 from '../assets/industrial/4.webp'
import img5 from '../assets/industrial/5.webp'
import img6 from '../assets/industrial/6.webp'
import img7 from '../assets/industrial/7.webp'
import img8 from '../assets/industrial/8.webp'
import img9 from '../assets/industrial/8.webp'
import ServiceSection from '../components/ServiceSection'


const Industrial_Services = () => {
    return (
        <div>
            <Hero Name={'Industrial Services'} />
            <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Industrial Services</h1>
                <p className='text-center text-slate-600 py-4 '>Alphamgcc is providing Industrial services for over 30 years of experience using its experienced workforce & advanced equipment. Our teams of experienced personnel committed deliver solutions to the Oil, Gas and Petrochemical Industries as mentioned below;</p>
                <p className='text-center text-slate-600'>Above ground storage tanks rehabilitation</p>
                <p className='text-center text-slate-600'>Tanks Cleaning and Maintenance</p>
                <p className='text-center text-slate-600'>Fabrication & Welding</p>
                <p className='text-center text-slate-600'>Sandblasting & Coating</p>
                <p className='text-center text-slate-600'>Heat Exchangers & Boiler Tubes Cleaning</p>
                <p className='text-center text-slate-600'>Jetty Repairs</p>
                <p className='text-center text-slate-600'>Ultra High-Pressure Water Jetting</p>

            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[230px] rounded-md' src={img1} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img2} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img3} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img4} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img5} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img6} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img7} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img8} alt="industrial image" />
                <img className='lg:h-[230px] rounded-md' src={img9} alt="industrial image" />
            </div>
            <ServiceSection heading={'Other Services'} />
        </div>
    )
}

export default Industrial_Services
