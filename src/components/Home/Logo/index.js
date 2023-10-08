import React from 'react'
import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'; //change karna haii

const Logo = () => {
  return (
    <div className='logo-container'>
        <img className= 'solid-logo' src={LogoS} alt="S" />
        <svg 
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="https://www.w3.org/2000/svg">
     <g 
     className='svg-container'
     transform='translate(0 457) scale(.1 -.1)'
     fill='none'
     >

     </g>

        </svg>

    </div>
  )
}

export default Logo

//43.41
