import React from 'react'
import '../Styling/AboutMe.css';
import { Card, ListItem, ListItemText, Divider, Typography, ListSubheader, List } from '@mui/material';
import ListCard from '../components/ListCard';
import ContactCard from '../components/ContactCard';
import AboutImage from '../components/AboutImage';
import AboutMeCard from '../components/AboutMeCard';

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
      <Typography sx={{ color: 'orangered', fontWeight: 'bold', fontSize: '30px', marginTop: '15px' }}>
          Learn About Me ...
      </Typography>
      <Typography sx={{ padding: "20px"}}>
      For over a decade, I worked in <b>customer service</b> and <b>management</b> —serving, bartending, and eventually stepping into both bar and floor manager roles. The real turning point came when I became the bar manager at The Shamrock. Wanting to help the business grow, I took the initiative to build its online presence—launching social media accounts and even designing a website.</Typography>
      
      <Typography sx={{ padding: "20px" }}> What started as a creative side project quickly lit a fire in me.
        <br /> I realized I loved the process—problem solving, designing, and <br /> bringing something to life online.
      </Typography> 

      <div className='lists-container'> 
      
      <AboutImage />
      <AboutMeCard />
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
          {/* <ContactCard /> */}
        </div>           
      </div>         
    
  )
}

export default About
