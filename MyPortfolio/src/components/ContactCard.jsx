import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, Typography, ListSubheader, List, Button } from '@mui/material';



const ContactCard = () => {

    const title = "Let's Connect";
    const subTitle = "Got a project idea, job opportunity, or just want to chat about tech? Let's talk!";
    const items = [
        { icon: <GitHubIcon />, text: "GitHub", link: "https://github.com/RBurkhardt87" },
        { icon: <LinkedInIcon />, text: "LinkedIn", link: "https://www.linkedin.com/in/rachel-burkhardt-097900339/" },
        { icon: <EmailIcon />, text: "Email", link: "mailto:r.burkhardt.ibclc@gmail.com" },
        { icon: <FileCopyIcon />, text: "Resume", link: "/resume" },
    ]


  return (
    <div>
    <Card 
        variant="outlined" 
        sx={{ 
            width: "450px", 
            height: '400px', 
            border: '3px solid rgb(18, 51, 92)', 
            borderRadius: '10px', 
            backgroundColor: "rgba(163, 209, 198, 0.43)" 
        }}
    >
        <div className="list-header">            
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'light', color: 'orangered' }}>
                { title }
            </Typography> 
            <ListSubheader sx={{ fontWeight: 550, fontSize: '16px', backgroundColor: "rgba(152, 164, 158, 0.43)" }}>
                { subTitle }
            </ListSubheader>
        </div>

        <List>                    
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '5px' }}>
                        <Button
                            href={item.link}
                            target={item.link.includes("http") ? "_blank" : ""}
                            sx={{
                                display: 'flex',         
                                flexDirection: 'column', 
                                alignItems: 'center',    
                                justifyContent: 'center',
                                margin: '0',
                                width: '50px',  
                                height: '50px', 
                                borderRadius: '50%',
                                backgroundColor: 'rgb(18, 51, 92)', 
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#004C8C',
                                },
                            }}
                        >
                            {item.icon && (
                                <span>{item.icon}</span>  
                            )}
                        </Button>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 300, marginTop: '0.5rem' }}>
                            {item.text}
                        </Typography>
                    </div>
                ))}
            </div>
            
            <br />
            <Typography variant="h3" component="h2" sx={{ textAlign: 'center', color: '#3D8D7A' }}>
                Rachel Burkhardt
            </Typography>
        </List>          
    </Card>
</div>

  )
}

export default ContactCard
