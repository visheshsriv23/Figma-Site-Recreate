import React from 'react';
import OrangeBlob from '../assets/app-features/Blob.png';
import VideoMockup from '../assets/app-features/Desktop.png';
import SideIconsColumn from '../assets/app-features/Icons.png';
import UnderlineVector from '../assets/feature-detail/Vector 14.png';

export default function AppFeatures() {
  return (
    <section className="w-full bg-white flex justify-center overflow-hidden py-16 lg:py-[80px] relative">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[80px] grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px] items-center">
        <div className="w-full lg:col-span-5 flex flex-col space-y-[32px] text-left max-w-[544px]">
          <div className="space-y-4">
            <h2 className="text-[36px] sm:text-[44px] font-black tracking-tight text-[#111827] leading-[1.15] z-40">
              An{' '}
              <span className="relative inline-block z-10">
                all-in-one
                <img 
                src={UnderlineVector} 
                alt="" 
                className="absolute -bottom-[7px] left-0 w-[160px] sm:w-[200px] max-w-none h-auto object-contain pointer-events-none select-none -z-10"
                />
              </span>{' '}
              app <br />
              that makes it easier
            </h2>
          </div>
          <ul className="flex flex-col space-y-4 text-sm sm:text-base text-[#0F172A] font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#0F172A] font-bold mt-0.5">✓</span>
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F172A] font-bold mt-0.5">✓</span>
              <span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0F172A] font-bold mt-0.5">✓</span>
              <span>Ullamcorper ornare in et egestas dolor orci.</span>
            </li>
          </ul>
          <div>
            <a 
              href="#more" 
              className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors group gap-1"
            >
              Find more about the app{' '}
              <span className="transform group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>
        </div>
        <div className="w-full lg:col-span-7 relative flex items-center justify-center lg:justify-end min-h-[520px] sm:min-h-[580px] bg-transparent lg:left-[50px]">
          <img 
            src={OrangeBlob} 
            alt="" 
            className="absolute left-[-50px] lg:left-[-100px] top-[140px] w-[320px] sm:w-[440px] lg:w-[506.18px] lg:h-[448.01px] pointer-events-none z-0"
            style={{ transform: 'rotate(-124.64deg)' }}
          />
          <div className="relative w-full max-w-[600px] bg-transparent">
            <img 
              src={SideIconsColumn} 
              alt="" 
              className="absolute -left-[30px] lg:-left-[44px] -top-[16px] w-[60px] lg:w-[139.02px] h-auto z-0 pointer-events-none"
            />
            <div className="w-full aspect-[600/391] rounded-[20px] overflow-hidden relative z-10 bg-transparent">
              <img src={VideoMockup} alt="App mockup preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-[140px] sm:-bottom-[70px] left-[200px] lg:left-[260px] -translate-x-1/2 w-[94%] max-w-[500px] lg:max-w-[560px] grid sm:grid-cols-3 grid-cols-2 gap-3.5 sm:gap-3.5 z-20">
            <div className="bg-white  rounded-[10px] p-2.5 sm:p-3.5 border border-gray-100 shadow-[0px_6px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[200px] sm:min-h-[180px] text-left">
                <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold   bg-purple-50 text-purple-600 rounded-[3px] uppercase tracking-wide">
                    Featured
                </span>
                <h4 className="text-[13px] font-bold text-[#111827] tracking-tight leading-snug line-clamp-2">
                    The map of mathematics
                </h4>
                <p className="text-[12.5px] text-[#475569] font-normal leading-normal line-clamp-3">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae...
                </p>
                </div>
                <button className="w-full text-center py-1 sm:py-1.5 text-[9px] sm:text-[11px] font-bold  text-blue-600 bg-white border border-blue-600 rounded-[4px] hover:bg-blue-50/50 transition-colors mt-2 select-none">
                Take Lesson
                </button>
            </div>
            <div className="bg-white rounded-[10px] p-2.5 sm:p-3.5 border border-gray-100 shadow-[0px_6px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[165px] sm:min-h-[180px] text-left">
                <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold bg-blue-50 text-blue-600  rounded-[3px] uppercase tracking-wide">
                    Popular
                </span>
                <h4 className="text-[13px] font-bold text-[#111827] tracking-tight leading-snug line-clamp-2">
                    Design for how people think
                </h4>
                <p className="text-[12.5px] text-[#475569] font-normal leading-normal line-clamp-3">
                    Aliquam ut euismod condimentum elementum ultricies...
                </p>
                </div>
                <button className="w-full text-center py-1 sm:py-1.5 text-[9px] sm:text-[11px] font-bold text-blue-600 bg-white border border-blue-600 rounded-[4px] hover:bg-blue-50/50 transition-colors mt-2 select-none">
                Take Lesson
                </button>
            </div>
            <div className="hidden sm:flex bg-white rounded-[10px] p-2.5 sm:p-3.5 border border-gray-100 shadow-[0px_6px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[165px] sm:min-h-[180px] text-left">
                <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold bg-green-50 text-green-600 rounded-[3px] uppercase tracking-wide">
                    New
                </span>
                <h4 className="text-[10px] sm:text-[13px] font-bold text-[#111827] tracking-tight leading-snug line-clamp-2">
                    International & commercial law
                </h4>
                <p className="text-[12.5px] text-[#475569] font-normal leading-normal line-clamp-3">
                    Molestie integer eu arcu mauris bibendum rhoncus...
                </p>
                </div>
                <button className="w-full text-center py-1 sm:py-1.5 text-[9px] sm:text-[11px] font-bold text-blue-600 bg-white border border-blue-600 rounded-[4px] hover:bg-blue-50/50 transition-colors mt-2 select-none">
                Take Lesson
                </button>
            </div>

            </div>
        </div>
        </div>
      </div>
    </section>
  );
}