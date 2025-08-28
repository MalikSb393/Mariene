import React from 'react'
import Hero from '../components/Hero'
import img1 from '../assets/fenders/1.webp'
import img2 from '../assets/fenders/2.webp'
import img3 from '../assets/fenders/3.webp'
import ServiceSection from '../components/ServiceSection'
const Marine_Fenders = () => {
    return (
        <div>
            <Hero Name={'Marine Fenders'} />
            <div className='lg:px-20 px-3 bg-slate-50 py-10'>

                <h1 className='lg:text-4xl text-2xl text-center font-bold primary'>Marine Fenders</h1>
                <p className='text-center text-slate-600 py-4 '>Alphamgcc  sister Company is having its fenders manufacturing facilities in Dammam, Saudi Arabia and below is brief information primarily intended for users with some experience of fender selection.</p>
                <p className='text-center text-slate-600'>Alphamgcc is always happy to assist with all aspects of fender design, please contact us for further information.</p>
                <p className='text-center text-slate-600'>In addition to fenders manufacturing, Alphamgcc has the full-scale capabilities and practical experience for fenders installation and old fenders removal including recovery from Seabed.</p>


            </div>
            <div className='lg:p-20 flex  flex-wrap justify-between gap-7 p-4'>
                <img className='lg:h-[270px] rounded-md' src={img1} alt="Fenders image" />
                <img className='lg:h-[270px] rounded-md' src={img2} alt="Fenders image" />
                <img className='lg:h-[270px] rounded-md' src={img3} alt="Fenders image" />

            </div>
            <ServiceSection heading={'Other Services'} />
        </div>
    )
}

export default Marine_Fenders
