import React from 'react'
import Hero from '../components/Hero'
import cntc from '../assets/contact.jpg'
const Contact = () => {
  return (
    <div>
      <Hero Name={'Contact'}/>
      <section id='CU' className='flex flex-col lg:flex-row px-5 lg:px-10 my-5 lg:h-[80vh] items-center gap-5'>
              <div className='lg:w-1/2 '>
                <img className='lg:h-[80vh] rounded-md' src={cntc} alt="image" />
              </div>
              <div className='lg:w-1/2 lg:h-[80vh] p-6 rounded-md shadow-sm shadow-gray-400 '>
      
                
                  <h3 className="text-sm font-semibold text-gray-700 uppercase">
                    To Become a Client
                  </h3>
                  <h2 className="text-2xl font-bold text-blue-600 mt-1 mb-2">
                    Ready to Get Started?
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Please, fill the form to get a response. After processing the data, a
                    personal manager will contact you.
                  </p>
      
                  {/* Form */}
                  <form className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email *"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Phone *"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Subject *"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea
                      placeholder="Message..."
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        What is 5 + 10?
                      </label>
                      <input
                        type="text"
                        placeholder="Enter chapcha"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 cursor-pointer text-white rounded-full py-3 font-semibold text-sm hover:bg-blue-700 transition"
                    >
                      SUBMIT NOW
                    </button>
                  </form>
                
      
              </div>
      
            </section>
            <div className=' my-8 w-full h-[500px]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.1465446992847!2d39.189818574253586!3d21.50197917135913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfac73fdc02b%3A0x54afc4b795917a65!2zSkFCQjc3MTEsIDc3MTEgQWwgTXVuaXJhaCwgNTQ4OdiMINit2Yog2KfZhNio2LrYr9in2K_ZitipINin2YTYtNix2YLZitip2IwgSmVkZGFoIDIyMjM1LCBTYXVkaSBBcmFiaWE!5e0!3m2!1sen!2s!4v1756362467175!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  )
}

export default Contact
