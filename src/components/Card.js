import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Card.css'
import orbit from '../assets/orbit.png'


export default function MediaCard({ image , title , descripition ,link }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card" onClick={() =>window.open( link ? link :'http://www.google.com')}>
      <CardMedia
        component="img"
        height="140"
        image={image ? image : orbit }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" >
         {descripition}
        </Typography>
      </CardContent>
    
    </Card>
  );
}
