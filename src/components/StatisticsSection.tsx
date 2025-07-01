
import React from 'react';

const StatisticsSection = () => {
  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-20 bg-black flex flex-col justify-center items-center gap-12 md:gap-20">
      <div className="w-full max-w-[850px] flex flex-col justify-start items-center gap-4">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3">
            <div className="flex justify-start items-center gap-2">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Our statistics</div>
            </div>
          </div>
          <div className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans">The numbers that define our success</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-8">
        <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[15px] flex flex-col justify-start items-start gap-8 md:gap-12">
          <div className="self-stretch text-white text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight md:leading-[104px] font-['Roboto']">95%</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-xl font-normal leading-7 font-sans">Fast-Track Results</div>
            <div className="self-stretch opacity-80 text-white text-sm md:text-base font-normal leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[15px] flex flex-col justify-start items-start gap-8 md:gap-12">
          <div className="self-stretch text-white text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight md:leading-[104px] font-['Roboto']">30%</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-xl font-normal leading-7 font-sans">Increased Efficiency</div>
            <div className="self-stretch opacity-80 text-white text-sm md:text-base font-normal leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[15px] flex flex-col justify-start items-start gap-8 md:gap-12">
          <div className="self-stretch text-white text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight md:leading-[104px] font-['Roboto']">36%</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-xl font-normal leading-7 font-sans">Performance Leap</div>
            <div className="self-stretch opacity-80 text-white text-sm md:text-base font-normal leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-[rgba(196,227,255,0.12)] to-[rgba(196,227,255,0.02)] bg-black rounded-[15px] flex flex-col justify-start items-start gap-8 md:gap-12">
          <div className="self-stretch text-white text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight md:leading-[104px] font-['Roboto']">54%</div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="text-white text-lg md:text-xl font-normal leading-7 font-sans">Strategic Advantage</div>
            <div className="self-stretch opacity-80 text-white text-sm md:text-base font-normal leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
