import React from 'react'
import { Tabs, Tab, Box, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';



const Navbar = () => {
   

    const location = useLocation(); 
    const path = location.pathname; 

    function getTab() {
        if (path === "/home") {
            return "one";
        }
        else if (path === "/about-me") {
            return "two"
        }
        else if (path === "/projects") {
            return "three";
        }
        else if (path === "/resume") {
            return "four";
        }
    } 


  return (
    
        <div className="nav-bar">
            <Box sx={{
                        display: "flex",
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        padding: "10px 20px",                                                             
                    }}
            >                
                <Typography
                    variant="h6"
                    sx={{
                    color: "white",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                    }}
                >
                    My Portfolio Page
                </Typography>
                <Tabs
                    value={getTab()}
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "rgb(240, 63, 9)" } }}
                    variant="scrollable"
                    scrollButtons="on"
                    allowScrollButtonsMobile
                    sx={{
                        width: "100%",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        "& .MuiTabs-flexContainer": {
                        justifyContent: "flex-end", 
                        },
                        "@media (max-width: 768px)": {
                        "& .MuiTabs-flexContainer": {
                            justifyContent: "flex-start",
                        },
                        },
                    }}
                >
                    <Tab                         
                        value="one" 
                        label="Home" 
                        component={Link} 
                        href="/home" 
                        sx={{ 
                            color: "white", 
                            "&.Mui-selected": { 
                              color: "rgb(240, 63, 9)",
                            }
                            }}
                    />
                    <Tab 
                        value="two" 
                        label="About Me" 
                        component={Link}
                        href="/about-me"
                        sx={{ 
                            color: "white", 
                            "&.Mui-selected": { 
                              color: "rgb(240, 63, 9)",
                            }
                            }}
                    />
                    <Tab 
                        value="three" 
                        label="Projects" 
                        component={Link}
                        href="/projects"
                        sx={{ 
                            color: "white", 
                            "&.Mui-selected": { 
                              color: "rgb(240, 63, 9)",
                            }
                            }} 
                    />
                    <Tab 
                        value="four" 
                        label="Resume" 
                        component={Link}
                        href="/resume"
                        sx={{ 
                            color: "white", 
                            "&.Mui-selected": { 
                              color: "rgb(240, 63, 9)",
                            }
                            }}
                    />
                </Tabs>
            </Box> 
        </div>
      
      
    
  )
}

export default Navbar