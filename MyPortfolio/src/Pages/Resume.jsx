import React from 'react'
import '../Styling/Resume.css';

const Resume = () => {
  return (
    <div>
      
      <div className='pdf-reader-container'>
        <embed
          src="/RachelBurkhardtResume2025PDF.pdf"
          type="application/pdf"
          width="75%"
          height="600px"
        />
      </div>
      
      <div className='download-link'>        
        <a href="/RachelBurkhardtResume2025PDF.pdf" download>
          Download Resume
        </a>   
      </div>



    </div>
  )
}

export default Resume
