import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Card.css'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="card" onClick={() =>window.open('http://www.google.com')}>
      <CardMedia
        component="img"
        height="140"
        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    
    </Card>
  );
}
