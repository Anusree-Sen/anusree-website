import React from 'react'
import CV from '../../assets/Anusree_CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA