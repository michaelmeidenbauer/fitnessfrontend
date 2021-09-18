/* eslint-disable import/prefer-default-export */
const apiPath = 'http://fitnesstrac-kr.herokuapp.com/api/';
export const loginUser = async (username, password) => {
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

export const createUser = async (username, password) => {
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

  const fetchResult = await fetch(`${apiPath}users/register`, config);
  const json = await fetchResult.json();
  return json;
};

export const getAllActivities = async () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const fetchResult = await fetch(`${apiPath}activities`, config);
  const json = await fetchResult.json();
  return json;
};
