import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            
            <p>© {new Date().getFullYear()} My Portfolio by <a href="/about">Rachel Burkhardt</a> </p>
        </footer>
    </div>
  )
}

export default Footer