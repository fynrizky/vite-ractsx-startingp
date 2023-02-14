import React, { useState } from 'react'


export const Home: React.FC = () => {
const [title, setTitle] = useState("Home");

  return (
    <>
    <div id='home' className='menu'>
      <div className='row-menu'>
          <a href="#about"> { (setTitle) ? title : ''} </a>
      </div>
    </div>
    </>
  )
}
