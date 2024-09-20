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
                <li>University Merit Scholarship, 3 times.</li>
                <li>Dean's List, 3 out of 4 academic years.</li>
                <li>Board Talent Pool Scholarship, Dhaka Board.</li>
                <li>Among top graduates(CGPA=3.80)</li>
              </ul>
            </article>

            {/* Certifications & Courses Section */}
            <article className='about__card'>
              <MdVerified className='about__icon' />
              <h5>Certifications & Courses</h5>
              <ul>
                <li> Certified Supply Chain Analyst (CSCA)™</li>
                <li> Applied Engineering Mathematics Course, BUET(4.00/4.00)</li>
                <li> Control Engineering Course, BUET(4.00/4.00)</li>
                <li> Heat Transfer Equipment Design Course, BUET(4.00/4.00)</li>
              </ul>
            </article>
          </div>

          <p>
          I’m Anusree Sen, a Mechanical Engineer with a degree from BUET, where I proudly graduated with a cumulative GPA of 3.80/4.00, including a 3.97 in my final semester and 3.98 in the previous one. I currently work as an Assistant Engineer at the Bangladesh Rural Electrification Board. My expertise lies in innovative renewable energy solutions and advanced system design, as exemplified by my work on a CSP-driven cogeneration cycle. As a Certified Supply Chain Analyst (CSCA)™, I am dedicated to improving energy efficiency and optimizing supply chain processes. Alongside my engineering career, I have a passion for the arts, creating compelling graphics and artwork. Explore my site to see how my research, projects, and creative ventures are shaping the future.


          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
