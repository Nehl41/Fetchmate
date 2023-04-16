import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({listIccon,serviceTitle,subserviceTitle,subservicedis}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',color: 'black', ":hover":{color:'black',textDecoration: 'none'}}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={listIccon} />
        </ListItemAvatar>
        <ListItemText
          primary={serviceTitle}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
              >
                {subserviceTitle}
              </Typography>
              {subservicedis}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}