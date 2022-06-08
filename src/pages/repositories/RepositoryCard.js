import React, { useState, useEffect } from 'react';

import { 
  Typography, 
  Stack,
  Card, 
  CardMedia, 
  CardActions, 
  IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from "@mui/icons-material/Favorite";
import GitHubIcon from '@mui/icons-material/GitHub';


export default function RepositoryCard({ data }) {
  const [fav, setFav] = useState(false);

  const addingFav = () => {
    localStorage.setItem(data.id, JSON.stringify(data));
  }
  const removeFav = () => {
    localStorage.removeItem(data.id, JSON.stringify(data));
  }

  useEffect(() => {
    {fav ?addingFav() : removeFav()}
  }, [fav]);

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={data.user.avatar_url}
      />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack >
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            {data.user.login}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.light' }}>
            {data.title}
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ p: 1 }}>
        <CardActions >
          {fav &&
            <IconButton onClick={() => { setFav(!fav) }}  >
              <Favorite />
            </IconButton>
          }
          {!fav &&
            <IconButton onClick={() => { setFav(!fav) }} >
              <FavoriteBorderIcon />
            </IconButton>
          }
          <IconButton aria-label="github" href={data.user.html_url}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
}
