
import { Grid} from '@mui/material';
import RepositoryCard from './RepositoryCard';


export default function RepositoryList({ data }) {

  return (
    <Grid container spacing={3} >
      {data.items?
        data.items.map((repo) => (         
          <Grid key={repo.id} item xs={12} sm={6} md={3}>
            <RepositoryCard  data={repo} />
          </Grid>
        )):null}
    </Grid>
  );
}

