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
        <h5 className="text-light">I’m Anusree Sen, a Mechanical Engineer with a degree from BUET and currently an Assistant Engineer at the Bangladesh Rural Electrification Board. I specialize in pioneering renewable energy solutions and advanced system design, exemplified by my work on a CSP-driven cogeneration cycle. As a Certified Supply Chain Analyst (CSCA)™, I am committed to advancing energy efficiency and supply chain optimization. In addition to my engineering pursuits, I am passionate about the arts, creating visually impactful graphics and artwork. Explore my site to discover how my research, projects, and creative endeavors are shaping the future.</h5>
        
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