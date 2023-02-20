import React from 'react'

export const About = () => {
  return (
    <div id='about' className='menu bg-neutral-800 '>
    <div className="row-main mt-8 w-7/12 text-zinc-300">
      <div className="text-center">
        <a href="#home">About</a>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-20 text-2xl max-sm:text-xl mt-20">
        <div className='text-justify'>
          <p className='indent-12 max-sm:indent-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est natus, nisi voluptates fugit rem, necessitatibus, in sunt minus numquam libero! Minima beatae cupiditate, at maxime aperiam ipsum pariatur! Amet.
          </p>
        </div>
        <div className='text-justify'>
          <p className='indent-12 max-sm:indent-0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, ab! Et cum aperiam odit id illo sequi ducimus quis? Sed nisi maxime, consequuntur in quos assumenda necessitatibus dolores ullam cupiditate!  
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
