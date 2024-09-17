import React from 'react'
import CV from '../../assets/Souvik_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA