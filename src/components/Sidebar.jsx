import React from 'react'
import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import logo from '../assets/logo.jpeg'
import logo1 from '../assets/logo11.png'

import { Link } from 'react-router-dom';
const Sidebar = ({ open, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    
  return (
     <>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 w-fit h-full bg-black overflow-y-scroll pb-5  text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-1 border-b border-gray-700">
          <img className=' h-10' src={logo1} alt="logo" />
          <button className="text-3xl" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 space-y-4">
          <Link   onClick={onClose}  to={'/'} className="hover:text-blue-400 cursor-pointer">Home</Link>
          <Link  onClick={onClose} to={'/about'} className="hover:text-blue-400 cursor-pointer">About us</Link>
          <Link  onClick={onClose} to={'/expertise'} className="hover:text-blue-400 cursor-pointer">Our Expertise</Link>


          {/* Dropdown inside Sidebar */}
          <li>
            <button
              className="flex justify-between items-center w-full hover:text-blue-400"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services + services modes
              <div>
              <FiChevronDown
                className={`transform transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
              </div>
            </button>
            {servicesOpen && (
              <ul className="mt-2 ml-2 bg-gray-800 rounded">
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/conventional_Services'}>Conventional & Advanced NDT Services</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/industrial_Services'}>Industrial Services</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/marine_Fenders'}>Marine Fenders</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/diving_Services'}>Diving Services</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/rov_Inspections'}>ROV Inspections</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/marine_Craft'} >Marine Craft</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/marine_Salvage'}>Marine Salvage Services</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/rope_Access'}>Rope Access & Drone Services</Link></li>
               <li onClick={onClose} className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"><Link to={'/survey_Services'}>Survey Services</Link></li>
              </ul>
            )}
          </li>

          <Link onClick={onClose} to={'/clients'} className="hover:text-blue-400 cursor-pointer">Our Clients</Link>
          <Link onClick={onClose} to={'/hse'} className="hover:text-blue-400 cursor-pointer">HSE</Link>
          <Link onClick={onClose} to={'/contact'} className="hover:text-blue-400 cursor-pointer">Contact</Link>
        </ul>

        {/* Quote Button */}
        <div className="px-4 mt-6">
          <Link onClick={onClose} to={'/contact'} className="w-full border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
            Get A Quote
          </Link>
        </div>
      </div>

      {/* Dark Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
    )}
    </>



 )}

export default Sidebar
