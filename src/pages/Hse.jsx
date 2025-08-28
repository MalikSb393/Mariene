import React from 'react'
import Hero from '../components/Hero'

const Hse = () => {
  return (
    <div>
      <Hero Name={'HSE Policy'}/>
       <section className='bg-white p-5 lg:p-10'>
        <div className='bg-primary p-2 lg:p-5 rounded-tl-[50px]  lg:rounded-tl-[100px] rounded-br-[50px] lg:rounded-br-[100px] lg:mx-5'>
          <div className='w-4/5 mx-auto'>

            <h3 className='font-bold text-amber-600 pb-5 text-xl lg:text-4xl '>HSE Policy</h3>
            <p className='font-medium pb-2 text-xs lg:text-lg text-white '>The management of <span className='font-bold text-xl lg:text-2xl underline'>Alphamgcc</span> tries to maintain our customers and clients trust. Management is responsible for the health and safety of our employees and prevention of harm to the environment.</p>
            <p className='font-medium pb-2 text-xs lg:text-lg text-white '>Our Mission is to provide services and solutions to all our clients which are cost effective yet of world-class value and quality.</p>
            <p className='font-medium pb-2 text-xs lg:text-lg text-white '>Our activities and scope of work are intended to provide all types of assets integrity services & solutions including marine & subsea services. In order to provide client satisfactory services for the designated scope of work we comply with International standard of work culture by involving Internal QA/AC and QHSE policies to serve our clients with distinction.</p>
            
          </div>
        </div>

      </section>
    </div>
  )
}

export default Hse
