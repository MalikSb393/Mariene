import React from 'react'
import Hero from '../components/Hero'
import ServiceSection from '../components/ServiceSection'

const Marine_Salvage = () => {
  return (
    <div>
      <Hero Name={'Marine Salvage Services'}/>
      <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Marine Salvage Services</h1>
                <p className='text-center text-slate-600 py-4 '>Alphamgcc is providing emergency response services for marine salvages for sunken docks OR any other MOU including anchor recovery & afloat salvages on short notices.</p>
                <p className='text-center text-slate-600'>In addition to above, Alpamgcc also offer fenders recovery & seabed debris removal services to our esteemed clients.</p>


            </div>
            <ServiceSection/>
    </div>
  )
}

export default Marine_Salvage
