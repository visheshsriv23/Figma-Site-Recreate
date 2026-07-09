import React from 'react';
import UnderlineVector from '../assets/feature-detail/Vector 14.png';

export default function Hero() {
  return (
    <section className="w-full bg-[#F9FAFB] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] min-h-[704.53px] px-6 sm:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center py-12 lg:py-0">
        <div className="w-full max-w-[575.4px] flex flex-col justify-center space-y-8">
          <div className="flex flex-col space-y-4">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black tracking-tight text-[#111827] leading-[1.15] text-left">
            <span className="relative inline-block mr-2">
                Teach
                <img 
                src={UnderlineVector} 
                alt="" 
                className="absolute -bottom-[2px] left-0 w-[110px] sm:w-[190.5px] max-w-none h-auto object-contain pointer-events-none select-none"
                />
            </span> 
            students <br /> worldwide
            </h1>
    
            <p className="text-[#4B5563] text-base lg:text-lg leading-relaxed">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 mt-6 w-full">
            <button className="px-5 py-3.5 sm:w-[239px] sm:h-[64px] bg-[#EA580C] text-white font-bold text-sm sm:text-base rounded-[8px] hover:bg-orange-700 transition-colors whitespace-nowrap">
                Sign Up Now
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-3.5 sm:w-[178px] sm:h-[56px] text-[#2563EB] font-bold text-sm sm:text-base whitespace-nowrap">
                <span className="w-5 h-5 flex items-center justify-center rounded-full border border-[#2563EB] text-[10px]">▶</span>
                View Demo
            </button>
            </div>
          <div className="pt-6">
            <img 
              src="/src/assets/press.png" 
              alt="Trusted by leading companies badges layout" 
              className="w-full max-w-[575.4px] h-auto object-contain opacity-80" 
            />
          </div>
        </div>
        <div className="w-full max-w-[624.6px] flex justify-center lg:justify-end">
          <img 
            src="/src/assets/group 50.png" 
            alt="Students interface dashboard visual compilation graphic" 
            className="w-full h-auto max-h-[544.53px] object-contain drop-shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
}