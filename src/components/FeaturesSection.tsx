
import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
      <div className="w-full max-w-screen-xl flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-4">
          <div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3">
            <div className="flex justify-start items-center gap-2">
              <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Features</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center text-white text-4xl md:text-6xl font-normal leading-tight md:leading-[67.20px] font-sans">Short heading goes here</div>
            <div className="self-stretch text-center text-white text-base md:text-lg font-normal leading-6 md:leading-7" style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-8">
              <div className="w-full lg:w-[864px] bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-white flex flex-col justify-start items-start">
                <div className="self-stretch h-48 md:h-[306px] bg-black"></div>
                <div className="self-stretch p-6 md:p-12 flex flex-col justify-start items-start gap-6 md:gap-8">
                  <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Medium length section heading goes here</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 self-stretch bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-white flex flex-col justify-start items-start">
                <div className="self-stretch h-48 md:h-[250px] p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Link Your Accounts</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Create your account in minutes and tailor the platform to meet your company's unique financial needs.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 bg-black"></div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 md:gap-8">
              <div className="flex-1 self-stretch bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-white flex flex-col justify-start items-start">
                <div className="self-stretch h-48 md:h-[260px] p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col justify-center items-center gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Integrate Your Data</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 bg-black"></div>
              </div>
              <div className="w-full lg:w-[864px] bg-gradient-to-b from-[#161A1E] to-[#08090A] overflow-hidden rounded-[32px] border border-white flex flex-col justify-start items-start">
                <div className="self-stretch h-48 md:h-[306px] bg-black"></div>
                <div className="self-stretch p-6 md:p-12 flex flex-col justify-center items-center gap-6 md:gap-8">
                  <div className="w-full max-w-3xl flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                      <div className="self-stretch text-center text-white text-2xl md:text-4xl font-medium leading-tight md:leading-[41.60px] font-sans">Medium length section heading goes here</div>
                      <div className="self-stretch opacity-80 text-center text-white text-sm md:text-base font-normal leading-5 md:leading-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
