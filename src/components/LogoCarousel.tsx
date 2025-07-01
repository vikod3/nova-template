
import React from 'react';
import { motion } from 'framer-motion';

const LogoCarousel = () => {
  // Array of 5 logo image paths (using placeholder images)
  const logoImages = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop'
  ];

  // Triple the array for seamless looping
  const tripleLogos = [...logoImages, ...logoImages, ...logoImages];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur py-12 mt-20">
      <motion.div
        className="flex space-x-16"
        initial={{ opacity: 0, x: '0%' }}
        animate={{ 
          opacity: 1, 
          x: '-50%' 
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          x: { 
            duration: 15, 
            ease: 'linear', 
            repeat: Infinity,
            delay: 0.5
          }
        }}
        style={{ gap: '4rem' }}
      >
        {tripleLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-8 object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
