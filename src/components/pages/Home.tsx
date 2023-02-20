import React, { useState } from 'react'
import myImg from "../../assets/img/mikey.jpg";


export const Home: React.FC = () => {
const [title, setTitle] = useState("Rizky Fiyannur");

  return (
    <>
    <div id='home' className='menu bg-neutral-900 '>
      <div className='row-menu mt-4 max-sm:mt-20 text-zinc-300 w-9/12 '>
        <div className='text-center'>
          <a href="#about"> { (setTitle) ? title : ''} </a>
        </div>
        <img src={myImg} 
        className="border-4 mt-20 max-sm:mt-10 border-zinc-500 w-48 mx-auto p-1 rounded-full" alt="Avatar" />
      </div>
    </div>
    </>
  )
}
