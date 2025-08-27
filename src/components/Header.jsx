import React from 'react'
import { IoIosMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/LOGO.webp'
const Header = () => {
    return (
        <header>
            <div className='bg-[#00c2ff] hidden lg:flex justify-between items-center px-20 h-12'>
                <div className='flex items-center gap-9'>
                    <span className='flex  text-white font-semibold items-center gap-2'><IoIosMailUnread className='text-xl font-bold' />operation@alphamgcc.com</span>
                    <span className='flex text-white font-semibold items-center gap-2'><FaLocationDot className='text-xl font-bold' />Manama, Bahrain</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center bg-white rounded-full text-xl text-[#f98d06] p-2'>
                        <LuPhoneCall />
                    </div>
                    <div className=''>
                        <div className='text-white font-semibold '>
                            Get In Touch
                        </div>
                        <div className='text-white font-bold'>+97333333333</div>
                    </div>
                </div>
            </div>
            <nav className='bg-black flex items-center justify-between px-2 lg:px-20 h-20'>
                <div className=''>
                    <img className='h-18' src={logo} alt="Logo" />
                </div>
                <div className='lg:flex hidden items-center gap-20'>
                    <ul className='text-white  flex font-medium text-md items-center gap-5'>
                        <li className='hover:text-amber-500 transition-all cursor-pointer'>Home</li>
                        <li className='hover:text-amber-500 transition-all cursor-pointer'>About us</li>
                        <li className="relative hover:text-amber-500 transition-all group cursor-pointer">
                            <span className="">
                                Our Services<span className='text-amber-500'>+</span>Our Expertise
                            </span>

                            {/* Dropdown */}
                            <ul className="absolute top-[52px] left-0 w-52 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform -translate-y-3 group-hover:translate-y-0 z-50">
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Conventional & Advanced NDT Services</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Industrial Services</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Marine Fenders</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Diving Services</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >ROV Inspections</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Marine Craft</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Marine Salvage Services</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Rope Access & Drone Services</li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >Survey Services</li>
                               
                            </ul>
                        </li>
                        <li className='hover:text-amber-500 transition-all cursor-pointer'>Our Clients</li>
                        <li className='hover:text-amber-500 transition-all cursor-pointer'>HSE</li>
                        <li className='hover:text-amber-500 transition-all cursor-pointer'>Contact</li>
                    </ul>
                    <div className='text-white'>
                        <button className='px-4 py-2 cursor-pointer hover:bg-[#f98d06] text-medium font-medium transition-all border-white rounded-full border-2 '>Get A Quote</button>
                    </div>
                </div>
                <div className='text-4xl lg:hidden text-white'><GiHamburgerMenu /></div>
            </nav>
        </header>
    )
}

export default Header
