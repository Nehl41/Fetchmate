import * as React from 'react';
import {Card,CardActionArea,Typography,CardContent,CardMedia, CardActions,Button} from '@mui/material'

export default function MediaCard({petImage,petName,petUniqueId}) {
  return (
    <Card sx={{ maxWidth: 245, marginLeft: '0.5rem'}}>
    <CardActionArea sx={{minHeight:"10rem"}}>
      <CardMedia
        sx={{maxHeight: "20rem", maxWidth: "20rem"}}
        image={petImage}
        component='img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {petName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {petUniqueId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}