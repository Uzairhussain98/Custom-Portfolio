import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Card.css'
import orbit from '../assets/orbit.png'


export default function MediaCard({ image , title , descripition }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card" onClick={() =>window.open('http://www.google.com')}>
      <CardMedia
        component="img"
        height="140"
        image={image ? image : orbit }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" >
         {descripition}
        </Typography>
      </CardContent>
    
    </Card>
  );
}
