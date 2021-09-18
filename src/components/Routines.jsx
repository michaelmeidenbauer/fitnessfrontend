import React, { useEffect, useState } from 'react';
import getRoutines from './utils';
import SingleRoutine from './SingleRoutine';

// note that michael had this formatted as a function, but I'm adjusting to a const

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  // console.log(routines);

  useEffect(async () => {
    const results = await getRoutines();
    setRoutines(results);
    console.log(routines);
  }, []);

  return (
    <div>

      <h1>IM A FAKE ROUTINES PAGE 2 :D</h1>
      {routines.map((routineA) => (
        <SingleRoutine routine={routineA} />
      ))}
      ;

    </div>

  );
};

export default Routines;
