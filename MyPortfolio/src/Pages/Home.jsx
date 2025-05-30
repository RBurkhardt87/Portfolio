import React from 'react';



//TODO: Maybe make the navigation bar a hamburger when a screen is smaller so users understand the navigation clearly. Otherwise, or maybe in addition to, there should be a link to "My Projects" and "Resume" from the About Me page just in case user doesn't realize they can swipe through the navbar. 


const Home = () => {
  return (
    <div>        
        <h1>HomePage:</h1>
        <br />
        <br />
        
        <p>Have a picture on the left side</p>
        <br />
        <p>Hi, I'm Rachel Burkhardt—restaurant industry vet turned web developer. I traded cocktails for code, and now I'm serving up clean UI and real-world solutions.</p>
        <br />
        <p>👉 <a href="/about-me">Learn more about me</a></p>  
        <br />
        <p> Here are a couple different header options:</p>
        <br/>
        <ul>
          <li>Aspiring Web Developer | Designing with Purpose, Building with Heart</li>
          <li>Aspiring Web Developer | Purpose-Driven Code, People-Centered Design</li>
          <li>Aspiring Web Developer | Code With Purpose. Design With Empathy</li>
          <li>Aspiring Web Developer with a Passion for Purpose-Driven Design</li>
        </ul>      
     
    </div>
  )
}

export default Home