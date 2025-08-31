import React from 'react'
import Hero from '../components/Hero'
import about from '../assets/about .webp'
import { GiArrowScope } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { FaLowVision } from "react-icons/fa";
{/*icon images*/ }
import star from '../assets/icons/starIcon.webp'
import hand from '../assets/icons/handIcon.webp'
import msg from '../assets/icons/msgicon.webp'
import brain from '../assets/icons/brainicon.webp'
const About = () => {
    return (
        <div>
            <Hero Name={'About'} />
            <div className='lg:p-20 p-3 flex flex-col lg:flex-row items-center gap-6'>
                <div className='lg:w-1/2'>
                    <h2 className='secondary text-3xl lg:text-4xl font-bold'>Welcome to Alpha Group</h2>
                    <h3 className='primary font-bold text-2xl lg:text-3xl'>Alpha Group</h3>
                    <p className='text-slate-500 text-sm mt-3 font-medium'>Company is a leading and well renowned Engineering company of
                        Pakistan. Extended in KSA from 2010 Under the name of Muhammad
                        Abdul Rehman HashimSindi Est. providing CuttingEdge Services in
                        Marine,Civil, Modification, Erection, to Industries Locally and Excellence in
                        various Industry, Food Manufacturing.</p>
                    <p className='text-slate-500 text-sm font-medium'>Co.’s main business is to do contracts of Mechanical works, Fabrications,
                        Installation, Design, Maintenance and Steel Structure works, HVAC
                        Installation and Complete Maintenance of (CRAC Unit, Cold store machines
                        , Chiller, Packageunit, Duct Split and Free Standing units) Plumbing,
                        Electrical works, cable pulling, Electrical Termination, Motor rewinding, and
                        Compressor Rewinding/overhauling. We are also specialize in Ammonia
                        Chiller.</p>
                    <p className='text-slate-500 text-sm font-medium'>Co.’shas the availability of technical work force of all trades of MEP. A wellestablished admin & personal department keep track of all Manpower of
                        multi-disciplinary categories. The success in only through Quality of work
                        force, Supervisory skill, Engineering Expertise and active middle and top
                        management.</p>
                    <p className="text-slate-500 text-sm font-medium">
                        <span className='text-lg font-bold'>The company</span> is well equipped with modern tools & equipment.
                        Moreover, the enterprise tales special pride in its latest quality standards
                        to the entire satisfaction of our valued clients. Emphasison quality work
                        atall stages of design, planningand installation jobs is the hallmark of our
                        company for which our team enjoys valuable reputation in the public as
                        well as private sectors.
                    </p>

                </div>
                <div className='lg:w-1/2'>
                    <img className='rounded-md' src={about} alt="Image" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row w-full gap-5 p-7  pb-5 lg:pb-10  items-center'>
                <div className='rounded-md p-4  flex flex-col lg:w-2xl items-center gap-4 bg-blue-100'>
                    <div className='lg:text-5xl text-3xl hover:text-amber-600 transition-all cursor-pointer'><GiArrowScope /></div>
                    <div>
                        <h4 className='lg:text-2xl text-lg text-center font-bold text-blue-950'>Our Mission</h4>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>Our To provide our customers with
                            quality, cost effective and reliable
                            solutionas an MEP and EPC
                            contractor In Power Sectors,
                            Government Plants, Ro Plant
                            Commercial and Industrial
                            Services in the Kingdom.</p>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>Solar Panel Power Projects. </p>
                    </div>
                </div>
                <div className='rounded-md px-4 py-4 lg:py-6 flex-col lg:w-2xl  flex items-center gap-4 bg-blue-100'>
                    <div className='lg:text-5xl text-3xl hover:text-amber-600 transition-all cursor-pointer'><FaLowVision /></div>
                    <div>
                        <h4 className='lg:text-2xl text-lg text-center font-bold text-blue-950'>Our Vision</h4>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>To become a World-class
                            engineering, manufacturing and
                            MEP company operating
                            internationally.</p>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>Innovations, Modification, Erection
                            and Commissioning of projects
                            with using High technology. </p>
                    </div>
                </div>
                <div className='rounded-md p-4 flex-col lg:w-2xl  flex items-center gap-4 bg-blue-100'>
                    <div className='lg:text-5xl text-3xl hover:text-amber-600 transition-all cursor-pointer'><SlLike /></div>
                    <div>
                        <h4 className='lg:text-2xl text-lg text-center font-bold text-blue-950'>Our Purpose</h4>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>To bring prosperity and well being to
                            our stake holders and society at by
                            adding value to engineering,
                            technology and management.</p>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>To Facilitate the client and Contractors
                            towards the easy channels and techno
                            commercial Relief.</p>
                    </div>
                </div>

            </div>
            <button className='flex items-center gap-3 text-white font-medium ml-7 lg:ml-20 my-5 text-xl px-5 py-3 bg-red-500 hover:bg-red-600 rounded-full transition-all'>Explore More <span><FaArrowRight /></span> </button>

            {/**Why us */}
            <section className=' lg:px-10'>
                <h3 className='font-bold lg:text-4xl text-3xl text-center secondary'>Why Choose Alphamgcc</h3>
                <div className='p-15 lg:grid flex flex-col items-center gap-5 lg:gap-0 lg:grid-cols-4'>
                    <div className='shadow-lg hover:bg-[#00c2ff] transition-all cursor-pointer shadow-gray-300 h-[280px] w-[270px] rounded-md border-t-2 border-t-[#00c2ff]'>
                        <img className='w-15 mx-auto py-4' src={star} alt="icon" />
                        <h4 className='font-bold text-xl text-center'>Professionalism</h4>
                        <p className='p-6 text-slate-600 text-md'>We ensure our organization is managed with professionalism.</p>
                    </div>
                    <div className='shadow-lg hover:bg-[#00c2ff] transition-all cursor-pointer shadow-gray-300 h-[280px] w-[270px] rounded-md border-t-2 border-t-[#00c2ff]'>
                        <img className='w-15 mx-auto py-4' src={msg} alt="icon" />
                        <h4 className='font-bold text-xl text-center'>Client Satisfactory Services</h4>
                        <p className='p-6 text-slate-600 text-md'>
                            We ensure our clients receive what we promise as a quality based client satisfactory services.</p>
                    </div>
                    <div className='shadow-lg hover:bg-[#00c2ff] transition-all cursor-pointer shadow-gray-300 h-[280px] w-[270px] rounded-md border-t-2 border-t-[#00c2ff]'>
                        <img className='w-15 mx-auto py-4' src={hand} alt="icon" />
                        <h4 className='font-bold text-xl text-center'>Medically Fit</h4>
                        <p className='p-6 text-slate-600 text-md'>We ensure our personnel are medically fit at all times , create awareness of illness and precautions.</p>
                    </div>
                    <div className='shadow-lg hover:bg-[#00c2ff] transition-all cursor-pointer shadow-gray-300 h-[280px] w-[270px] rounded-md border-t-2 border-t-[#00c2ff]'>
                        <img className='w-15 mx-auto py-4' src={brain} alt="icon" />
                        <h4 className='font-bold text-xl text-center'>Environment</h4>
                        <p className='p-6 text-slate-600 text-md'>We tailor solutions to meet each project's unique needs, ensuring optimal results and client satisfaction.</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
