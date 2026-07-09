import React from 'react';
import FloatingCardsLeft from '../assets/cta/Cards Round (2).png';
import FloatingCardsRight from '../assets/cta/Cards Round (3).png';

export default function CTA() {
  return (
    <section className="w-full bg-[#FACC15] relative overflow-hidden h-[654px] sm:h-[500px] lg:h-[598px] flex justify-center items-center">
      <img 
        src={FloatingCardsLeft} 
        alt="" 
        className="absolute left-0 top-0 h-full w-auto pointer-events-none select-none hidden sm:block object-contain object-left z-0"
      />
      <img 
        src={FloatingCardsRight} 
        alt="" 
        className="absolute right-0 top-0 h-full w-auto pointer-events-none select-none hidden sm:block object-contain object-right z-0"
      />
      <div className="absolute inset-0 w-full h-full block sm:hidden pointer-events-none z-0">
        <img 
          src={FloatingCardsLeft} 
          alt="" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[361px] h-[167.12px] object-contain" 
        />
        <img 
          src={FloatingCardsRight} 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[353px] h-[195.17px] object-contain" 
        />
      </div>
      <div className="w-full max-w-[340px] sm:max-w-[1280px] px-4 sm:px-12 relative z-10 flex flex-col items-center text-center justify-center">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[48px] font-black tracking-tight text-[#111827] leading-[1.2] max-w-[290px] sm:max-w-none">
          Join a world of learning
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#111827] font-medium max-w-[280px] sm:max-w-[540px] leading-relaxed opacity-90">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. 
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <div className="mt-6">
          <button 
            className="px-8 py-3.5 bg-[#EA580C] text-white font-bold text-sm sm:text-base rounded-[8px] hover:bg-orange-700 transition-colors shadow-[0px_4px_10px_rgba(234,88,12,0.2)] active:scale-[0.98] pointer-events-auto"
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
}