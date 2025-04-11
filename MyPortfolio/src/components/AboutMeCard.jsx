import React from 'react'
import { Typography } from '@mui/material';
import '../Styling/AboutMe.css';



//TODO: Fix the "Learn About Me..." title for smaller screens



const AboutMeCard = () => {
  return (
      <div>      
        <div className='story-container'>
          
          <Typography sx={{ color: 'orangered', fontWeight: 'bold', fontSize: '30px', marginTop: '15px' }}>
            Learn About Me ...
          </Typography>
          <br />
          <Typography >
            For over a decade, I worked in customer service and management—serving, bartending, and eventually stepping into both bar and floor manager roles. The real turning point came when I became the bar manager at <em>The Shamrock</em>. Wanting to help the business grow, I took the initiative to build its online presence—launching social media accounts and even <strong>designing a website</strong>. 
          </Typography>
          <br />
          <Typography>
            What started as a creative side project quickly <em>lit a fire in me</em>. I realized I loved the process—<strong>problem solving</strong>, <strong>designing</strong>, and <em>bringing something to life online</em>.
          </Typography>
          <br />
          <Typography >
            From there, I found myself increasingly involved in the technical side of restaurant operations, especially when it came to <strong>implementing and maintaining POS systems</strong>. I loved seeing how <em>small changes in the interface or workflow could make a huge impact</em> on team efficiency and guest satisfaction.
          </Typography>
          <br />
          <Typography >
            That curiosity—and a desire to create more <strong>thoughtful</strong>, <strong>user-friendly tools</strong>—led me to discover <em>LaunchCode</em>. Through the program, I gained hands-on experience with <strong>JavaScript</strong>, <strong>React</strong>, <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>SQL</strong> while working on projects that felt meaningful. 
          </Typography>
          <br />
          <Typography>
            My favorite moment? Working on my capstone project, where I got to build both the <strong>frontend</strong> and <strong>backend</strong>. It was <strong>designing my project with React</strong>, where I really <em>fell in love with frontend development</em> and the <em>power of a well-designed UI</em>. At the same time, diving into the <strong>backend</strong> and <strong>database</strong> really deepened my appreciation for how all the pieces come together to create seamless, <strong>full-stack applications</strong>.
          </Typography>
          <br />
          <Typography >
            Now, I'm excited to <strong>continue learning and growing as a developer</strong>. My goal is to build applications that are not only functional, but <strong>intuitive</strong>, <strong>engaging</strong>, and <em>built with real people in mind</em>.
          </Typography>
          <br />
          <Typography >
            <em>Whether it's helping streamline everyday tasks</em>, <em>crafting better tools for businesses</em>, or <em>just bringing a little joy through design</em>—<strong>I'm here for it</strong>. 🍸 ➡️ 💻
          </Typography>
          </div>

      </div>
  )
}

export default AboutMeCard


