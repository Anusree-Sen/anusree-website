import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Anusree's Website</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        {/*<li><a href="#services">Services</a></li>*/}
        <li><a href="#portfolio">Portfolio</a></li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/id=100022632162477"><FaFacebookF /></a>
        <a href="https://www.instagram.com/anusree_sen/"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/anusree-sen-55b308224/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.researchgate.net/profile/Anusree-Sen-2" target="_blank" rel="noopener noreferrer"><FaResearchgate /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anusree Sen. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
