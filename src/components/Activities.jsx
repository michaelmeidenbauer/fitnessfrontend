/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import SingleActivity from './SingleActivity';
import { sliceIntoChunks } from '../helpers/data';
import { getAllActivities } from '../helpers/api';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(routines);
  console.log('activities', activities);

  useEffect(async () => {
    const results = await getAllActivities();
    console.log('fetched activities: ', results);
    // divide the results into sections of 50
    const chunkedResults = sliceIntoChunks(results, 50);
    setActivities(chunkedResults);
    setPage(0);
  }, []);
  if (!activities.length) {
    return (
      <Loading />
    );
  }
  return (
    <div>
      <h1>IM A FAKE activities PAGE 2 :D</h1>
      {
        activities[page].map((activity) => (
          <SingleActivity
            activity={activity}
          />
        ))
      }
    </div>
  );
};

export default Activities;
