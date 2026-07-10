import React, { useState } from 'react';
import LogoColored from '../assets/Logo-colored.png';
import down from '../assets/chevron-down.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-[#C8CBCB]/30 sticky top-0 z-50 flex justify-center">
      {/* Fluid padding keeps everything from breaking on mid-size tablet screens */}
      <div className="w-full max-w-[1440px] h-[96px] px-4 md:px-8 lg:px-[80px] flex items-center justify-between">
        
        {/* ORIGINAL NESTED CONTAINER: Logo & Nav Links grouped on the left */}
        <div className="flex items-center w-full max-w-[666px] h-[48px] justify-between md:justify-start md:gap-[48px]">
          
          <div className="flex flex-shrink-0">
            <img
              src={LogoColored}
              alt="uteach"
              className="h-[32px] w-auto object-contain select-none"
            />
          </div>

          {/* Nav links stay bound directly to the logo container, keeping original orientation */}
          <div className="hidden md:flex items-center justify-between text-sm font-medium text-[#0F172A] w-full max-w-[515px] h-[48px]">
            <a href="#products" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Products</a>
            <a href="#solutions" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Solutions</a>
            <a href="#pricing" className="w-[85px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors">Pricing</a>
            <a href="#resources" className="w-[115px] pt-[12px] pb-[12px] pr-[8px] pl-[8px] text-center hover:text-[#111827] transition-colors flex items-center justify-center gap-1">
              Resources <img src={down} alt="down" className="w-4 h-4 opacity-70 inline-block align-middle ml-1" />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE ACTIONS: Isolated on the right end */}
        <div className="hidden md:flex items-center space-x-5">
          <button className="text-sm font-medium text-gray-600 hover:text-[#111827] transition-colors">
            Log In
          </button>
          <button className="border-2 border-[#111827] text-sm font-bold px-5 py-2.5 text-[#0F172A] rounded-md hover:bg-[#111827] hover:text-white transition-all duration-200">
            Sign Up Now
          </button>
        </div>

        {/* MOBILE BURGER TRIGGER */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#111827] text-2xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {isOpen && (
        <div className="absolute top-[96px] left-0 w-full bg-white border-b border-[#C8CBCB]/30 px-6 py-4 flex flex-col space-y-4 shadow-md md:hidden">
          <a href="#products" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#111827]">Products</a>
          <a href="#solutions" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#111827]">Solutions</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#111827]">Pricing</a>
          <a href="#resources" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#111827]">Resources</a>
          <hr className="border-gray-100" />
          <div className="flex flex-col space-y-3 pt-2">
            <button className="w-full text-center text-sm font-medium text-gray-600 hover:text-[#111827]">Log In</button>
            <button className="w-full text-center border-2 border-[#111827] text-sm font-bold py-2.5 rounded-md text-[#0F172A]">Sign Up Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}