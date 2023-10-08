import './index.scss'

import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='pratik' />
        </Link>
        <nav>
            <NavLink 
            exact = 'true' 
            activeclassname="active" 
            className="" 
            to ='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink 
            exact = 'true' 
            activeclassname="active"
            className="about-link"  
            to ='/about' >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>

            <NavLink 
            exact = 'true' 
            activeclassname="active" 
            className = "contact-link" 
            to ='/contact' >
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>

        </nav>
        <ul>
          {/* Linkedin  */}
          <li>
            <a target="_blank" 
            rel='noreferrer'
            href="https://www.linkedin.com/in/pratik-waghmare-%F0%9F%A7%AD-588262209/"> 
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          {/* Github */}
          <li>
            <a target="_blank" 
            rel='noreferrer'
            href="https://github.com/pratikw007"> 
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          {/* Leetcode */}
          <li>
            <a target="_blank" 
            rel='noreferrer'
            href="https://github.com/pratikw007"> 
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
          {/* Skype */}
          <li>
            <a target="_blank" 
            rel='noreferrer'
            href="https://github.com/pratikw007"> 
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar