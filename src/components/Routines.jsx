import React, { useEffect, useState } from 'react';
import getRoutines from './utils';
import SingleRoutine from './SingleRoutine';

// note that michael had this formatted as a function, but I'm adjusting to a const

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const [page, setPage] = useState(0);
  // console.log(routines);
  console.log('routines', routines);

  useEffect(async () => {
    const results = await getRoutines();
    // divide the results into sections of 50
    function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
      }
      return res;
    }
    const chunkedResults = sliceIntoChunks(results, 50);
    console.log('chunked results', chunkedResults);
    setRoutines(chunkedResults);

    setPage(0);
    console.log(page);
    // console.log(routines);
  }, []);

  return (
    <div>

      <h1>IM A FAKE ROUTINES PAGE 2 :D</h1>

      {routines.length !== 0 ? routines[0].map((routineA) => (
        <SingleRoutine routine={routineA} />
      )) : null }

    </div>

  );
};

export default Routines;
