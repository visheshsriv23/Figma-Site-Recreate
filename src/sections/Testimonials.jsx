import React from 'react';
import Avatar1 from '../assets/testimonials/User Thumb.png';
import Avatar2 from '../assets/testimonials/User Thumb (1).png';
import Avatar3 from '../assets/testimonials/User Thumb (2).png';
import Avatar4 from '../assets/testimonials/User Thumb (3).png';
import PrevBtn from '../assets/testimonials/Button.png';
import NextBtn from '../assets/testimonials/Button (1).png';

export default function Testimonials() {
  return (
    <section className="w-full bg-[#FFFFFF] flex justify-center overflow-hidden pt-20 pb-12 lg:pt-[84px] lg:pb-[80px]">
      <div className="w-full max-w-[1280px] px-6 sm:px-12 lg:px-12 flex flex-col space-y-8 lg:space-y-12">
        <div className="w-full flex justify-between items-center h-[62px]">
          <h2 className="text-[32px] sm:text-[40px] font-black tracking-tight text-[#111827]">
            What everyone says
          </h2>
          <div className="hidden sm:flex items-center gap-3">
            <button className="hover:opacity-80 active:scale-95 transition-all">
              <img src={PrevBtn} alt="Previous" className="w-[48px] h-[48px] object-contain" />
            </button>
            <button className="hover:opacity-80 active:scale-95 transition-all">
              <img src={NextBtn} alt="Next" className="w-[48px] h-[48px] object-contain" />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none -mx-6 px-6 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0 pb-6">
          <div 
            className="w-[230px] sm:w-[300px] lg:w-[350px] h-[320px] lg:h-[305px] shrink-0 bg-white rounded-[20px] p-6 lg:p-8 border border-gray-100 flex flex-col justify-between text-left snap-start shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[#000000] text-sm sm:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-5 lg:line-clamp-6">
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <img src={Avatar1} alt="Hellen Jummy" className="w-[48px] h-[48px] rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Hellen Jummy</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Financial Counselor</p>
              </div>
            </div>
          </div>
          <div 
            className="w-[230px] sm:w-[300px] lg:w-[350px] h-[320px] lg:h-[305px] shrink-0 bg-white rounded-[20px] p-6 lg:p-8 border border-gray-100 flex flex-col justify-between text-left snap-start shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[#000000] text-sm sm:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-5 lg:line-clamp-6">
              Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <img src={Avatar2} alt="Ralph Edwards" className="w-[48px] h-[48px] rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Ralph Edwards</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Math Teacher</p>
              </div>
            </div>
          </div>
          <div 
            className="w-[230px] sm:w-[300px] lg:w-[350px] h-[320px] lg:h-[305px] shrink-0 bg-white rounded-[20px] p-6 lg:p-8 border border-gray-100 flex flex-col justify-between text-left snap-start shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[#000000] text-sm sm:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-5 lg:line-clamp-6">
              Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <img src={Avatar3} alt="Hellena John" className="w-[48px] h-[48px] rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Hellena John</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Psychology Student</p>
              </div>
            </div>
          </div>
          <div 
            className="w-[230px] sm:w-[300px] lg:w-[350px] h-[320px] lg:h-[305px] shrink-0 bg-white rounded-[20px] p-6 lg:p-8 border border-gray-100 flex flex-col justify-between text-left snap-start shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[#000000] text-sm sm:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-5 lg:line-clamp-6">
              Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <img src={Avatar4} alt="David Oshodi" className="w-[48px] h-[48px] rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">David Oshodi</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">Manager</p>
              </div>
            </div>
          </div>
          <div 
            className="w-[230px] sm:w-[300px] lg:w-[350px] h-[320px] lg:h-[305px] shrink-0 bg-white rounded-[20px] p-6 lg:p-8 border border-gray-100 flex flex-col justify-between text-left snap-start shadow-[0px_10px_30px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[#000000] text-sm sm:text-base font-medium leading-relaxed line-clamp-6 sm:line-clamp-5 lg:line-clamp-6">
              Magna egestas aliquet ut integer non. Sed diam enim sit. Aliquam laoreet aenean metus nibh eu scelerisque.
            </p>
            <div className="flex items-center gap-4 mt-auto pt-4">
              <div className="w-[48px] h-[48px] rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black select-none shrink-0">
                CH
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Charolette Hanlin</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">CEO</p>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </section>
  );
}