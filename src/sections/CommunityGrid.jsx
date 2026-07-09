import React from 'react';
import AeroplaneIcon from '../assets/community/Aeroplane Icon.png';
import GridCol1 from '../assets/community/Col (1).png';
import GridCol2 from '../assets/community/Col (2).png';
import GridCol3 from '../assets/community/Col (3).png';
import GridCol4 from '../assets/community/Col (4).png';

export default function CommunityGrid() {
  return (
    <section className="w-full bg-white flex justify-center overflow-hidden py-12 lg:py-[80px]">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[80px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left max-w-[540px] order-1 lg:order-2">  
            <div className="w-full">
                <h2 className="text-[32px] sm:text-[40px] font-black tracking-tight text-[#111827] leading-[1.15]">
                Meet{' '}
                <span className="relative inline-block">
                    international
                    <img 
                    src={AeroplaneIcon} 
                    alt="" 
                    className="absolute -top-[40px] lg:-top-[52px] right-[-12px] w-[44px] lg:w-[64px] h-[44px] lg:h-[64px] pointer-events-none object-contain"
                    />
                </span>{' '}
                <br />
                students & teachers
                </h2>
            </div>
            <p className="mt-6 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo 
                senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam 
                facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, 
                faucibus aenean lorem faucibus integer.
            </p>
            <div className="mt-8">
                <a 
                href="#explore" 
                className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors group gap-1"
                >
                Explore teachers and students{' '}
                <span className="transform group-hover:translate-x-1 transition-transform duration-150">→</span>
                </a>
            </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-[520px] items-center">
            <div className="pt-8">
              <img src={GridCol1} alt="Community collage 1" className="w-full h-auto object-contain" />
            </div>
            <div className="pb-4">
              <img src={GridCol2} alt="Community collage 2" className="w-full h-auto object-contain" />
            </div>
            <div className="pt-4">
              <img src={GridCol3} alt="Community collage 3" className="w-full h-auto object-contain" />
            </div>
            <div className="pt-10">
              <img src={GridCol4} alt="Community collage 4" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}