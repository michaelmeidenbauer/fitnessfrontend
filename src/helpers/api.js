/* eslint-disable import/prefer-default-export */
const apiPath = 'http://fitnesstrac-kr.herokuapp.com/api/';
const loginUser = async (username, password) => {
  const body = {
    username,
    password,
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const fetchResult = await fetch(`${apiPath}users/login`, config);
  const json = await fetchResult.json();
  return json;
};

export default loginUser;
