import * as React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


export default function ProjectFeatureCard ({ title, items }) {
  return (
<div>
<div className="list-header">            
    <Typography component="h2" sx={{ fontWeight: 'bold', color: 'orangered', padding: '5px', fontSize: '28px' }}>
        { title }
    </Typography>        
</div>
<List>                   
    {items.map(({ label, text }, index) => (
    <React.Fragment key={index}>
       <ListItem >
        <ListItemText
            sx={{
                padding: 0,
                margin: 0
            }}
        primary={
            <Typography
            component="span"
            variant="body2"
            sx={{ 
                color: 'rgb(18, 51, 92)', 
                display: 'inline', 
                fontWeight: 'bold',
            }}
            >
            
            {label}
            </Typography>
        }
        secondary={
            <Typography
            component="span"
            variant="body2"
            sx={{ 
                color: 'rgb(18, 51, 92)', 
                display: 'inline' 
            }}
            >
            {text}
            </Typography>
        }    
        />
        </ListItem> 
    </React.Fragment>
    ))}
</List>          
</div>



  );
}

