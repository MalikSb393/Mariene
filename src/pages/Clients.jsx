import React from 'react'
import Hero from '../components/Hero'
{/*clients images*/ }
import client1 from '../assets/Clients-Img/cli1.png'
import client2 from '../assets/Clients-Img/cli2.jpg'
import client3 from '../assets/Clients-Img/cli3.jpg'
import client4 from '../assets/Clients-Img/cli4.png'
import client5 from '../assets/Clients-Img/cli5.jpg'
import client6 from '../assets/Clients-Img/cli6.jpg'
import client7 from '../assets/Clients-Img/cli7.png'
import client8 from '../assets/Clients-Img/cli8.jpg'
import client9 from '../assets/Clients-Img/cli9.jpg'
import client10 from '../assets/Clients-Img/cli10.jpg'
import client11 from '../assets/Clients-Img/cli11.png'
import client12 from '../assets/Clients-Img/cli12.jpg'
import client13 from '../assets/Clients-Img/cli13.jpg'
import client14 from '../assets/Clients-Img/cli14.png'
import client15 from '../assets/Clients-Img/cli15.jpg'
import client16 from '../assets/Clients-Img/cli16.png'
import client17 from '../assets/Clients-Img/cli17.png'
import client18 from '../assets/Clients-Img/cli18.png'
import client19 from '../assets/Clients-Img/cli19.jpg'
import client20 from '../assets/Clients-Img/cli20.jpg'
import client21 from '../assets/Clients-Img/cli21.jpg'
import client22 from '../assets/Clients-Img/cli22.jpg'

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
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client9} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client10} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client11} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client12} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client13} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client14} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client15} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client16} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client17} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client18} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client19} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client20} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client21} alt="client image" />
                </div>
                <div className='w-[150px] lg:w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
                  <img src={client22} alt="client image" />
                </div>
              </div>
            </section>
    </div>
  )
}

export default Clients
