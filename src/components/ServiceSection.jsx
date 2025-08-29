import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import img1 from '../assets/service_Img/ser1.webp'
import img2 from '../assets/service_Img/ser2.webp'
import img3 from '../assets/service_Img/ser3.webp'
import img4 from '../assets/service_Img/ser4.webp'
import img5 from '../assets/service_Img/ser5.webp'
import img6 from '../assets/service_Img/ser6.webp'
import img7 from '../assets/service_Img/ser7.webp'
import img8 from '../assets/service_Img/ser8.webp'
import img9 from '../assets/service_Img/ser9.webp'
import { Link } from 'react-router-dom';

const ServiceSection = ({heading}) => {
  return (
    <div id='ser' className='bg-[#000684] lg:p-10'>
        <div className='secondary font-medium pt-3 lg:pt-0 text-xl lg:text-2xl text-center'>We specialise in the transportation</div>
        <div className='text-center font-bold text-white py-2 text-3xl lg:text-5xl'>{heading}</div>
        <div className='lg:p-10 p-4 flex flex-col items-center lg:grid lg:grid-cols-3 gap-7'>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img1} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Conventional & Advanced NDT Services</div>
                 <Link to={'/conventional_Services'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-2 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img2} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Industrial Services</div>
                 <Link to={'/industrial_Services'} >
                <button className='bg-[#00c2ff] hover:bg-amber-600  transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img3} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium  text-xl'>Marine Fenders</div>
                 <Link to={'/marine_Fenders'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img4} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Diving Services</div>
                 <Link to={'/diving_Services'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img5} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>ROV Inspections</div>
                 <Link to={'/rov_Inspections'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img6} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Marine Craft</div>
                 <Link to={'/marine_Craft'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img7} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Marine Salvage Services</div>
                 <Link to={'/marine_Salvage'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img8} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-2 lg:py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Rope Access & Drone Services</div>
                 <Link to={'/rope_Access'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
            <div className=' h-[300px] rounded-t-md w-[330px] lg:w-[370px]'>
                <div className='h-1/2'>
                <img className='rounded-t-md' src={img9} alt="service  image" />
                </div>
                <div className='h-1/2 px-8 py-6 rounded-b-md bg-white'>
                 <div className='font-medium text-xl'>Survey Services</div>
                 <Link to={'/survey_Services'}>
                <button className='bg-[#00c2ff] hover:bg-amber-600 transition-all w-full py-2 flex items-center gap-2 justify-center cursor-pointer  rounded-full mt-9 text-white font-medium'>Explore More <div><FaArrowRight/></div> </button>
                 </Link>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default ServiceSection
