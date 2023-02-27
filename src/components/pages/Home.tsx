import React, { useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import myImg from "../../assets/img/mikey.jpg";
import { Skills } from './Skills';


export const Home: React.FC = () => {
const [title, setTitle] = useState("Rizky Fiyannur");
const [text, count] = useTypewriter({
  words : [
    "Hi, I'm Rizky", 
    "I'm a web develop", 
    "Front-end",
    "Javascript",
  ],
  loop: true,
  delaySpeed: 2000,
  typeSpeed: 200,
  deleteSpeed: 50,
})

  return (
    <>
    <div id='home' className='menu bg-neutral-900 '>
      <div className='row-menu my-4 max-sm:mt-20 text-zinc-300 w-9/12 '>
        <div className='text-center'>
          <a href="#about"> { (setTitle) ? title : ''} </a>
        </div>
        <img src={myImg} className="border-4 my-8 max-sm:my-8 border-zinc-500 w-44 mx-auto p-1 rounded-full" alt="Avatar" />
        <div className='text-center text-2xl'>
            <span>{count ? text : ''}</span>
            <Cursor cursorColor={`inherit`} cursorBlinking={true} />
            <Skills />
        </div>
      </div>
    </div>
    </>
  )
}
