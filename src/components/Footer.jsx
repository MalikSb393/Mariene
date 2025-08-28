import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className='bg-[#0f0f35] py-2 px-5 lg:px-20 flex items-center justify-between'>
                <div className=''>
                    <p className='text-white font-bold py-2 text-xl lg:text-3xl'>Looking for the Best Transport Services?</p>
                    <p className='text-white font-medium text-sm lg:text-lg'> As a app web crawler expert, We will help to organize.</p>
                </div>
                <div>
                    <Link to={'/contact'}>
                    <button className='py-2 px-2 text-white lg:px-6 rounded-sm bg-primary text-xs lg:text-base cursor-pointer'>Quote?</button>
                    </Link>
                </div>
            </div>
            <div className='bg-[#06071d] relative flex flex-col items-center lg:flex-row gap-10 py-6 px-5 lg:px-20'>
                <div className='lg:h-[70dvh] w-[290px] '>
                    <div className='px-3  w-[50%] lg:mb-5'><img className='rounded-full' src={logo} alt="logo" /></div>
                    <p className='font-medium text-white'>Our Team is made of a group of highly trained, experienced certified divers and are all WCB/CSA certified. We are experienced in the many challenges involved with inspection and maintenance diving.</p>
                    <Link to={'/about'}>
                    <button className='py-1 px-3 bg-primary font-semibold rounded-sm cursor-pointer text-white my-5'>About us</button>
                    </Link>
                </div>
                <div className='lg:h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Quick Links <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <Link to={'/'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Home</li>
                        </Link>
                        <a>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Services</li>
                        </a>
                        <Link to={'/about'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>About us</li>
                        </Link>
                        <Link to={'/contact'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact us</li>
                        </Link>
                    </ul>
                </div>
                <div className='lg:h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Our Services <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <Link to={'/conventional_Services'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Conventional & Advanced NDT Services</li>
                        </Link>
                        <Link to={'/industrial_Services'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Industrial Services</li>
                        </Link>
                        <Link to={'/marine_Fenders'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Fenders</li>
                        </Link>
                        <Link to={'/diving_Services'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Diving Services</li>
                        </Link>
                        <Link to={'/rov_Inspections'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>ROV Inspections</li>
                        </Link>
                        <Link to={'/marine_Craft'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Craft</li>
                        </Link>
                        <Link to={'/marine_Salvage'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Salvage Services</li>
                        </Link>
                        <Link to={'/rope_Access'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Rope Access & Drone Services
                        </li>
                        </Link>
                        <Link to={'/survey_Services'}>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Survey Services</li>
                        </Link>
                    </ul>
                </div>
                <div className='lg:h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Our Services <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Head Office: <div>Al Munirah, Jeddah</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Email: <div>operation@alphamgcc.com</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact: <div>+97333333333</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Branch: <div>Jeddah, Kingdom of Saudi Arabia</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact: <div>+97300000000</div></li>
                    </ul>
                </div>

             <div className='absolute right-0 bottom-0 text-white font-medium text-xs'>
                <div>Developed by : Rajab</div>
                <div>rajabali10005@gmail.com</div>
            </div>
            </div>
            <hr className='h-[1px] bg-blue-500 border-none'/>
            <div className='bg-[#06071d] text-white text-center py-4 font-medium'>
                <p>© 2025 Alphamgcc - All rights reserved.</p>
            </div>
           
        </div>
    )
}

export default Footer
