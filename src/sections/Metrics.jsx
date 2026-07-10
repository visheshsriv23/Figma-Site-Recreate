import React from 'react';
import HeartIcon from '../assets/metrics/heart-circle-sharp.png';
import DiamondIcon from '../assets/metrics/diamond.png';
import SchoolIcon from '../assets/metrics/school.png';

export default function Metrics() {
  return (
    <section className="w-full bg-[#0F172A] flex justify-center items-center py-16 lg:py-0 lg:h-[373px] border-b border-gray-800">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[80px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[80px]">
        <div className="flex flex-col items-center text-center max-w-[373.33px] w-full group">
          <div className="w-[52px] h-[52px] flex items-center justify-center bg-transparent transition-transform duration-200 group-hover:scale-110">
            <img src={HeartIcon} alt="" className="w-full h-full object-contain" />
          </div>
          <h3 className="mt-4 text-[40px] lg:text-[48px] font-black text-[#FACC15] tracking-tight leading-none">
            195
          </h3>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#FACC15] uppercase tracking-wider">
            user countries
          </p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[373.33px] w-full group">
          <div className="w-[52px] h-[52px] flex items-center justify-center bg-transparent transition-transform duration-200 group-hover:scale-110">
            <img src={DiamondIcon} alt="" className="w-full h-full object-contain" />
          </div>
          <h3 className="mt-4 text-[40px] lg:text-[48px] font-black text-[#FACC15] tracking-tight leading-none">
            1M
          </h3>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#FACC15] uppercase tracking-wider">
            valued teachers
          </p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[373.33px] w-full group">
          <div className="w-[52px] h-[52px] flex items-center justify-center bg-transparent transition-transform duration-200 group-hover:scale-110">
            <img src={SchoolIcon} alt="" className="w-full h-full object-contain" />
          </div>
          <h3 className="mt-4 text-[40px] lg:text-[48px] font-black text-[#FACC15] tracking-tight leading-none">
            17M
          </h3>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#FACC15] uppercase tracking-wider">
            happy students
          </p>
        </div>
      </div>
    </section>
  );
}