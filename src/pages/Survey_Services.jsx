import React from 'react'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import img1 from '../assets/survay/1.webp'
import img2 from '../assets/survay/2.webp'
import img3 from '../assets/survay/3.webp'

const Survey_Services = () => {
    return (
        <div>
            <Hero Name={'Survey Services'} />
            <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Survey Services</h1>
                <p className='text-center text-slate-600 py-4 '>Above ground storage tanks survey services
                </p>
                <p className='text-center text-slate-600'>Plumbness, roundness settlement & calibration</p>
                <p className='text-center text-slate-600'> Seabed Surveys by divers & ROV</p>
                <p className='text-center text-slate-600'>Bathymetric & Seabed profiling surveys</p>




            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[230px] rounded-md' src={img1} alt="survay image" />
                <img className='lg:h-[230px] rounded-md' src={img2} alt="survay image" />
                <img className='lg:h-[230px] rounded-md' src={img3} alt="survay image" />

            </div>
            <ServiceSection heading={'Other Services'} />
        </div>
    )
}

export default Survey_Services
