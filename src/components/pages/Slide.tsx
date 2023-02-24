import React from 'react';
interface SlideProps {
  content: React.ReactNode;
  // className: string;
}

export const Slide: React.FC<SlideProps> = ({ content }) => {
  return (
    <div className='slide'>
      {content}
    </div>
  );
};
