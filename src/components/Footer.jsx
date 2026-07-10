import React from 'react';
import FooterLogo from '../assets/Fotter.png';
import WorldLogo from '../assets/world.png';
import AccessibilityLogo from '../assets/accessibility.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-white pt-16 pb-8 flex flex-col items-center">
      <div className="w-full max-w-[1280px] px-6 sm:px-12 flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-row lg:justify-between gap-10 pb-12 border-b border-gray-800">
        <div className="lg:w-auto min-w-[120px]">
          <img src={FooterLogo} alt="uteach" className="h-[32px] w-auto object-contain" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Product</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#E2E8F0] font-medium">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Overview</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Browse</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#F3E8FF] text-[#6B21A8] border border-[#701A75] rounded uppercase tracking-wide">BETA</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Solutions</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#E2E8F0] font-medium">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Brainstorming</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Ideation</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Wireframing</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Research</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Resources</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#E2E8F0] font-medium">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Tutorials</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">FAQs</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Support</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#E2E8F0] font-medium">
            <li><a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Developers</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Integrations</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Company</h4>
          <ul className="flex flex-col gap-3 text-sm text-[#E2E8F0] font-medium">
            <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Events</a></li>
            <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Request Demo →</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-[1280px] px-6 sm:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-medium">       
        <div className="text-center sm:text-left">
          uteach @ 2023. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
          <button className="hover:text-gray-400 flex items-center gap-1 transition-colors"><img src={WorldLogo} alt="" className='w-4 h-4 object-contain' /><span>EN</span></button>
          <button className="hover:text-gray-400 flex items-center gap-1 transition-colors"><span>€</span><span>EUR</span></button>
          <button className="hover:text-gray-400 flex items-center gap-1 transition-colors"><img src={AccessibilityLogo} alt="" className='w-4 h-4 object-contain' /></button>
        </div>

      </div>
    </footer>
  );
}