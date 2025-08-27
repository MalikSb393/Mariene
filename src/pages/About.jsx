import React from 'react'
import Hero from '../components/Hero'
import about from '../assets/about .webp'
import { GiArrowScope } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
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
                    <h2 className='secondary text-3xl lg:text-4xl font-bold'>Welcome to Alphamgcc</h2>
                    <h3 className='primary font-bold text-2xl lg:text-3xl'>Alphamgcc</h3>
                    <p className='text-slate-500 mt-3 font-medium'>We, TAA Pro Marine, are a corporate entity with extensive experience in diving, marine construction support and management, and logistics. Our operational and management expertise has been built on over fifteen years of success, beginning with our parent company, Aqua Marine, in Alexandria, and continuing to expand through TAA Contracting in India.</p>
                    <p className='text-slate-500 font-medium'>We serve numerous major companies across the Middle East, and our multiple joint operations agreements have enhanced our strength and knowledge. This collaborative approach fosters a spirit of cooperation and experience sharing.We are committed to excellence and quality, promoting successful, flawless work through our integrated partnerships with various companies in both the public and private sectors. Our focus is on long-term planning, mutual prosperity, and respect for the common good. On behalf of our Board of Directors, we pledge to provide impeccable quality and excellent services, and we are always here to support you.</p>

                </div>
                <div className='lg:w-1/2'>
                    <img className='rounded-md' src={about} alt="Image" />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 p-7 lg:w-1/2 pb-5 lg:pb-10 lg:pl-20 items-center'>
                <div className='rounded-md p-4 lg:h-40 lg:w-1/2 flex items-center gap-4 bg-blue-100'>
                    <div className='lg:text-5xl text-3xl hover:text-amber-600 transition-all cursor-pointer'><GiArrowScope /></div>
                    <div>
                        <h4 className='lg:text-2xl text-lg font-bold text-blue-950'>Our Mission</h4>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>Our Mission is to provide services and solutions to all of our clients which are cost effective yet of world-class value and quality.</p>
                    </div>
                </div>
                <div className='rounded-md p-4 lg:h-40 lg:w-1/2 flex items-center gap-4 bg-blue-100'>
                    <div className='lg:text-5xl text-3xl hover:text-amber-600 transition-all cursor-pointer'><SlLike /></div>
                    <div>
                        <h4 className='lg:text-2xl text-lg font-bold text-blue-950'>Our Vision</h4>
                        <p className='font-medium lg:text lg:text-sm text-xs py-2 text-slate-600'>Our Vision is to become the leader in our industry providing asset integrity solutions with a difference</p>
                    </div>
                </div>

            </div>
                <button className='flex items-center gap-3 text-white font-medium ml-7 lg:ml-20 my-5 text-xl px-5 py-3 bg-red-500 hover:bg-red-600 rounded-full transition-all'>Explore More <span><FaArrowRight/></span> </button>

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
