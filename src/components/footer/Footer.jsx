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
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.researchgate.net/profile/your-researchgate-id" target="_blank" rel="noopener noreferrer"><FaResearchgate /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anusree Sen. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
