import React from 'react';
import DesktopImg from '../assets/tools-overview/Desktop.png';
import BlobLeft from '../assets/tools-overview/Blob Group (1).png';
import BlobRight from '../assets/tools-overview/Blob Group.png';
import LinesBottom from '../assets/tools-overview/Lines.png';
import UnderlineVector from '../assets/feature-detail/Vector 14.png';
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
    <section className="w-full lg:bg-[#F1F5F9] bg-[#ffffff] flex justify-center relative overflow-hidden py-[60px] lg:py-[80px] border-b border-gray-100">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img 
            src={BlobLeft} 
            alt="" 
            className="absolute -left-[70px] sm:-left-[50px] lg:-left-[50px] top-[220px] lg:top-[160px] w-[220px] sm:w-[380px] lg:w-[561.28px] h-auto object-contain opacity-70 lg:opacity-100" 
        />
        <img 
            src={BlobRight} 
            alt="" 
            className="absolute right-[-30px] lg:right-[-25px] top-24 w-[160px] sm:w-[320px] lg:w-[500px] lg:h-[750px] object-cover pointer-events-none -z-10 opacity-70 lg:opacity-100 transition-all lg:rounded-[10px]" 
            />
        <img 
            src={LinesBottom} 
            alt="" 
            className="absolute bottom-[130px] lg:bottom-[150px] left-1/2 -translate-x-1/2 w-[90%] lg:w-[1093px] h-auto object-contain" 
        />
        </div>
      <div className="w-full max-w-[1440px] px-[14px] sm:px-[40px] lg:px-[80px] flex flex-col items-left text-left sm:items-center sm:text-center relative z-10">
        <div className="flex flex-col items-center space-y-4 max-w-[800px]">
          <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight text-[#111827] leading-tight z-10">
            All the{' '}
            <span className="relative inline-block">
              tools
              <img 
                src={UnderlineVector} 
                alt="" 
                className="absolute -bottom-[-2px] left-0 w-[75px] sm:w-[100px] max-w-none h-auto object-contain pointer-events-none select-none -z-10"
                />
            </span>{' '}
            that you need
          </h2>       
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-2xl px-2">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. 
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </p>
        </div>
        <div className="mt-8 lg:mt-10 w-full lg:max-w-[1100px] aspect-[950/620] lg:aspect-[1100/640] rounded-[20px] overflow-hidden relative flex items-center justify-center ">
          <img 
            src={DesktopImg} 
            alt="Central tools application interface" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 lg:mt-10 w-full max-w-[1160px] flex flex-nowrap md:flex-wrap items-center justify-start md:justify-between gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible scrollbar-none px-4 md:px-0 py-2">
  {APP_THUMBNAILS.map((thumbnailAsset, index) => (
    <div
      key={index}
      className="w-[64px] h-[64px] flex-shrink-0 rounded-[14px] border border-[#E5E7EB] hover:border-[#F8923C] shadow-sm bg-white flex items-center justify-center cursor-pointer select-none"
    >
      <img
        src={thumbnailAsset}
        alt={`App tool module integration state ${index + 1}`}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}