/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Loading from './Loading';
import ListActivity from './ListActivity';
import Search from './Search';
import { sliceIntoChunks } from '../helpers/data';
import { getAllActivities } from '../helpers/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [displayActivities, setDisplayActivities] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(routines);
  console.log('activities', activities);

  useEffect(async () => {
    const results = await getAllActivities();
    setActivities(results);
    const chunkedResults = sliceIntoChunks(results, 50);
    setDisplayActivities(chunkedResults);
    setPage(0);
  }, []);
  if (!displayActivities.length) {
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
      <Grid container>
        {
        displayActivities[page].map((activity) => (
          <Grid item xs={12} md={4}>
            <ListActivity
              activity={activity}
            />
          </Grid>
        ))
      }
      </Grid>
    </Container>
  );
};

export default Activities;
