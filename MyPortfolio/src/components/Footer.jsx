import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            
            <h6>© {new Date().getFullYear()} My Portfolio by <a href="/about-me">Rachel Burkhardt</a> </h6>
        </footer>
    </div>
  )
}

export default Footer