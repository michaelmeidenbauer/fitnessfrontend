import React from 'react';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleRoutine = ({ routine }) =>
// activities
// activities name
// description
// duration or count
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Card
      variant="outlined"
      sx={{
        width: 275, height: 275, m: 2, display: 'inline-block',
      }}
    >
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Routine
        </Typography> */}
        <Typography variant="h5" component="div">
          <h3>{routine.name}</h3>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {routine.goal}
        </Typography>
        <Typography variant="body2">
          {routine.activities.map((activity) => (

            <div>
              {activity.name}
              Desc:
              {activity.description}
              Count:
              {activity.count}
            </div>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>

  );

// (
//   <div className="card">
//     <h3>Name: </h3>
//     <h3>{routine.name}</h3>
//     Goal:
//     {routine.goal}
//     {routine.activities.map((activity) => (

//       <div>
//         {activity.name}
//         Desc:
//         {activity.description}
//         Count:
//         {activity.count}
//       </div>
//     ))}

//   </div>
// );

SingleRoutine.propTypes = {
  routine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    activities: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })),
  }).isRequired,
};
export default SingleRoutine;
