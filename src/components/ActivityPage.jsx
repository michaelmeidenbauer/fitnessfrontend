/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const ActivityPage = () => {
  const { activityId } = useParams();
  console.log('activity id is: ', activityId);
  return (
    <h1>
      Activity id:
      {activityId}
    </h1>
  );
};

export default ActivityPage;
