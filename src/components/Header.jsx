import React, { useEffect, useState } from 'react'
import { IoIosMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.jpeg'
import logo1 from '../assets/logo11.png'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 12) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <div className={`bg-[#00c2ff] transition-transform duration-300 z-40
          ${hideHeader ? "-translate-y-full" : "translate-y-0"} hidden lg:flex justify-between items-center px-20 h-12`}>
                <div className='flex items-center gap-9'>
                    <span className='flex  text-white font-semibold items-center gap-2'><IoIosMailUnread className='text-xl font-bold' />operation@alphamgcc.com</span>
                    <span className='flex text-white font-semibold items-center gap-2'><FaLocationDot className='text-xl font-bold' />Al Munirah, Jeddah</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center bg-white rounded-full text-xl text-[#f98d06] p-2'>
                        <LuPhoneCall />
                    </div>
                    <div className=''>
                        <div className='text-white font-semibold '>
                            Get In Touch
                        </div>
                        <div className='text-white font-bold'>+966 503619504</div>
                    </div>
                </div>
            </div>
            <nav className={`bg-black z-50  w-full    transition-all duration-300 
          ${hideHeader ? "fixed top-0 w-full" : "relative"} flex items-center justify-between px-2 lg:px-20 h-16 lg:h-20`}>
               <Link to={'/'}>
                <div className=''>
                    <img className='lg:h-14 h-12  ' src={logo1} alt="Logo" />
                </div>
               </Link>
                <div className='lg:flex hidden items-center gap-20'>
                    <ul className='text-white  flex font-medium text-md items-center gap-5'>
                        <Link to={'/'} className='hover:text-amber-500 transition-all cursor-pointer'>Home</Link>
                        <Link to='/about' className='hover:text-amber-500 transition-all cursor-pointer'>About us</Link>
                        <Link to={'/expertise'} className='hover:text-amber-500 transition-all cursor-pointer'>Our Expertise</Link>

                        <li className="relative hover:text-amber-500 transition-all group cursor-pointer">
                            <span className="">
                                Our Services<span className='text-amber-500'>+</span>services modes
                            </span>

                            {/* Dropdown */}
                            <ul className="absolute top-[52px] left-0 w-52 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform -translate-y-3 group-hover:translate-y-0 z-50">
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/conventional_Services'} >Conventional & Advanced NDT Services</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/industrial_Services'}  >Industrial Services</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/marine_Fenders'}  >Marine Fenders</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm"  >
                                    <Link to={'/diving_Services'}  >Diving Services</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/rov_Inspections'}  >ROV Inspections</Link >
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/marine_Craft'}  >Marine Craft</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/marine_Salvage'}  >Marine Salvage Services</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/rope_Access'}  >Rope Access & Drone Services</Link>
                                </li>
                                <li className="px-2 py-2 hover:text-blue-400 mx-2 border-b last:border-none text-sm" >
                                    <Link to={'/survey_Services'}  >Survey Services</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link to={'/clients'} className='hover:text-amber-500 transition-all cursor-pointer'>Our Clients</Link>
                        </li>
                        <li>
                            <Link to={'/hse'} className='hover:text-amber-500 transition-all cursor-pointer'>HSE</Link>
                        </li>
                        <li>

                            <Link to={'/contact'} className='hover:text-amber-500 transition-all cursor-pointer'>Contact</Link>
                        </li>
                    </ul>
                    <div className='text-white'>
                        <Link to={'/contact'} className='px-4 py-2 cursor-pointer hover:bg-[#f98d06] text-medium font-medium transition-all border-white rounded-full border-2 '>Get A Quote</Link>
                    </div>
                </div>
                <button className='lg:hidden text-4xl text-white' onClick={() => setSidebarOpen(true)}> <GiHamburgerMenu className='text-4xl lg:hidden text-white' /> </button>
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            </nav>
        </header>
    )
}

export default Header
