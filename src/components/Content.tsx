import React, { useState } from 'react'
import { About } from './pages/About';
import { Home } from './pages/Home';

interface Props {
    loading: boolean;
}

const Content = ({loading} : Props) => {
  return (
    <>
    <div className='content' style={{ opacity: loading ? 0 : 1, zIndex: loading ? '-1' : ''}}>
        <Home />
        <About />
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
