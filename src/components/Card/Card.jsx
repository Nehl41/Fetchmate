import './Card.css'

import {Card,CardActionArea,Typography,CardContent,CardMedia} from '@mui/material'

const FounderCard=({cardImage,cardTitle,cardDescription}) => {
    return(
        <Card sx={{ maxWidth: 400}}>
        <CardActionArea sx={{minHeight:500}}>
          <CardMedia
            component="img"
            image={cardImage}
            alt="Adorable environment"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            {cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {cardDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default FounderCard