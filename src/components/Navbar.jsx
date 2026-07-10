import React, { useState } from 'react';
import LogoColored from '../assets/Logo-colored.png'
import down from '../assets/chevron-down.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-[#C8C8C8]/30 sticky top-0 z-50 flex justify-center">
      <div className="w-full max-w-[1440px] h-[96px] px-[80px] py-[24px] flex items-center justify-between">
        <div className="flex items-center w-full max-w-[666px] h-[48px] justify-between md:justify-start md:gap-[48px]">
          <div className="flex items-center flex-shrink-0">
            <img 
                src={LogoColored} 
                alt="uteach" 
                className="h-[32px] w-auto object-contain select-none" 
            />
            </div>
          <div className="hidden md:flex items-center w-full max-w-[515px] h-[48px] justify-between text-sm font-medium text-[#0F172A]">
            <a href="#products" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Products</a>
            <a href="#solutions" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Solutions</a>
            <a href="#pricing" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Pricing</a>
            <a href="#resources" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors flex items-center justify-center gap-1">
              Resources <img src={down} alt='down' className="w-4 h-4 opacity-70 inline-block align-middle ml-1"/>
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-sm font-medium text-gray-600 hover:text-[#111827] transition-colors">
            Log In
          </button>
          <button className="border-2 border-[#111827] text-sm font-bold px-5 py-2.5 text-[#0F172A] rounded-md hover:bg-[#111827] hover:text-white transition-all duration-200">
            Sign Up Now
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600  hover:text-[#111827] text-2xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[96px] left-0 w-full bg-white border-b border-[#C8C8C8]/30 px-6 py-4 flex flex-col space-y-4 shadow-md md:hidden">
          <a href="#products" className="text-sm font-medium text-gray-600" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#solutions" className="text-sm font-medium text-gray-600" onClick={() => setIsOpen(false)}>Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#resources" className="text-sm font-medium text-gray-600" onClick={() => setIsOpen(false)}>Resources</a>
          <hr className="border-gray-100" />
          <div className="flex flex-col space-y-3 pt-2">
            <button className="w-full text-center text-sm font-medium text-gray-600 py-2">Log In</button>
            <button className="w-full border-2 border-[#111827] text-sm font-bold py-2.5 rounded-md text-center">Sign Up Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}