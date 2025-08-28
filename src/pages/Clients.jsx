import React from 'react'
import Hero from '../components/Hero'
{/*clients images*/ }
import client1 from '../assets/Clients-Img/cli1.webp'
import client2 from '../assets/Clients-Img/cli2.webp'
import client3 from '../assets/Clients-Img/cli3.webp'
import client4 from '../assets/Clients-Img/cli4.webp'
import client5 from '../assets/Clients-Img/cli5.webp'
import client6 from '../assets/Clients-Img/cli6.webp'
import client7 from '../assets/Clients-Img/cli7.webp'
import client8 from '../assets/Clients-Img/cli8.webp'

const Clients = () => {
  return (
    <div>
      <Hero Name={'Our Clients'}/>
      <section className='bg-white py-5 my-7 lg:py-0 px-3 lg:px-0 lg:p-10'>
              <h3 className='text-center  font-bold text-5xl'>Our Clients</h3>
              <div className='lg:p-15 p-5 grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client1} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client2} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client3} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client4} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client5} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client6} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client7} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client8} alt="client image" />
                </div>
              </div>
            </section>
    </div>
  )
}

export default Clients
