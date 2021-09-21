/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@mui/material/TextField';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { store } from '../helpers/state';
import { createActivity } from '../helpers/api';

const AddActivity = () => {
  const { state } = useContext(store);
  const { isLoggedIn, token } = state;
  const [name, updateName] = useState('');
  const [description, updateDescription] = useState('');
  const [apiResponseText, updateApiResponseText] = useState('');
  const [success, updateSuccess] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { error } = await createActivity(name, description, token);
    if (!error) {
      updateSuccess(true);
    } else {
      updateApiResponseText(error);
    }
  };

  if (success) {
    return (
      <Redirect
        to={{
          pathname: '/activities',
        }}
      />
    );
  }

  return (
    <Container>
      {
      isLoggedIn
        ? (
          <Grid container justifyContent="center">
            <Grid item xs={12} md={4}>
              <FormGroup>
                <FormControl>
                  <Input
                    id="name-input"
                    aria-describedby="name-input-text"
                    onChange={(e) => {
                      updateName(e.target.value);
                    }}
                  />
                  <FormHelperText id="name-input-text">Activity Name</FormHelperText>
                </FormControl>
                <FormControl>
                  <TextField
                    id="outlined-textarea"
                    label="Activity Description"
                    placeholder="Enter activity description here"
                    onChange={(e) => {
                      updateDescription(e.target.value);
                    }}
                    multiline
                  />
                </FormControl>
                <FormControl>
                  <Button type="submit" onClick={submitHandler}>
                    Create activity
                  </Button>
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
        )
        : (
          <>
            <h1>
              You must be logged into create new activities.
            </h1>
            <Link
              to={{
                pathname: '/login',
              }}
              style={{ 'text-decoration': 'none' }}
            >
              Please login.
            </Link>
          </>
        )
    }
      <p>
        {apiResponseText}
      </p>
    </Container>
  );
};

export default AddActivity;
