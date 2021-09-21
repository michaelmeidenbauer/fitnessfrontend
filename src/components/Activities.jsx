/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Loading from './Loading';
import ListActivity from './ListActivity';
import Search from './Search';
import { sliceIntoChunks } from '../helpers/data';
import { getAllActivities } from '../helpers/api';
import { store } from '../helpers/state';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [displayActivities, setDisplayActivities] = useState([]);
  const { state } = useContext(store);
  const { isLoggedIn } = state;
  const [page, setPage] = useState(0);

  useEffect(async () => {
    const results = await getAllActivities();
    setActivities(results);
    const chunkedResults = sliceIntoChunks(results, 50);
    setDisplayActivities(chunkedResults);
    setPage(0);
  }, []);
  if (!displayActivities.length && !activities.length) {
    return (
      <Loading />
    );
  }
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Search
            searchItem="activities"
            thingsToSearch={activities}
            updateWithResult={setDisplayActivities}
          />
        </Grid>
      </Grid>
      <>
        {
        isLoggedIn
          ? (
            <Grid marginTop={3} textAlign="center">
              <Link
                to={{
                  pathname: '/activities/new',
                }}
                style={{ 'text-decoration': 'none' }}
              >
                <Button variant="outlined" endIcon={<Add />}>New Activity</Button>
              </Link>
            </Grid>
          )
          : null
      }
      </>
      <Grid container>
        {
          displayActivities.length
            ? (
              displayActivities[page].map((activity) => (
                <Grid item xs={12} md={4}>
                  <ListActivity
                    key={activity.id}
                    activity={activity}
                  />
                </Grid>
              ))
            )
            : (
              <h1>No results :(</h1>
            )
        }
      </Grid>
    </Container>
  );
};

export default Activities;
