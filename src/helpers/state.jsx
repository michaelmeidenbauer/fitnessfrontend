/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

// Defining the starting point for our state
const initialState = {
  isLoggedIn: false,
  token: null,
  username: null,
  // Add new data to state here
};

// Create context is gonna set the stage, giving us a component that'll
//   contain all of our global data
const store = createContext(initialState);
const { Provider } = store;
// { Provider, Consumer };

// StateProvider is going to pass back a buffed-up version of the provider
const StateProvider = ({ children }) => {
  const [
    // State is gonna contain all of our global data
    state,
    // Dispatch is going to be a function that updates our state
    dispatch,
  ] = useReducer((oldData, action) => {
    // dispatch({
    //   // The type of action we're going to be doing / the branch we want our switch case to take
    switch (action.type) {
      case 'updateIsLoggedIn': {
        const newState = {
          ...oldData,
          isLoggedIn: action.value,
        };
        return newState;
      }

      case 'setToken': {
        const newState = {
          ...oldData,
          token: action.value,
        };
        return newState;
      }

      case 'deleteToken': {
        const newState = {
          ...oldData,
          token: null,
        };
        return newState;
      }

      case 'setUsername': {
        const newState = {
          ...oldData,
          username: action.value,
        };
        return newState;
      }

      case 'deleteUsername': {
        const newState = {
          ...oldData,
          username: null,
        };
        return newState;
      }
      // Add new state-changing methods here

      default:
        throw new Error('No state action provided!');
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
