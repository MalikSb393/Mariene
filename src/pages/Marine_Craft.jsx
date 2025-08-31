import React from 'react'
import Hero from '../components/Hero'
import img1 from '../assets/ROV/1.webp'
import img2 from '../assets/ROV/2.webp'
import img3 from '../assets/ROV/3.webp'
import ServiceSection from '../components/ServiceSection'
const Marine_Craft = () => {
  return (
    <div>
      <Hero Name={'Marine Craft'}/>
       <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Marine Craft</h1>
                <p className='text-center text-slate-600 py-4 '>Alpha Group is providing underwater inspection services by using Remotely Operated Vehicles (ROV).</p>
                <p className='text-center text-slate-600'>Moreover, Alpha Group is fully capable to conduct the UWILDs with ROV for cost & time effective solutions to Client’s.</p>


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

export default Marine_Craft
