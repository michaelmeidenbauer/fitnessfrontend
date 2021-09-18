import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { store } from '../helpers/state';
import loginUser from '../helpers/api';

function LoginRegister() {
  const { state, dispatch } = useContext(store);
  const { isLoggedIn } = state;
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [loginResponseText, updateLoginResponseText] = useState('');
  // const [isRegisterPage, updateIsRegisterPage] = useState(false);
  useEffect(() => console.log('state: ', state), [state]);
  const submitHandler = async (event) => {
    event.preventDefault();
    const { error, token } = await loginUser(username, password);
    if (!error) {
      dispatch({
        type: 'setToken',
        value: token,
      });
      dispatch({
        type: 'updateIsLoggedIn',
        value: true,
      });
    } else {
      updateLoginResponseText(error);
    }
  };

  if (isLoggedIn) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <Container>
      {/* {
        <>
        isRegisterPage
          ? (
            <h1>Register</h1>
          )
          : (
            <h1>Login</h1>
            <p>Don't have an account?</p>
          )
          </>
      } */}
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={(e) => {
              updateUsername(e.target.value);
            }}
          />
          <FormHelperText id="my-helper-text">Make it good!</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            aria-describedby="password-helpler-text"
            type="password"
            onChange={(e) => {
              updatePassword(e.target.value);
            }}
          />
          <FormHelperText id="password-helpler-text">Must be at least 8 characters.</FormHelperText>
        </FormControl>
        <br />
        <Button type="submit" onClick={submitHandler}>Login</Button>
      </FormGroup>
      <p>
        {loginResponseText}
      </p>
    </Container>
  );
}

export default LoginRegister;
