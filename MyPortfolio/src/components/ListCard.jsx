import * as React from 'react';
import { Card, List, ListItem, ListSubheader, ListItemText, Divider, Typography } from '@mui/material';

export default function ListCard({ title, subTitle, items }) {
  return (

        <div className='lists-container'>
            <div className='list'>
                <Card variant="outlined" 
                    sx={{ 
                        // border: '3px solid rgb(18, 51, 92)', 
                        borderRadius: '10px', 
                        backgroundColor: 'rgba(231, 205, 220, 0.54)',     
                        width: '100%',          
                        boxSizing: 'border-box', 
                                              
                        }}>

                    <div className="list-header">            
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'orangered', padding: '5px' }}>
                            { title }
                        </Typography> 
                        {subTitle && (
                            <ListSubheader 
                                sx={{ 
                                    fontStyle: 'italic', 
                                    fontWeight: 550, 
                                    backgroundColor: 'rgba(152, 164, 158, 0.43)', 
                                    width: '100%', 
                                    marginRight: 0, 
                                    marginLeft: 0, 
                                    textAlign: 'center',
                                    color: 'rgb(18, 51, 92)'
                                }}>
                                {subTitle}
                            </ListSubheader>
                        )}            
                        
                    </div>
                    <List>                   
                        {items.map(({ label, text }, index) => (
                        <React.Fragment key={index}>
                            <ListItemText
                            primary={
                                <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'rgb(18, 51, 92)', display: 'inline', fontWeight: 'bold' }}
                                >
                                {label}
                                </Typography>
                            }
                            secondary={
                                <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'rgb(18, 51, 92)', display: 'inline' }}
                                >
                                {text}
                                </Typography>
                            }
                            sx={{
                                padding: '10px',
                                
                            }}
                            />
                            {index < items.length - 1 && (
                            <Divider component="li" /> 
                            )}
                        </React.Fragment>
                        ))}
                    </List>          
                </Card>
            </div>
        </div>    
  );
}