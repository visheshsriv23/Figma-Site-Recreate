import React from 'react';
import DesktopImg from '../assets/tools-overview/Desktop.png';
import BlobLeft from '../assets/tools-overview/Blob Group (1).png';
import BlobRight from '../assets/tools-overview/Blob Group.png';
import LinesBottom from '../assets/tools-overview/Lines.png';
import AppThumb0 from '../assets/tools-overview/App-thumbnail.png';
import AppThumb1 from '../assets/tools-overview/App-thumbnail (1).png';
import AppThumb2 from '../assets/tools-overview/App-thumbnail (2).png';
import AppThumb3 from '../assets/tools-overview/App-thumbnail (3).png';
import AppThumb4 from '../assets/tools-overview/App-thumbnail (4).png';
import AppThumb5 from '../assets/tools-overview/App-thumbnail (5).png';
import AppThumb6 from '../assets/tools-overview/App-thumbnail (6).png';
import AppThumb7 from '../assets/tools-overview/App-thumbnail (7).png';
import AppThumb8 from '../assets/tools-overview/App-thumbnail (8).png';

const APP_THUMBNAILS = [
    AppThumb0, AppThumb1, AppThumb2, AppThumb3, 
    AppThumb4, AppThumb5, AppThumb6, AppThumb7, AppThumb8
];

export default function ToolsOverview() {
  return (
    <section className="w-full bg-[#F1F5F9] flex justify-center relative overflow-hidden py-[60px] lg:py-[80px] border-b border-gray-100">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
            src={BlobLeft} 
            alt="" 
            className="absolute -left-[40px] sm:-left-[80px] lg:-left-[100px] top-[140px] lg:top-[160px] w-[220px] sm:w-[380px] lg:w-[561.28px] h-auto object-contain opacity-70 lg:opacity-100" 
        />
        <img 
            src={BlobRight} 
            alt="" 
            className="absolute right-0 top-0 w-[160px] sm:w-[320px] lg:w-[523px] lg:h-[868.65px] object-cover pointer-events-none -z-10 opacity-70 lg:opacity-100 transition-all" 
            />
        <img 
            src={LinesBottom} 
            alt="" 
            className="absolute bottom-[130px] lg:bottom-[150px] left-1/2 -translate-x-1/2 w-[90%] lg:w-[1093px] h-auto object-contain" 
        />
        </div>
      <div className="w-full max-w-[1440px] px-[24px] sm:px-[40px] lg:px-[80px] flex flex-col items-center text-center relative z-10">
        <div className="flex flex-col items-center space-y-4 max-w-[800px]">
          <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight text-[#111827] leading-tight">
            All the{' '}
            <span className="relative inline-block">
              tools
              <span 
                className="absolute bottom-[2px] left-0 bg-[#FB923C] rounded-full -z-10" 
                style={{ width: '121px', height: '10px' }}
              />
            </span>{' '}
            that you need
          </h2>       
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-2xl px-2">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. 
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>
        <div className="mt-10 lg:mt-12 w-full max-w-[1100px] aspect-[1100/640] rounded-[20px] shadow-2xl border border-gray-200/80 overflow-hidden relative flex items-center justify-center bg-white">
          <img 
            src={DesktopImg} 
            alt="Central tools application interface" 
            className="w-full h-full object-cover"
          />
          <button className="w-14 h-14 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center text-[#111827] hover:scale-105 active:scale-95 transition-all duration-200 z-20 cursor-pointer">
            <span className="text-lg ml-1">▶</span>
          </button>
        </div>
        <div className="mt-12 lg:mt-16 w-full max-w-[377px] sm:max-w-[600px] lg:max-w-[1160px] grid grid-cols-9 gap-2 sm:gap-[24px] items-center justify-between">
          {APP_THUMBNAILS.map((thumbnailAsset, index) => (
            <div 
              key={index} 
              className="w-[32px] h-[32px] sm:w-[64px] sm:h-[64px] rounded-[14px] border border-transparent hover:border-[#F8923C] shadow-sm bg-white p-1 transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <img 
                src={thumbnailAsset} 
                alt={`App tool module integration state ${index + 1}`} 
                className="w-full h-full object-cover rounded-[10px]" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}