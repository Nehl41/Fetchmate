import {Card,CardActionArea,Typography,CardContent,CardMedia, CardActions,Button} from '@mui/material'
import { LinkedIn,Instagram,Mail } from '@mui/icons-material';

const FounderCard=({cardImage,cardTitle,cardDescription,linkedInLink,instagramLink}) => {
    return(
        <Card sx={{ maxWidth: "25rem", marginTop: '2rem'}}>
        <CardActionArea sx={{minHeight:"10rem"}}>
          <CardMedia sx={{maxHeight:"20rem"}}
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