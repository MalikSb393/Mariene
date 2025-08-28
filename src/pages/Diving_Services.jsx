import React from 'react'
import Hero from '../components/Hero'
import img1 from '../assets/diving/1.webp'
import img2 from '../assets/diving/2.webp'
import img3 from '../assets/diving/3.webp'
import img4 from '../assets/diving/4.webp'
import img5 from '../assets/diving/5.webp'
import img6 from '../assets/diving/6.webp'
import img7 from '../assets/diving/7.webp'
import img8 from '../assets/diving/8.webp'
import img9 from '../assets/diving/9.webp'
import img10 from '../assets/diving/10.webp'
import img11 from '../assets/diving/11.webp'
import img12 from '../assets/diving/12.webp'
import img13 from '../assets/diving/13.webp'
import img14 from '../assets/diving/14.webp'
import img16 from '../assets/diving/16.webp'
import img17 from '../assets/diving/17.webp'
import img18 from '../assets/diving/18.webp'
import ServiceSection from '../components/ServiceSection'

const Diving_Services = () => {
    return (
        <div>
            <Hero Name={'Diving Services'} />
            <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Diving Services</h1>
                <p className='text-center text-slate-600 py-4 '>IACS Class (ABS, BV, DNV, LR & RINA) Approved UWILD Surveys by divers & ROV of Vessel & MODUs.</p>
                <p className='text-center text-slate-600'>General Underwater inspection and surveys.</p>
                <p className='text-center text-slate-600'>Hull inspection and surveys.</p>
                <p className='text-center text-slate-600'>Pre & Post Charter Inspections.</p>
                <p className='text-center text-slate-600'>Docking & undocking.</p>
                <p className='text-center text-slate-600'>Thruster and rudder inspection.</p>
                <p className='text-center text-slate-600'>Propeller inspection.</p>
                <p className='text-center text-slate-600'>Tail shaft survey.</p>
                <p className='text-center text-slate-600'>Epoxy coating & repairs.
                </p>
                <p className='text-center text-slate-600'>Propeller shaft bearing measurements.
                </p>
                <p className='text-center text-slate-600'>Rudder pintle clearance measurements.
                </p>
                <p className='text-center text-slate-600'>Hull cleaning.
                </p>
                <p className='text-center text-slate-600'>Propeller polishing.
                </p>
                <p className='text-center text-slate-600'>Propeller polishing.
                </p>
                <p className='text-center text-slate-600'></p>
                <p className='text-center text-slate-600 mt-20'>Anode inspection & installation.
                </p>
                <p className='text-center text-slate-600'>Sea chest cleaning and maintenance.
                </p>
                <p className='text-center text-slate-600'>Underwater Seachest Leakages blanking and unblanking.
                </p>
                <p className='text-center text-slate-600'>Towing and boat lifting services.
                </p>
                <p className='text-center text-slate-600'>Fouled Propellers & Thrusters clearance.
                </p>
                <p className='text-center text-slate-600'>MODUs Spud Legs Inspections.
                </p>
                <p className='text-center text-slate-600'>Hull UT measurements.
                </p>
                <p className='text-center text-slate-600'>Underwater Cutting & Welding.
                </p>
                <p className='text-center text-slate-600'>UHP Water Jetting.
                </p>
                <p className='text-center text-slate-600'>Seabed Survey.
                </p>
                <p className='text-center text-slate-600'>Pipeline & Cable laying Support Services
                </p>
                <p className='text-center text-slate-600'>Pipeline laying Support Services.
                </p>
                <p className='text-center text-slate-600'>Grit Blasting & Coating.
                </p>
                <p className='text-center text-slate-600'>Coating thickness measurement.
                </p>
                <p className='text-center text-slate-600'>Concrete Block Installation
                </p>



            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[230px] rounded-md' src={img1} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img2} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img3} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img4} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img5} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img6} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img7} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img8} alt="diving image" />
                 <img className='lg:h-[230px] rounded-md' src={img9} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img10} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img11} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img12} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img13} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img14} alt="diving image" />
                
                <img className='lg:h-[230px] rounded-md' src={img16} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img17} alt="diving image" />
                <img className='lg:h-[230px] rounded-md' src={img18} alt="diving image" />
            </div>
             <ServiceSection heading={'Other Services'} />

        </div>
    )
}

export default Diving_Services
