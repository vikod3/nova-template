

import React from 'react';
const CallToActionSection = () => {
  return (
    <>
      <div className="w-full h-full px-4 md:px-16 py-16 md:py-28 bg-black overflow-hidden flex flex-col justify-start items-center gap-12 md:gap-20">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="px-4 py-1.5 bg-black rounded-2xl border border-gray-600 flex justify-start items-center gap-3">
                <div className="flex justify-start items-center gap-2">
                  <div className="text-gray-200 text-sm font-medium leading-5 font-sans">Our statistics</div>
                </div>
              </div>
              <div className="self-stretch text-center text-white text-3xl md:text-5xl lg:text-[56px] font-normal leading-tight md:leading-[67.20px] font-sans">Ready to transform your financial management?</div>
              <div className="self-stretch opacity-80 text-center text-white text-base md:text-lg font-normal leading-6 md:leading-[27px] font-sans">Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.</div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="px-6 py-3 bg-white rounded-full border border-white flex justify-center items-center gap-2">
                <div className="text-black text-base font-normal leading-6 font-['Roboto']">Get started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="w-full h-[962px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('/lovable-uploads/ecd2dbc8-eb7b-4d3d-bfc8-d3543413d409.png')`
        }}
      >
        <img 
          src="/lovable-uploads/a3ef2038-5b9d-4b9e-a544-893b3471f305.png" 
          alt="Purple gradient icon" 
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>
    </>
  );
};
export default CallToActionSection;
