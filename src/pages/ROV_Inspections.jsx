import React from 'react'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import img1 from '../assets/ROV/1.webp'
import img2 from '../assets/ROV/2.webp'
import img3 from '../assets/ROV/3.webp'

const ROV_Inspections = () => {
  return (
    <div>
      <Hero Name={'ROV Inspections'}/>
       <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>ROV Inspections</h1>
                <p className='text-center text-slate-600 py-4 '>Alphamgcc is providing underwater inspection services by using Remotely Operated Vehicles (ROV).</p>
                <p className='text-center text-slate-600'>Moreover, Alphamgcc is fully capable to conduct the UWILDs with ROV for cost & time effective solutions to Client’s.</p>


            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[230px] rounded-md' src={img1} alt="inspections image" />
                <img className='lg:h-[230px] rounded-md' src={img2} alt="inspections image" />
                <img className='lg:h-[230px] rounded-md' src={img3} alt="inspections image" />

            </div>
            <ServiceSection heading={'Other Services'} />
    </div>
  )
}

export default ROV_Inspections
