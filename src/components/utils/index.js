export default async function getRoutines() {
  const response = await fetch(
    'http://fitnesstrac-kr.herokuapp.com/api/routines',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const routines = await response.json();
  return routines;
}
