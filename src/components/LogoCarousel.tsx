
import React from 'react';
import { motion } from 'framer-motion';

const LogoCarousel = () => {
  // Array of 5 logo image paths (using placeholder images for now)
  const logoImages = [
    '/placeholder.svg',
    '/placeholder.svg', 
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  // Triple the array for seamless looping
  const tripleLogos = [...logoImages, ...logoImages, ...logoImages];

  return (
    <div className="w-full overflow-hidden bg-black py-8 md:py-12 mt-12 md:mt-20">
      <motion.div 
        className="flex space-x-8 md:space-x-16 gap-8 md:gap-16"
        initial={{ opacity: 0, x: '0%' }}
        animate={{ 
          opacity: 1, 
          x: '-50%' 
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          x: { 
            duration: 15, 
            repeat: Infinity, 
            ease: 'linear',
            delay: 0.5
          }
        }}
      >
        {tripleLogos.map((logoPath, index) => (
          <img
            key={index}
            src={logoPath}
            alt={`Logo ${index + 1}`}
            className="h-6 md:h-8 object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
