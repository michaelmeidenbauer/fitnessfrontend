import React from 'react';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleActivity = ({ activity }) =>
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
        <Typography variant="h5" component="div">
          <h3>{activity.name}</h3>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {activity.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>

  );

SingleActivity.propTypes = {
  activity: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleActivity;
