import React from 'react';
import OrangeBlob from '../assets/feature-detail/Blob.png';
import LineUnderline from '../assets/feature-detail/Vector 14.png';
import LessonCardThumb from '../assets/feature-detail/User Thumb.png';
import PicMain from '../assets/feature-detail/Picture.png';
import PicTopRight from '../assets/feature-detail/Picture (1).png';
import PicBottomRight from '../assets/feature-detail/Picture (2).png';
import StarsBackgroundLayer from '../assets/feature-detail/Icons.png';

export default function FeaturesDetail() {
  return (
    <section className="w-full bg-white flex justify-center overflow-hidden py-16 lg:py-[80px]">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[80px] flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-12 xl:gap-8 min-h-fit mx-auto">
        <div className="w-full xl:w-[45%] max-w-[768px] xl:max-w-[500px] flex flex-col items-center xl:items-start text-center xl:text-left mb-10 xl:mb-0">
          <div className="relative pb-2">
            <h2 className="text-[36px] sm:text-[40px] font-black tracking-tight text-[#111827] leading-[1.15]">
              All the cool{' '}
              <span className="relative inline-block">
                features
                <img 
                  src={LineUnderline} 
                  alt="" 
                  className="absolute left-0 -bottom-[6px] w-[160px] sm:w-[205px] h-auto pointer-events-none object-contain"
                />
              </span>
            </h2>
          </div>
          <p className="mt-6 text-sm sm:text-base text-[#0F172A] font-medium leading-relaxed">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio 
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit 
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, 
            ullamcorper non viverra a, neque orci.
          </p>
          <div className="mt-5">
            <a 
              href="#all-features" 
              className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors group gap-1"
            >
              View all the features{' '}
              <span className="transform group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[55%] flex justify-center items-center relative min-h-[380px] lg:min-h-[500px]">
          <img 
            src={OrangeBlob} 
            alt="" 
            className="absolute w-[700px] sm:w-[400px] lg:w-[460px] h-auto pointer-events-none z-0 object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img 
            src={StarsBackgroundLayer} 
            alt="" 
            className="absolute w-[180px] lg:w-[220px] h-auto pointer-events-none z-10 object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
          />
          <div className="relative w-full max-w-[460px] h-[300px] sm:h-[360px] z-20">
            <div 
              className="absolute left-[20px] top-0 w-[200px] sm:h-[200px] sm:w-[180px] bg-white rounded-[10px] p-4 border border-gray-100 flex flex-col justify-between text-left shadow-[0px_10px_25px_rgba(0,0,0,0.04)] z-20"
            >
              <div>
                <span className="text-[10px] font-bold text-[#2563EB] bg-[#EFF6FF] px-0.5 lg:px-2 py-0.5 rounded tracking-wide">
                  Popular
                </span>
                <h4 className="font-roboto font-medium text-[13px] lg:text-[16px] text-[#] mt-3 leading-[1.1] tracking-normal max-w-[193px]">
                  Design for how people think
                </h4>
                <p className="font-roboto text-[9px] lg:text-[10px] text-[#475569] mt-2 leading-[1.4] max-w-[193px]">
                  Aliquam ut euismod condimentum elementum ultricies volutpat sit non.
                </p>
              </div>
              <button className="w-full text-center py-0.5 lg:py-2 text-[10px] lg:text-[12px] font-bold border border-[#2563EB] text-[#2563EB] rounded-[4px] hover:bg-blue-50 transition-colors mt-2">
                Take Lesson
              </button>
            </div>
            <div className="absolute sm:right-8 right-[-80px] sm:top-17 top-11 z-20">
              <img 
                src={PicBottomRight} 
                alt="" 
                className="w-[190px] sm:w-[225px] aspect-[225/144] rounded-[10px] object-cover"
              />
              <div className="absolute bottom-5 right-0 transform translate-x-1/4 translate-y-1/4 w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full z-30 overflow-hidden">
                <img src={LessonCardThumb} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <img 
              src={PicMain} 
              alt="" 
              className="absolute left-[0px] sm:bottom-[-50px] bottom-[-40px] w-[300px] sm:w-[300px] aspect-[300/158] lg:aspect-[235/158] rounded-[10px] object-cover gap:10 z-20"
            />
            <img 
              src={PicTopRight} 
              alt="" 
              className="absolute sm:right-[-50px] right-[-140px] bottom-[-40px] sm:bottom-[-50px] w-[180px] sm:w-[215px] aspect-[170/158] rounded-[10px] object-cover z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}