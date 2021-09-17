import React from 'react';
import PropTypes from 'prop-types';

const SingleRoutine = ({ routine }) =>
// activities
// activities name
// description
// duration or count
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div className="card">
      <h3>Name: </h3>
      <h3>{routine.name}</h3>
      Goal:
      {routine.goal}
      {routine.activities.map((activity) => (

        <div>
          {activity.name}
          Desc:
          {activity.description}
          Count:
          {activity.count}
        </div>
      ))}

    </div>
  );

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
