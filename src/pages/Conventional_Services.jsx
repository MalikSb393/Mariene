import React from 'react'
import Hero from '../components/Hero'
import { TiTick } from "react-icons/ti";
import img1 from '../assets/conventional/1.webp'
import img2 from '../assets/conventional/2.webp'
import img3 from '../assets/conventional/3.webp'
import img4 from '../assets/conventional/4.webp'
import img5 from '../assets/conventional/5.webp'
import img6 from '../assets/conventional/6.webp'
import img7 from '../assets/conventional/7.webp'
import img8 from '../assets/conventional/8.webp'
import ServiceSection from '../components/ServiceSection';

const Conventional_Services = () => {
    return (
        <div>
            <Hero Name={'Conventional & Advanced NDT Services'} />
            <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Conventional & Advanced NDT Services</h1>
                <p className='text-center text-slate-600 py-4 '>Alpha Group is providing Industrial services for over 10 years of experience using its experienced workforce & advanced equipment. Our teams of experienced personnel committed deliver solutions to the Oil, Gas and Petrochemical Industries as mentioned below;</p>
                <div className='w-full flex flex-col gap-5'>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Above Ground Storage Tanks Rehabilitation</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Tanks Cleaning and Maintenance</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Fabrication & Welding</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Sandblasting & Coating</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Heat Exchangers & Boiler Tubes Cleaning</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Jetty Repairs</div>
                    </div>
                    <div className='flex items-center bg-white shadow-amber-200 shadow-md rounded-md py-3 px-5 gap-3 lg:w-3xl w-full mx-auto'>
                        <div className='bg-primary  rounded-full text-white w-fit'><TiTick /></div>
                        <div className='text-md font-medium'>Ultra High-Pressure Water Jetting</div>
                    </div>
                </div>
            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[250px] rounded-md' src={img1} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img2} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img3} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img4} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img5} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img6} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img7} alt="convensional image" />
                <img className='lg:h-[250px] rounded-md' src={img8} alt="convensional image" />
            </div>
            <ServiceSection heading={'Other Services'} />
        </div>
    )
}

export default Conventional_Services
