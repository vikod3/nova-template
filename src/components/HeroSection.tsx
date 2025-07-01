
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';

const HeroSection = () => {
  return <div className="w-full min-h-screen overflow-hidden flex flex-col justify-start items-start relative" style={{
    backgroundImage: 'url(/lovable-uploads/5c21d57e-d7fa-44a5-a13e-d85e12b669bf.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <Navbar />
      
      <div className="w-full px-4 md:px-16 lg:px-16 xl:px-16 py-14 md:py-28 overflow-hidden flex flex-col justify-start items-center gap-10 md:gap-20">
        <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-10 md:gap-20">
          {/* Header Content */}
          <div className="w-full max-w-3xl pt-8 md:pt-14 flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="w-full flex flex-col justify-start items-center gap-4 md:gap-6">
              <h1 className="w-full text-center text-white text-3xl md:text-5xl lg:text-6xl font-normal leading-tight md:leading-none break-words font-sans">
                Enhance your financial<br />control with Webfluin
              </h1>
              <p className="w-full text-center text-white text-base md:text-lg font-normal leading-relaxed break-words font-sans">
                Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
              <Button className="px-6 py-3 bg-white text-black rounded-full border border-white hover:bg-gray-100 transition-colors font-normal text-base leading-6 font-sans">
                Get started
              </Button>
              <Button variant="outline" className="px-6 py-3 bg-transparent text-white rounded-full border border-white hover:bg-white hover:text-black transition-colors font-normal text-base leading-6 font-sans">
                Contact
              </Button>
            </div>
          </div>
          
          {/* Dashboard Mockup with Gradient Effects */}
          <div className="w-full max-w-7xl h-[400px] md:h-[600px] lg:h-[749px] relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-start pt-4 md:pt-6">
              <div className="relative w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1132px]">
                {/* Gradient Blur Effects */}
                <div style={{
                background: 'linear-gradient(209deg, #3511C5 0%, rgba(53, 17, 197, 0.60) 100%)',
                boxShadow: '30px 30px 30px rgba(0,0,0,0.3)',
                filter: 'blur(15px)',
                transform: 'scale(1.1)'
              }} className="absolute inset-0 rounded-lg bg-transparent" />
                <div className="absolute inset-0 rounded-lg" style={{
                background: 'linear-gradient(207deg, #DAD1FF 0%, rgba(218, 209, 255, 0) 100%)',
                boxShadow: '24px 24px 24px rgba(0,0,0,0.2)',
                filter: 'blur(12px)',
                transform: 'translate(2px, 2px)'
              }} />
                <div className="absolute inset-0 rounded-lg" style={{
                background: 'linear-gradient(207deg, #DAD1FF 0%, rgba(218, 209, 255, 0) 15%)',
                boxShadow: '11px 11px 11px rgba(0,0,0,0.1)',
                filter: 'blur(5.5px)',
                borderRadius: '5px',
                transform: 'translate(2px, 2px)'
              }} />
                
                {/* Main Dashboard Container */}
                <div className="relative w-full aspect-[16/10] rounded-lg border border-white/16 overflow-hidden flex flex-col justify-start items-start" style={{
                transform: 'translate(6px, 6px)',
                borderRadius: '10.89px'
              }}>
                  <div className="w-full h-full bg-black relative">
                    {/* Dashboard Content */}
                    <div className="absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col gap-6">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-sans">Dashboard</h2>
                        <div className="w-8 h-8 rounded-full" style={{
                          background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
                        }}></div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        <div className="bg-gray-900 rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-xs md:text-sm text-gray-400 font-medium font-sans">Revenue</div>
                          <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-sans">$24.5k</div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-xs md:text-sm text-gray-400 font-medium font-sans">Users</div>
                          <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-sans">1,245</div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-xs md:text-sm text-gray-400 font-medium font-sans">Orders</div>
                          <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-sans">342</div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="text-xs md:text-sm text-gray-400 font-medium font-sans">Growth</div>
                          <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-sans">+12%</div>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="flex-1 bg-gray-900 rounded-lg border border-gray-800 p-4 md:p-6 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-full max-w-xs h-16 md:h-20 lg:h-24 flex items-end justify-between gap-1">
                            <div className="w-2 md:w-3 bg-gray-700 rounded-sm" style={{ height: '40%' }}></div>
                            <div className="w-2 md:w-3 rounded-sm" style={{ 
                              height: '70%',
                              background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
                            }}></div>
                            <div className="w-2 md:w-3 bg-gray-700 rounded-sm" style={{ height: '50%' }}></div>
                            <div className="w-2 md:w-3 rounded-sm" style={{ 
                              height: '85%',
                              background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
                            }}></div>
                            <div className="w-2 md:w-3 bg-gray-700 rounded-sm" style={{ height: '30%' }}></div>
                            <div className="w-2 md:w-3 rounded-sm" style={{ 
                              height: '100%',
                              background: 'linear-gradient(180deg, #6445F5 0%, #4128BA 100%)'
                            }}></div>
                            <div className="w-2 md:w-3 bg-gray-700 rounded-sm" style={{ height: '60%' }}></div>
                          </div>
                          <div className="text-xs md:text-sm text-gray-500 font-medium font-sans">Analytics Overview</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-80" style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.8) 100%)'
          }} />
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
