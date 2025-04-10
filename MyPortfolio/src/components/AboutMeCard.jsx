import React from 'react'
import { Card, List, ListItem, ListSubheader, ListItemText, Divider, Typography } from '@mui/material';

const AboutMeCard = () => {
  return (
    <div>
        {/* <Typography sx={{ color: 'orangered', fontWeight: 'bold', fontSize: '30px', marginTop: '15px' }}>
            Learn About Me ...
        </Typography> */}
        {/* <Card
            sx={{
                width: "900px", 
                height: '600px', 
                // border: '3px solid rgb(18, 51, 92)', 
                borderRadius: '10px', 
                backgroundColor: "#F4F4FB",
                
                color: 'rgb(18, 51, 92)'
            }} 
        > */}
            {/* <Typography sx={{ padding: "20px"}}>
            For over a decade, I worked in <b>customer service</b> and <b>management</b> —serving, bartending, and eventually stepping into both bar and floor manager roles. The real turning point came when I became the bar manager at The Shamrock. Wanting to help the business grow, I took the initiative to build its online presence—launching social media accounts and even designing a website. What started as a creative side project quickly lit a fire in me. I realized I loved the process—problem solving, designing, and bringing something to life online.
            </Typography> */}
            <Typography sx={{ padding: "20px"}}>
            From there, I found myself increasingly involved in the technical side of restaurant operations, especially when it came to implementing and maintaining POS systems. I loved seeing how small changes in the interface or workflow could make a huge impact on team efficiency and guest satisfaction.
            </Typography>
            <Typography sx={{ padding: "20px"}}>
            That curiosity—and a desire to create more thoughtful, user-friendly tools—led me to discover LaunchCode. Through the program, I gained hands-on experience with JavaScript, React, Java, Spring Boot, and SQL while working on projects that felt meaningful. My favorite moment? Designing my capstone project with React, where I really fell in love with frontend development and the power of a well-designed UI.
            </Typography>
            <Typography sx={{ padding: "20px"}}>
            Now, I'm excited to continue learning and growing as a developer. My goal is to build applications that are not only functional, but intuitive, engaging, and built with real people in mind.
            </Typography>
            <Typography sx={{ padding: "20px"}}>
            Whether it's helping streamline everyday tasks, crafting better tools for businesses, or just bringing a little joy through design—I'm here for it. 🍸 ➡️ 💻
            </Typography>

        {/* </Card> */}
    </div>
  )
}

export default AboutMeCard

{/* <div className='about-me-story'>
<h1>About Me:</h1>
<br/>
<div>
  <p>For over a decade, I worked in customer service and management—serving, bartending, and eventually stepping into both bar and floor manager roles. The real turning point came when I became the bar manager at The Shamrock. Wanting to help the business grow, I took the initiative to build its online presence—launching social media accounts and even designing a website. What started as a creative side project quickly lit a fire in me. I realized I loved the process—problem solving, designing, and bringing something to life online.</p><br />

  <p>From there, I found myself increasingly involved in the technical side of restaurant operations, especially when it came to implementing and maintaining POS systems. I loved seeing how small changes in the interface or workflow could make a huge impact on team efficiency and guest satisfaction.</p><br />

  <p>That curiosity—and a desire to create more thoughtful, user-friendly tools—led me to discover LaunchCode. Through the program, I gained hands-on experience with JavaScript, React, Java, Spring Boot, and SQL while working on projects that felt meaningful. My favorite moment? Designing my capstone project with React, where I really fell in love with frontend development and the power of a well-designed UI.</p><br />

  <p>Now, I'm excited to continue learning and growing as a developer. My goal is to build applications that are not only functional, but intuitive, engaging, and built with real people in mind.</p><br />

  <p>Whether it's helping streamline everyday tasks, crafting better tools for businesses, or just bringing a little joy through design—I'm here for it. 🍸 ➡️ 💻</p><br />
</div>
</div> */}
