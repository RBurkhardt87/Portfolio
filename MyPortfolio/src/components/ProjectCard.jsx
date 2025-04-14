import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';



export default function ProjectCard({ coverImage, altName, title, description, projectLink }) {

  return (
    <Card>
      <CardMedia
        component="img"
        alt={ altName }
        height="140"
        image={ coverImage }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            { title }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><a href={ projectLink }>Learn More</a></Button>
      </CardActions>
    </Card>
  );
}