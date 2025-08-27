import React from 'react'
import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

const Sidebar = ({ open, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    
    const menuItems = [
      "Conventional & Advanced NDT Services",
      "Industrial Services",
      "Marine Fenders",
      "Diving Services",
      "ROV Inspections",
      "Marine Craft",
      "Marine Salvage Services",
      "Rope Access & Drone Services",
      "Survey Services",
    ];
  return (
     <>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 w-fit h-full bg-black  text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-xl font-bold">TAA</span>
          <button className="text-2xl" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About us</li>

          {/* Dropdown inside Sidebar */}
          <li>
            <button
              className="flex justify-between items-center w-full hover:text-blue-400"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services+Our Expertise
              <FiChevronDown
                className={`transform transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <ul className="mt-2 ml-2 bg-gray-800 rounded">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-700 border-b border-gray-600 last:border-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="hover:text-blue-400 cursor-pointer">Our Clients</li>
          <li className="hover:text-blue-400 cursor-pointer">HSE</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Quote Button */}
        <div className="px-4 mt-6">
          <button className="w-full border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
            Get A Quote
          </button>
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
