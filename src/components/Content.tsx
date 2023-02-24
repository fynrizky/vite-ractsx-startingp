import React, { useState, useEffect } from 'react'

import { Header } from './pages/Header';
import Slideshow from './pages/Slideshow';
import { Home } from './pages/Home';
import { About } from './pages/About';

interface Props {
    loading: boolean;
}


const Content = ({loading} : Props) => {
  const slides = [
    {
      content : (<Home />),
    },
    {
      content : (<About/>)
    }
  ];
  return (
    <>
    <div className='content' style={{ opacity: loading ? 0 : 1, zIndex: !loading ? '1' : ''}}>
        <Header />
        <Slideshow slides={slides} />
        {/* <Home /> */}
        {/* <About /> */}
      </div>
    </>
  )
}
// const Content = (props : Props) => {
//   return (
//     <>
//     <div className='content' style={{ opacity: props.loading ? 0 : 1}}>
//         <Home />
//         <About />
//       </div>
//     </>
//   )
// }

export default Content
