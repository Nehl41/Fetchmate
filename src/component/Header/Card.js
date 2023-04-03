import './Card.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card1img from '../../Image/card1img.jpg'
import card2img from '../../Image/card2img.jpg'
import card3img from '../../Image/finalimg3.jpg'

const card = () => {
    return(
       <div className='container spacing-2'>
      <div className='card-div'>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={card1img}
            alt="Adorable environment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
             Reliable and trustworthy Community
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Fetchmate connects pet owners with reliable and trustworthy temporary pet sitters in their local area.
            The application undergo background checks and assessments to ensure that they have 
            the necessary experience, knowledge and skills to provide high-quality pet care.
            This means that pet owners can have peace of mind knowing that their 
            pets are being cared for by someone who equally loves and adore them.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={card2img}
            alt="Happy-pet-dog"
            height={245}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Stress-free environment
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The services provided by Fetchmate are all provided in the homely comfort environment.
            This can help reduce the stress that pets can experience in unfamiliar surroundings.<br/>Additionally, 
            using Fetchmate means that pet owners don't have to worry about 
            their pets are pet being exposed to any unfamiliar or potentially harmful environments.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={card3img}
            alt="Dog-walking"
            height={225}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Personalized and loving
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Fetchmate provides personalized and loving pet care that owners would themselves provide 
            if they were at home. This includes dog walking, daily visits, 24-hour care for days or weeks,
            administration of medications, and emergency treatment in case of illness. By using Fetchmate, 
            pet owners can ensure that their pets receive the attention and care they need while they are away.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
       </div>
    );
}

export default card;