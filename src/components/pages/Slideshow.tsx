import React, { useState } from 'react';
import {Slide} from './Slide';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideshowProps {
  slides: { content: React.ReactNode, }[];
}

const Slideshow = ({ slides }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className='slideshow text-white'>
      <motion.button
        className='absolute top-1/2 left-0'
        onClick={goToPreviousSlide}
        whileTap={{ scale: 0.9 }}
        
      >
        <svg
          className='h-12 w-12 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L9.83 12l5.58-5.59z' />
        </svg>
      </motion.button>
      <AnimatePresence exitBeforeEnter initial={false} >
        <motion.div
          key={currentSlide}
          className='slide-wrapper relative -z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          
        >
          <Slide content={slides[currentSlide].content} />
        </motion.div>
      </AnimatePresence>
      <motion.button
        className='absolute top-1/2 right-0'
        onClick={goToNextSlide}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className='h-12 w-12 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L14.17 12l-5.58 5.59z' />
        </svg>
      </motion.button>
    </div>
  );
};

export default Slideshow;
