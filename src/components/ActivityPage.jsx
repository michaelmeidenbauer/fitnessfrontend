/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllActivities, getAllActivityRoutines } from '../helpers/api';
import Loading from './Loading';

const ActivityPage = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);
  const [activityRoutines, setActivityRoutines] = useState(null);
  console.log('activity: ', activity);
  useEffect(async () => {
    const allActivities = await getAllActivities();
    const [targetActivity] = allActivities.filter((returnedActivity) => returnedActivity.id === Number(activityId));
    const fetchedActivityRoutines = await getAllActivityRoutines(activityId);
    console.log('routines: ', fetchedActivityRoutines);
    setActivity(targetActivity);
    setActivityRoutines(fetchedActivityRoutines);
  }, []);
  if (!activity) {
    return (
      <Loading />
    );
  }
  return (
    <Container>
      <h1>
        Activity:
        {' '}
        {activity.name}
      </h1>
      <h3>
        Description:
        {' '}
        {activity.description}
      </h3>
      <>
        {
                    (activityRoutines && activityRoutines.length)
                      ? (
                        <>
                          <h4>Routines featuring this activity:</h4>
                          {
                                    activityRoutines.map((routine) => (
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                          <Typography>
                                            <Link
                                              to={{
                                                pathname: `/routines/${routine.id}`,
                                              }}
                                            >
                                              {routine.name}
                                            </Link>
                                            {' '}
                                            by
                                            {' '}
                                            {routine.creatorName}
                                          </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                          <Typography>
                                            {
                                                        routine.activities.map((routineActivity, index) => {
                                                          const currentStep = index + 1;
                                                          return (
                                                            <div>
                                                              <strong>
                                                                Step
                                                                {' '}
                                                                {currentStep}
                                                                :
                                                              </strong>
                                                              <p>
                                                                Activity:
                                                                {' '}
                                                                {routineActivity.name}
                                                              </p>
                                                              <p>
                                                                Description:
                                                                {' '}
                                                                {routineActivity.description}
                                                              </p>
                                                              {
                                                                        routineActivity.duration
                                                                          ? (
                                                                            <p>
                                                                              Duration:
                                                                              {' '}
                                                                              {routineActivity.duration}
                                                                            </p>
                                                                          )
                                                                          : null
                                                                    }
                                                              {
                                                                        routineActivity.count
                                                                          ? (
                                                                            <p>
                                                                              Count:
                                                                              {' '}
                                                                              {routineActivity.count}
                                                                            </p>
                                                                          )
                                                                          : null
                                                                    }
                                                            </div>
                                                          );
                                                        })
                                                    }
                                          </Typography>
                                        </AccordionDetails>
                                      </Accordion>
                                    ))
                                }
                        </>
                      )
                      : null
                }
      </>
    </Container>
  );
};

export default ActivityPage;
