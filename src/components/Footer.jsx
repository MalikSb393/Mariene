import React from 'react'
import logo from '../assets/LOGO.webp'
const Footer = () => {
    return (
        <div>
            <div className='bg-[#0f0f35] py-5 px-20 flex items-center justify-between'>
                <div className=''>
                    <p className='text-white font-bold py-2 text-3xl'>Looking for the Best Transport Services?</p>
                    <p className='text-white font-medium text-lg'> As a app web crawler expert, We will help to organize.</p>
                </div>
                <div>
                    <button className='py-2 px-6 rounded-sm bg-primary cursor-pointer'>Get A Quote</button>
                </div>
            </div>
            <div className='bg-[#06071d] flex gap-10 py-6 px-20'>
                <div className='h-[70dvh] w-[290px] '>
                    <div className='px-3  w-[80%]'><img src={logo} alt="logo" /></div>
                    <p className='font-medium text-white'>Our Team is made of a group of highly trained, experienced certified divers and are all WCB/CSA certified. We are experienced in the many challenges involved with inspection and maintenance diving.</p>
                    <button className='py-1 px-3 bg-primary font-semibold rounded-sm cursor-pointer text-white my-5'>About us</button>
                </div>
                <div className='h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Quick Links <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Home</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Services</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>About us</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact us</li>
                    </ul>
                </div>
                <div className='h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Our Services <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Conventional & Advanced NDT Services</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Industrial Services</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Fenders</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Diving Services</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>ROV Inspections</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Craft</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Marine Salvage Services</li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Rope Access & Drone Services
                        </li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Survey Services</li>
                    </ul>
                </div>
                <div className='h-[70dvh] w-[290px] '>
                    <div className='font-bold text-white text-3xl '>Our Services <div className='w-[12%] mt-1 h-1 bg-primary'></div></div>
                    <ul className='text-white font-medium  mt-5 flex flex-col gap-3'>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Head Office: <div>Manama, Bahrain</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Email: <div>operation@alphamgcc.com</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact: <div>+97333333333</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Branch: <div>Jeddah, Kingdom of Saudi Arabia</div></li>
                        <li className='cursor-pointer hover:text-amber-500 transition-all'>Contact: <div>+97300000000</div></li>
                    </ul>
                </div>

            </div>
            <div className='h-[0.5px]  bg-white'></div>
            <div className='bg-[#06071d] text-white text-center py-4 font-medium'>
                <p>© 2025 Alphamgcc - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
