
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Stack,
  Container,
  Typography,
  LinearProgress,
} from '@mui/material';

import Page from '../components/Page';

import FavoritesList from './favorites/FavoriteList';

export default function Favorites() {
  const [favorites, setFavorites] = useState(Object.keys(localStorage));
  const [list, setlist] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    favorites.map(item => {
      return list.push(JSON.parse(localStorage.getItem(item)));
    })
   
    setIsloading(false);
  }, [favorites,list]);

  return (
    <Page title="Favorites">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ color: 'primary.light' }}>
            Favorites
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={12}>
            {isloading ?
              <LinearProgress /> :
              <FavoritesList data={list} />}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
