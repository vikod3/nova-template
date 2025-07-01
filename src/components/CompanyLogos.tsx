import React from 'react';
import LogoCarousel from './LogoCarousel';

const CompanyLogos = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center gap-12 bg-black">
      <LogoCarousel />
      <div className="w-full max-w-5xl flex flex-col justify-start items-center gap-8">
        {/* Keep existing static logos below the carousel */}
        <div className="w-full flex justify-center items-start gap-4 flex-wrap">
          {[{
            name: 'Digitech',
            fontFamily: 'font-semibold'
          }, {
            name: 'Netdot',
            fontFamily: 'font-bold'
          }, {
            name: 'Sparkweb',
            fontFamily: 'font-extrabold',
            hasIcon: true,
            iconType: 'rectangle'
          }, {
            name: 'Pixelpath',
            fontFamily: 'font-semibold',
            hasIcon: true,
            iconType: 'square'
          }, {
            name: 'CodeLine',
            fontFamily: 'font-bold'
          }, {
            name: 'Digitech',
            fontFamily: 'font-semibold'
          }].map((company, index) => <div key={`${company.name}-${index}`} className="px-6 py-5 rounded-full border border-white/20 flex items-center gap-2" style={{
          background: 'linear-gradient(180deg, rgba(2, 7, 26, 0.04) 0%, rgba(2, 7, 26, 0.16) 100%)',
          boxShadow: '0px 4px 8px 1px rgba(244, 244, 254, 0.25) inset'
        }}>
              {company.hasIcon && <div className="bg-gray-400" style={{
            width: company.iconType === 'rectangle' ? '28.26px' : '17.48px',
            height: company.iconType === 'rectangle' ? '32px' : '17.48px'
          }} />}
              <div className={`text-center text-gray-400 text-2xl leading-8 ${company.fontFamily}`}>
                {company.name}
              </div>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
