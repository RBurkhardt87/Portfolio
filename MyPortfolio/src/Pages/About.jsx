import React from 'react'
import '../Styling/AboutMe.css';
import { Card, ListItem, ListItemText, Divider, Typography, ListSubheader, List } from '@mui/material';

const About = () => {
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
          <Card variant="outlined">
            <div className="list-header">            
              <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
                My Developer DNA:
              </Typography>            
              <ListSubheader style={{ fontStyle: 'italic', fontWeight: 400 }}>
                The Traits Behind the Tech
              </ListSubheader>
              <Divider style={{ marginTop: '0.5rem' }} />
            </div>
            <ListItem>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Passionate
                    </Typography>
                    {" — about building and continuously improving intuitive, people-first applications with clean, accessible interfaces"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Focused
                    </Typography>
                    {" — on thoughtful user experiences and refining the details that improve real-world usability"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Proactive
                    </Typography> 
                    {" — in identifying opportunities to enhance workflows and boost team performance"}     
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Adaptable                      
                    </Typography>
                    {" — in fast-moving, high-pressure settings, swiftly pivoting when needed while maintaining clear communication and smart problem-solving"}
                  </React.Fragment>              
                }
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Creative Collaborator
                    </Typography> 
                    {" — thrives in team environments, enjoys tackling challenges, and brings fresh, functional ideas to life using frontend technologies"}
                  </React.Fragment>             
                }
              />
            </ListItem>
            <Divider variant="inset" />       
          </Card>
        </div>

        <div className='list'>
          <Card variant="outlined">
            <h3>⚙️ My Developer Toolkit</h3>
            
            <ul>
              <li>React -- for building dynamic, component-based UIs</li>
              <li>Spring Boot -- Creting robust backend services</li>
              <li>MySQL -- Relational database management and query integration</li>
              <li>Git & GitHub -- Version control and collaboration</li>
              <li>Postman -- API testing and exploration</li>
              <li>Figma -- Wireframing and basic UI mockups</li>
              <li>Slack -- Team communication and collaboration</li>
            </ul>
            <p>NOTES: add Netlify once I learn to deploy applications</p>
          </Card>
        </div>
      </div>
      <div className='lists-container'>
        <div className='list'>
          <Card variant="outlined">
            <div className='list-header'>
              <ListItemText 
                primary="Languages"
              /> 
            </div>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>CSS3</li>        
            </ul>
          </Card>
        </div>

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
