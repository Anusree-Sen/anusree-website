import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Anu.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>HELLO...</h3>
        <h1>Welcome to Anusree's Website!</h1>
        <h5 className="text-light">Mechanical Engineer | Thesis on Renewable Energy Solutions | Heat Transfer & Control Engineering Enthusiast | Certified Supply Chain Analyst (CSCA)™ | Passionate about Arts & Visual Design.</h5>
        
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header