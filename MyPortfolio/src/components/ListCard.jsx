import * as React from 'react';
import { Card, List, ListItem, ListSubheader, ListItemText, Divider, Typography } from '@mui/material';

export default function ListCard({ title, subTitle, items }) {
  return (

        <div className='lists-container'>
            <div className='list'>
                <Card variant="outlined" 
                    sx={{ border: '3px solid rgb(18, 51, 92)', borderRadius: '10px', backgroundColor: 'rgba(163, 209, 198, 0.43)' }}>
                    <div className="list-header">            
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#3D8D7A' }}>
                            { title }
                        </Typography> 
                        {subTitle && (
                            <ListSubheader sx={{ fontStyle: 'italic', fontWeight: 550, backgroundColor: 'rgba(152, 164, 158, 0.43)', color: '' }}>
                                {subTitle}
                            </ListSubheader>
                        )}            
                        
                    </div>
                    <List>                    
                        {items.map(({ label, text }, index) => (
                        <React.Fragment key={index}>
                            <ListItem>
                                <ListItemText
                                    primary={
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        { label }
                                    </Typography>
                                    }
                                    secondary={
                                    <Typography
                                        component="span"
                                        variant='body2'
                                        sx={{ color: 'text.secondary', display: 'inline'}}
                                    >
                                        { text }
                                    </Typography>
                                    }
                                />
                            </ListItem>
                            {index < items.length - 1 && (
                            <Divider variant="inset" component="li" />
                            )}
                        </React.Fragment>
                        ))}
                    </List>          
                </Card>
            </div>
        </div>    
  );
}