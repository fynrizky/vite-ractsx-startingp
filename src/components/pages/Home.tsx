import React, { useState } from 'react'


export const Home: React.FC = () => {
const [title, setTitle] = useState("Rizky Fiyannur");

  return (
    <>
    <div id='home' className='menu bg-neutral-900 '>
      <div className='row-menu mt-4 max-sm:mt-24 text-zinc-300 w-9/12 '>
        <div className='text-center'>
          <a href="#about"> { (setTitle) ? title : ''} </a>
        </div>
        <img src="https://i.pinimg.com/474x/f0/39/ab/f039ab3707e47598ce379924528374df.jpg" 
        className="border-4 mt-8 max-sm:mt-12 border-zinc-500 w-60 mx-auto p-1 rounded-full" alt="Avatar" />
      </div>
    </div>
    </>
  )
}
