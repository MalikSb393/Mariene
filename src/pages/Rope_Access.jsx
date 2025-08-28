import React from 'react'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'
import img1 from '../assets/rope/1.webp'
import img2 from '../assets/rope/2.webp'
import img3 from '../assets/rope/3.webp'

const Rope_Access = () => {
  return (
    <div>
      <Hero Name={'Rope Access & Drone Services'}/>
      <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Rope Access & Drone Services</h1>
                <p className='text-center text-slate-600 py-4 '>Alphamgcc is offering Rope Access services with its IRATA (Industrial Rope Access Trade Association) technicians, which can perform a variety of mechanical crafts including pipefitting, insulation, and welding, as well as inspections and NDT Inspections—with the most advanced NDT equipmen</p>
                <div className='text-center mt-6 text-2xl font-bold'>MECHANICAL ROPE ACCESS CAPABILITIES</div>
                <p className='text-center text-slate-600'>Welding, Fitting, Structural Steel</p>
                <p className='text-center text-slate-600'>Structural Installations, Removal, and Repair</p>
                <p className='text-center text-slate-600'>Electrical and Instrumentation Installations and Repairs</p>
                <p className='text-center text-slate-600'>Cable Tray, Ladder Rack, Basket Tray Installation and Repairs</p>
                <p className='text-center text-slate-600'>Operations Assistance (Install, Remove Isolation Tags, Open/Close Valves, Binding)</p>
                <p className='text-center text-slate-600'>Basic and Advanced Rigging Services
</p>
                <p className='text-center text-slate-600'>Ultra-High Pressure Washing
</p>
                <p className='text-center text-slate-600'>Safety Platforms, Vertical Ladder and Ladder Cage Surveys, Repairs, Replacement
</p>
                 <div className='text-center mt-6 text-2xl font-bold'>OTHER ROPE ACCESS SERVICES
</div>
                <p className='text-center text-slate-600'>NDT Inspections
</p>
                <p className='text-center text-slate-600'>Sandblasting</p>
                <p className='text-center text-slate-600'>Coating</p>
                <p className='text-center text-slate-600'>Facade Maintenance & Cleaning
</p>
                 <div className='text-center mt-6 text-2xl font-bold'>DRONE SERVICES
</div>
                <p className='text-center text-slate-600'>Ultrasonic Thickness Measurements

</p>
                <p className='text-center text-slate-600'>Visual Inspections
</p>
                <p className='text-center text-slate-600'>Tanks Internal Inspections for marine vessels & industrial facilities
</p>
                
                
               
        



            </div>
             <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[230px] rounded-md' src={img1} alt="rope_access image" />
                <img className='lg:h-[230px] rounded-md' src={img2} alt="rope_access image" />
                <img className='lg:h-[230px] rounded-md' src={img3} alt="rope_access image" />

            </div>
            <ServiceSection heading={'Other Services'} />
    </div>
  )
}

export default Rope_Access
