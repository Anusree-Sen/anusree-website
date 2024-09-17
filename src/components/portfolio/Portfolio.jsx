import React from 'react';
import './portfolio.css';
import { FaResearchgate, FaVideo, FaBehance } from 'react-icons/fa';

// Importing images
import ResearchImg1 from '../../assets/PID.png';
import ResearchImg2 from '../../assets/Thesis-1.jpg';
import ResearchImg3 from '../../assets/sustainable.png';

import ProjectImg1 from '../../assets/temp_detector.png';
import ProjectImg2 from '../../assets/shell_tube.png';

// Add artwork images here
import ArtworkImg1 from '../../assets/BIDC logo with background.png';
import ArtworkImg2 from '../../assets/narir_sopno.png';

const data = {
  researchWorks: [
    {
      id: 1,
      image: ResearchImg1,
      title: "Development of a P, PI, and PID-controlled device",
      summary: "Analyzes flow regulation in a T-shaped cavity using P, PI, and PID controllers. PID controllers are most effective in eliminating errors and oscillations.",
      doi: "10.13140/RG.2.2.12519.21924",
      researchgate: "https://www.researchgate.net/publication/372430150_Development_of_a_P_PI_and_PID-controlled_device_for_regulating_velocity_relative_to_concentration_in_a_T-shaped_cavity_with_cylindrical_obstruction"
    },
    {
      id: 2,
      image: ResearchImg2,
      title: "CSP Plant Cogeneration Cycle",
      summary: "Examines the sCO2 Brayton cycle for higher efficiency and compactness in CSP plants, using solar energy for power and waste heat for refrigeration.",
      doi: "10.13140/RG.2.2.29986.24006",
      researchgate: "https://www.researchgate.net/publication/383946073_Development_and_analysis_of_a_CSP_Concentrated_Solar_Power_plant_cogeneration_cycle_for_the_simultaneous_production_of_electric_power_by_using_Supercritical_CO2_as_working_fluid_and_low_temperature_re"
    },
    {
      id: 3,
      image: ResearchImg3,
      title: "Modeling Sustainable Challenges to Waste Reduction",
      summary: "Uses the Best-Worst Method to assess sustainability in food industries, identifying key drivers and barriers to reducing food waste.",
      journal: "Supply Chain Insider",
      doi: "10.13140/RG.2.2.30476.12166",
      researchgate: "https://www.researchgate.net/publication/383001021_Supply_Chain_Insider_MODELING_SUSTAINABLE_CHALLENGES_TO_WASTE_REDUCTION_IN_THE_FOOD_INDUSTRY"
    }
  ],
  projects: [
    {
      id: 1,
      image: ProjectImg1,
      title: "Auto Temperature Detector & Entrance Monitoring System",
      description: "Developed a system for temperature detection and entrance monitoring to ensure COVID-19 safety.",
      researchgate: 'https://www.researchgate.net/publication/376893638_Auto_Temperature_Detector_and_Monitoring_Human_Entrance_For_maintaining_Covid-19_Safety',
      video: 'https://www.youtube.com/watch?v=your-video'
    },
    {
      id: 2,
      image: ProjectImg2,
      title: "Shell and Tube Heat Exchanger",
      description: "Designed and manufactured a shell and tube heat exchanger, applying knowledge in heat transfer and thermodynamics.",
      researchgate: 'https://www.researchgate.net/publication/376889302_Design_of_Shell_and_Tube_Heat_Exchanger',
      video: 'https://www.youtube.com/watch?v=your-video'
    }
  ],
  artworks: [
    {
      id: 1,
      image: ArtworkImg1, // Add artwork image
      title: "Artistic Work 1",
      description: "A creative exploration of abstract forms using color theory and geometric design.",
      link: 'https://www.behance.net/anusreesen'
    },
    {
      id: 2,
      image: ArtworkImg2, // Add artwork image
      title: "Artistic Work 2",
      description: "An experiment in visual storytelling through modern digital illustration techniques.",
      link: 'https://www.behance.net/anusreesen'
    }
  ]
}

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Explore My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Research Works Section */}
        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Research Works</h3>
          <div className="portfolio__items">
            {data.researchWorks.map(({id, image, title, summary, doi, journal, researchgate}) => (
              <div key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4 className="portfolio__item-title">{title}</h4>
                <p className="portfolio__item-summary">{summary}</p>
                {doi && <p className="portfolio__item-doi">DOI: {doi}</p>}
                {journal && <p className="portfolio__item-journal">Journal: {journal}</p>}
                <div className="portfolio__item-cta">
                  {researchgate && (
                    <a href={researchgate} className='btn' target='_blank' rel='noopener noreferrer'>
                      <FaResearchgate className='portfolio__item-icon' />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Projects</h3>
          <div className="portfolio__items">
            {data.projects.map(({id, image, title, description, researchgate, video}) => (
              <div key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4 className="portfolio__item-title">{title}</h4>
                <p className="portfolio__item-description">{description}</p>
                <div className="portfolio__item-cta">
                  <a href={researchgate} className='btn' target='_blank' rel='noopener noreferrer'>
                    <FaResearchgate className='portfolio__item-icon' />
                  </a>
                  {video && <a href={video} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                    <FaVideo className='portfolio__item-icon' />
                  </a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artworks Section */}
        <div className="portfolio__section">
          <h3 className="portfolio__section-title">Artworks</h3>
          <div className="portfolio__items">
            {data.artworks.map(({id, image, title, description, link}) => (
              <div key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4 className="portfolio__item-title">{title}</h4>
                <p className="portfolio__item-description">{description}</p>
                <div className="portfolio__item-cta">
                  <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>
                    <FaBehance className='portfolio__item-icon' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
