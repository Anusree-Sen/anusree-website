import React from 'react';
import './about.css';
import { FiBriefcase } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa'; 
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaAward } from 'react-icons/fa';  // New icon for Achievements & Awards
import { MdVerified } from 'react-icons/md';  // New icon for Certifications & Courses

const About = () => {
  return (
    <section id="about"> 
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiBriefcase className='about__icon' />
              <h5>Professional Experience</h5>
              <ul>
                <li>Assistant Engineer at Bangladesh Rural Electrification Board</li>
                <li>Certified Supply Chain Analyst (CSCA)™</li>
                <li>Industrial Trainee at RPCL</li>
              </ul>
            </article>

            <article className='about__card'>
              <FaSearch className='about__icon' />
              <h5>Research Interests</h5>
              <ul>
                <li>Renewable Energy</li>
                <li>Heat Exchanger Design</li>
                <li>Control System Design</li>
                <li>Machine Design</li>
                <li>Thermodynamic Cycle</li>
              </ul>
            </article>

            {/* Achievements & Awards Section */}
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Achievements & Awards</h5>
              <ul>
                <li>Best Paper Award, XYZ Conference</li>
                <li>Top Graduate, BUET</li>
                <li>Outstanding Performance Award, REB</li>
              </ul>
            </article>

            {/* Certifications & Courses Section */}
            <article className='about__card'>
              <MdVerified className='about__icon' />
              <h5>Certifications & Courses</h5>
              <ul>
                <li>Certified Supply Chain Analyst (CSCA)™</li>
                <li>Advanced Thermodynamics Course, MITx</li>
                <li>Control Systems Design Workshop</li>
              </ul>
            </article>
          </div>

          <p>
            I am Anusree Sen, a Mechanical Engineer with a focus on renewable energy and system design. I hold a degree from BUET and am currently an Assistant Engineer at the Bangladesh Rural Electrification Board. I am also a Certified Supply Chain Analyst (CSCA)™. Explore my work and creative projects here.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
