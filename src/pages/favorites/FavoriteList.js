import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  LinearProgress
} from '@mui/material';
import Favorite from "@mui/icons-material/Favorite";

export default function FavoriteList({ data }) {
const [list, setList] = useState([]);
  useEffect(() => {
  setList(data);
  }, []);
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <List sx={{ bgcolor: 'background.paper' }} >
          {list.length>0?
          list.map((item) => (
            <>
              <ListItem 
              secondaryAction={
                <IconButton edge="end" aria-label="favorite">
                  <Favorite />
                </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar src={item.user.avatar_url} />
                </ListItemAvatar>
                <ListItemText primary={item.user.login} secondary={item.title} />
              </ListItem>             
            </>),):<LinearProgress/>}
        </List>
      </Grid>
    </Grid>
  );
}

