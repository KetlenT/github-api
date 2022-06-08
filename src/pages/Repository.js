
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Stack,
  Container,
  Typography,
  TablePagination,
  TextField,
  LinearProgress,
  Autocomplete
} from '@mui/material';

import Page from '../components/Page';

import RepositoryList from './repositories/RepositoryList';

import api from '../services/api';

export default function User() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [language, setLanguage] = useState('java');
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setIsloading(true)
    api.get("/search/issues?type=repositories",
      { params: { q: language, per_page: rowsPerPage, page: page } })
      .then((response) => {
        setData(response.data);
        setIsloading(false)
      })
      .catch((err) => {
        console.error(`erro, ${err}`);
      });
  }, [language, rowsPerPage, page]);
  
  return (
    <Page title="Repositories">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ color: 'primary.light' }}>
            Repositories
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={12}>
            <Autocomplete
              id="language"
              options={languages.map((option) => option.language)}
              onChange={(event, value) => setLanguage(value)}
              renderInput={(params) => <TextField {...params} label="language" />}
            />
          </Grid>

          <Grid item xs={12} md={8} lg={12}>

            {isloading ?
              <LinearProgress /> :
              <RepositoryList data={data} />}

            {data.items ?
              <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> : null}

          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
const languages = [
  { language: 'Java' },
  { language: 'JavaScript' },
  { language: 'HTML' },
  { language: 'CSS' },
  { language: 'Python' },
  { language: 'C#' },
  { language: 'TypeScript' },
  { language: 'Shell' },
  { language: 'PHP' },
  { language: 'C++' },]