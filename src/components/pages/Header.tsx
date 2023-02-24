import React, {useState} from 'react';
import { SocialIcon } from 'react-social-icons';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center bg-neutral-800 justify-end h-8 max-auto px-72 max-sm:px-4 py-5">
    <SocialIcon url="https://www.facebook.com/rizpoint" fgColor="#ACB6C0" bgColor="transparent" className="h-2 w-2 my-1 mx-2 hover:scale-110" />
    <SocialIcon url="https://www.instagram.com/_fynrizky" fgColor="#acb6c0" bgColor="transparent" className="h-2 w-2 my-1 mx-2 hover:scale-110" />
    <SocialIcon url="https://github.com/fynrizky" fgColor="#acb6c0" bgColor='rgb(38,38,38)' className="h-2 w-2 my-1 mx-2 hover:scale-110" />
    <SocialIcon url="https://www.youtube.com/" fgColor="#acb6c0" bgColor="transparent" className="h-2 w-2 my-1 mx-2 hover:scale-110" />
    <div className='flex-1'/>
    <SocialIcon url="mailto:fiyaniky25@gmail.com" network="email" bgColor="transparent" fgColor="#acb6c0" className="h-2 w-2 my-1 mx-auto hover:scale-110" />
    </div>

  );
}
