
import Slider from '../components/Slider'
import uperIMG from '../assets/uperimg.webp'
import vector from '../assets/vector-1.webp'
import lowerimg from '../assets/lowerimg.webp'
import lowertop from '../assets/lowertop.webp'
import { FaArrowRight } from "react-icons/fa";
import ServiceSection from '../components/ServiceSection'
{/*expertise images*/ }
import exp1 from '../assets/Expertise_img/exp1.webp'
import exp2 from '../assets/Expertise_img/exp2.webp'
import exp3 from '../assets/Expertise_img/exp3.webp'
import exp4 from '../assets/Expertise_img/exp4.webp'
{/*clients images*/ }
import client1 from '../assets/Clients-Img/cli1.webp'
import client2 from '../assets/Clients-Img/cli2.webp'
import client3 from '../assets/Clients-Img/cli3.webp'
import client4 from '../assets/Clients-Img/cli4.webp'
import client5 from '../assets/Clients-Img/cli5.webp'
import client6 from '../assets/Clients-Img/cli6.webp'
import client7 from '../assets/Clients-Img/cli7.webp'
import client8 from '../assets/Clients-Img/cli8.webp'
{/*icon images*/ }
import star from '../assets/icons/starIcon.webp'
import hand from '../assets/icons/handIcon.webp'
import msg from '../assets/icons/msgicon.webp'
import brain from '../assets/icons/brainicon.webp'

const Home = () => {
  return (
    <div>
      <Slider />
      {/* About Section */}
      <section className='container w-full flex-col lg:flex-row flex gap-10 pt-10 mx-auto px-5 lg:px-16'>
        <div className='lg:w-1/2 w-full '>
          <span className='font-bold text-2xl lg:text-4xl'>Welcome to Alphamgcc</span>
          <h5 className='primary pt-2  font-md text-lg lg:text-xl'>About Alphamgcc</h5>
          <p className='pb-7'>We, TAA Pro Marine, are a corporate entity with extensive experience in diving, marine construction support and management, and logistics. Our operational and management expertise has been built on over fifteen years of success, beginning with our parent company, Aqua Marine, in Alexandria, and continuing to expand through TAA Contracting in India.</p>
          <p className='pb-7'>We serve numerous major companies across the Middle East, and our multiple joint operations agreements have enhanced our strength and knowledge. This collaborative approach fosters a spirit of cooperation and experience sharing</p>
          <p className=''>We are committed to excellence and quality, promoting successful, flawless work through our integrated partnerships with various companies in both the public and private sectors. Our focus is on long-term planning, mutual prosperity, and respect for the common good.</p>
          <p className='pb-3'>On behalf of our Board of Directors, we pledge to provide impeccable quality and excellent services, and we are always here to support you.</p>
          <button className='bg-primary py-4 text-white  font-medium text-lg cursor-pointer hover:animate-pulse px-10 rounded-md'>Read more</button>
        </div>
        <div className='lg:w-1/2 w-full '>
          <img className='p-2' src={uperIMG} alt="Marine IMG" />

          <img className='pt-3 ' src={vector} alt="vector" />
          <div className=' relative w-[87%] bottom-30 left-14'>
            <img className='rounded-md' src={lowerimg} alt="lower" />
            <img className='absolute w-[70%] lg:w-fit -top-12 rounded-md right-10 lg:right-30' src={lowertop} alt="lower top" />
          </div>

        </div>
      </section>
      {/* Service Section */}
      <ServiceSection heading={'Specialist Logistics Services'} />
      {/* expertise section */}
      <section className='bg-[#002e4d] p-10'>
        <div className='font-semibold text-3xl text-center secondary '>Our Expertise</div>
        <div className='p-10  grid grid-cols-4'>
          <div className='bg-[#00c2ff] h-[400px] cursor-pointer hover:bg-blue-500 transition-all rounded-md w-[280px]'>
            <div className='h-[200px] py-6 px-2'>
              <img className='h-full rounded-md' src={exp1} alt="expertise image" />
            </div>
            <div className='px-5'>
              <h3 className='font-bold text-xl py-1 text-white'>Ship Husbandry</h3>
              <p className='text-white font-medium'>Structural Inspections and Assessments: The team of certifie...</p>
              <button className='flex items-center gap-2 px-3 py-1 my-2 hover:scale-105 cursor-pointer transition-all rounded-full bg-white text-lg font-medium'>Read More <FaArrowRight /></button>
            </div>
          </div>
          <div className='bg-[#00c2ff] cursor-pointer hover:bg-blue-500 transition-all  h-[400px] rounded-md w-[280px]'>
            <div className='h-[200px] rounded-md py-6 px-2'>
              <img className='h-full rounded-md' src={exp2} alt="expertise image" />
            </div>
            <div className='px-5'>
              <h3 className='font-bold text-xl py-1 text-white'>Conventional and Advanced NDT Services</h3>
              <p className='text-white font-medium'>Structural Inspections and Assessments: The team of certifie...</p>
              <button className='flex items-center gap-2 px-3 py-1 my-2 hover:scale-105 cursor-pointer transition-all rounded-full bg-white text-lg font-medium'>Read More <FaArrowRight /></button>
            </div>
          </div>
          <div className='bg-[#00c2ff] h-[400px] cursor-pointer hover:bg-blue-500 transition-all  rounded-md w-[280px]'>
            <div className='h-[200px] py-6 px-2'>
              <img className='h-full rounded-md' src={exp3} alt="expertise image" />
            </div>
            <div className='px-5'>
              <h3 className='font-bold text-xl py-1 text-white'>Subsea and Marine</h3>
              <p className='text-white font-medium'>Structural Inspections and Assessments: The team of certifie...</p>
              <button className='flex items-center gap-2 px-3 py-1 my-2 hover:scale-105 cursor-pointer transition-all rounded-full bg-white text-lg font-medium'>Read More <FaArrowRight /></button>
            </div>
          </div>
          <div className='bg-[#00c2ff] h-[400px] cursor-pointer hover:bg-blue-500 transition-all  rounded-md w-[280px]'>
            <div className='h-[200px] py-6 px-2'>
              <img className='h-full rounded-md' src={exp4} alt="expertise image" />
            </div>
            <div className='px-5'>
              <h3 className='font-bold text-xl py-1 text-white'>Rope Access and Drone Service</h3>
              <p className='text-white font-medium'>Structural Inspections and Assessments: The team of certifie...</p>
              <button className='flex items-center gap-2 px-3 py-1 my-2 hover:scale-105 cursor-pointer transition-all rounded-full bg-white text-lg font-medium'>Read More <FaArrowRight /></button>
            </div>
          </div>

        </div>
      </section>
      {/* Experience section */}
      <section className='bg-white p-10'>
        <div className='bg-primary p-15 rounded-tl-[100px] rounded-br-[100px] mx-10'>
          <div className='w-4/5 mx-auto'>

            <h3 className='font-bold text-white pb-5 text-4xl text-center'>Experienced Trusted Industry Leading</h3>
            <p className='font-medium pb-2 text-lg text-white text-center'>We perform tasks for clients with a very broad range of assets including: potable water systems, oil and gas installations, seawater desalination plants, jetties, pontoons, bridges, walls and dams, pipelines, water tanks, mines, marinas, wharfs, docks, hulls of ships, underwater structures, and eco-marine environments.</p>
            <p className='font-medium pb-2 text-lg text-white text-center'>Our diving services are available to both the Inshore and Offshore sectors alike.</p>
            <p className='font-medium pb-2 text-lg text-white text-center'>We offer a wide range of underwater works. Contact TAA Pro Marine today, we will suit any of your needs!!!</p>
            <p className='font-medium pb-2 text-lg text-white text-center'>Underwater Inspection Vancouver area services are now available.</p>
          </div>
        </div>

      </section>
      {/* clients section */}
      <section className='bg-white p-10'>
        <h3 className='text-center font-bold text-5xl'>Our Clients</h3>
        <div className='p-15 grid grid-cols-4 gap-5'>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client1} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client2} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client3} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client4} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client5} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client6} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client7} alt="client image" />
          </div>
          <div className='w-[250px] flex justify-center items-center bg-white p-2 shadow-lg rounded-md'>
            <img src={client8} alt="client image" />
          </div>
        </div>
      </section>
      {/* why us section */}
      <section className=' px-10'>
        <h3 className='font-bold text-4xl text-center secondary'>Why Choose Alphamgcc</h3>
        <div className='p-15 grid grid-cols-4'>
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

export default Home
