import './Card.css'

import {Card,CardActionArea,Typography,CardContent,CardMedia, CardActions,Button} from '@mui/material'
import { LinkedIn,Instagram,Mail } from '@mui/icons-material';

const FounderCard=({cardImage,cardTitle,cardDescription,linkedInLink,instagramLink}) => {
    return(
        <Card sx={{ maxWidth: 400}}>
        <CardActionArea sx={{minHeight:500}}>
          <CardMedia sx={{maxHeight:400}}
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
          <CardActions>
            <Button href={linkedInLink} sx={{padding: 0 }} ><LinkedIn/></Button>
            <Button href={instagramLink}><Instagram/></Button>
          </CardActions>
        </CardActionArea>
      </Card>
    );
}

export default FounderCard