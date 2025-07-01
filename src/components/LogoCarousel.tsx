
import React from 'react';

const LogoCarousel = () => {
  const companies = [
    { name: 'Digitech', font: 'font-semibold' },
    { name: 'Netdot', font: 'font-bold' },
    { name: 'Sparkweb', font: 'font-extrabold', hasIcon: true },
    { name: 'Pixelpath', font: 'font-semibold', hasIcon: true },
    { name: 'CodeLine', font: 'font-bold' }
  ];

  // Triple the array for seamless looping
  const repeatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="w-full bg-black overflow-hidden mt-20">
      <div className="w-full py-24 flex flex-col justify-center items-center gap-12">
        <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-8">
          <div className="w-full flex justify-center items-start gap-4 flex-wrap">
            {repeatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="px-6 py-5 rounded-full border border-white/20"
                style={{
                  background: 'linear-gradient(180deg, rgba(2, 7, 26, 0.04) 0%, rgba(2, 7, 26, 0.16) 100%)',
                  boxShadow: '0px 4px 8px 1px rgba(244, 244, 254, 0.25) inset'
                }}
              >
                <div className="flex justify-center items-center gap-2">
                  {company.hasIcon && (
                    <div className="w-7 h-8 bg-gray-400 rounded-sm" />
                  )}
                  <div className={`text-center text-gray-400 text-2xl ${company.font} leading-8`}>
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
