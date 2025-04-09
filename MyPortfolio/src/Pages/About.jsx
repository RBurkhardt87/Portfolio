import React from 'react'
import '../Styling/AboutMe.css';
import { Card, ListItem, ListItemText, Divider, Typography, ListSubheader, List } from '@mui/material';
import ListCard from '../components/ListCard';

const About = () => {

  const dna = "My Developer DNA:";
  const traits = "The Traits Behind the Tech";
  const dnaItems = [
    { label: "Passionate", text: " — about building and continuously improving intuitive, people-first applications with clean, accessible interfaces" },
    { label: "Focused", text: " — on thoughtful user experiences and refining the details that improve real-world usability" },
    { label: "Proactive", text: " — in identifying opportunities to enhance workflows and boost team performance"},
    { label: "Adaptable", text: " — in fast-moving, high-pressure settings, swiftly pivoting when needed while maintaining clear communication and smart problem-solving"},
    { label: "Creative Collaborator", text: " — thrives in team environments, enjoys tackling challenges, and brings fresh, functional ideas to life using frontend technologies"}
  ];

  const toolkit = "My Developer Toolkit:";
  const tools = "The Tools That Power the Process";
  const toolItems = [
    { label: "React", text: " — for building dynamic, component-based UIs"},
    { label: "Spring Boot", text: " — Creating robust backend services"},
    { label: "MySQL", text: " — Relational database management and query integration"},
    { label: "Git & GitHub", text: " — Version control and collaboration"},
    { label: "Postman", text: " — API testing and exploration"},
    { label: "Figma", text: " — Wireframing and basic UI mockups"}, 
    { label: "Slack & Zoom", text: " — Team communication and collaboration"}, 
    { label: "Netlify", text: " — CURRENTLY AM STARTING ON LEARNING THIS"}
    
  ];

  const languages = "My Developer Languages";
  const syntax = "The Syntax Behind the Systems";
  const languageItems = [
    { label: "JavaScript", text: " — My go-to for building interactive UIs"},
    { label: "Java", text: " — Used in backend services with Spring Boot"},
    { label: "SQL", text: " — Writing queries and managing databases"},
    { label: "HTML5", text: " — Structuring semantic, accessible content"},
    { label: "CSS3", text: " — Styling responsive and consistent layouts"},
  ]



  return (
    <div>
      <div className='about-me-story'>
        <h1>About Me:</h1>
        <br/>
        <div>
          <p>For over a decade, I worked in customer service and management—serving, bartending, and eventually stepping into both bar and floor manager roles. The real turning point came when I became the bar manager at The Shamrock. Wanting to help the business grow, I took the initiative to build its online presence—launching social media accounts and even designing a website. What started as a creative side project quickly lit a fire in me. I realized I loved the process—problem solving, designing, and bringing something to life online.</p><br />

          <p>From there, I found myself increasingly involved in the technical side of restaurant operations, especially when it came to implementing and maintaining POS systems. I loved seeing how small changes in the interface or workflow could make a huge impact on team efficiency and guest satisfaction.</p><br />

          <p>That curiosity—and a desire to create more thoughtful, user-friendly tools—led me to discover LaunchCode. Through the program, I gained hands-on experience with JavaScript, React, Java, Spring Boot, and SQL while working on projects that felt meaningful. My favorite moment? Designing my capstone project with React, where I really fell in love with frontend development and the power of a well-designed UI.</p><br />

          <p>Now, I'm excited to continue learning and growing as a developer. My goal is to build applications that are not only functional, but intuitive, engaging, and built with real people in mind.</p><br />

          <p>Whether it's helping streamline everyday tasks, crafting better tools for businesses, or just bringing a little joy through design—I'm here for it. 🍸 ➡️ 💻</p><br />
        </div>
      </div>

      <div className='lists-container'>
        <div className='list'>
          <ListCard 
            title={ dna }
            subTitle={ traits }
            items={ dnaItems }
          />
        </div>
  
        <div className='list'>
          <ListCard 
            title={ toolkit }
            subTitle={ tools }
            items={ toolItems }
          />
        </div>
     
        <div className='list'>
          <ListCard 
            title={ languages }
            subTitle={ syntax }
            items={ languageItems }
          />
        </div>      
      </div>



      
      





      
      <div>

        <div className='list'>
          <Card variant="outlined">
            <h3>Contact/Follow Me Info:</h3>
            <ul>
              <li><a href="/resume">My Resume</a></li>
              <li><a href="https://github.com/RBurkhardt87">My GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/rachel-burkhardt-097900339/">My LinkedIn</a></li>
              <li>List Contact Info</li>
            </ul>
          </Card>
        </div>
      </div>   
    </div>
  )
}

export default About
