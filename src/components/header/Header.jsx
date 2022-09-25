import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/www-amico (1).png'
import HeaderSocial from './HeaderSocials'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wolfgang Nylander</h1>
        <h5 className="text-light">Junior FullStack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'><BsFillArrowRightCircleFill/>  Scroll Down</a>
      </div>
    </header>
  )
}

export default Header