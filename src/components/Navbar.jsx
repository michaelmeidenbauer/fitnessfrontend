/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { store } from '../helpers/state';

function Navbar() {
  const { state, dispatch } = useContext(store);
  const { isLoggedIn, username } = state;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutUser = () => {
    dispatch({
      type: 'setToken',
      value: null,
    });
    dispatch({
      type: 'updateIsLoggedIn',
      value: false,
    });
    dispatch({
      type: 'setUsername',
      value: null,
    });
  };
  const navBarStyle = {
    backgroundColor: 'lightgrey',
    textDecoration: 'none',
    paddingBottom: '.5em',
    paddingTop: '.5em',
    fontFamily: 'sans-serif',
    boxShadow: '0px 5px 5px rgba(91, 86, 86, .2)',
  };
  const navLinkStyle = {
    color: 'black',
    textDecoration: 'none',
  };
  return (
    <Grid
      container
      justifyContent="space-around"
      style={navBarStyle}
    >
      <Button>
        <Link
          to={{
            pathname: '/',
          }}
          style={navLinkStyle}
        >
          Home
        </Link>
      </Button>
      <Button>
        <Link
          to={{
            pathname: '/routines',
          }}
          style={navLinkStyle}
        >
          Routines
        </Link>
      </Button>
      <Button>
        <Link
          to={{
            pathname: '/routines/me',
          }}
          style={navLinkStyle}
        >
          My routines
        </Link>
      </Button>
      <Button>
        <Link
          to={{
            pathname: '/activities',
          }}
          style={navLinkStyle}
        >
          Activities
        </Link>
      </Button>
      <>
        {
          isLoggedIn
            ? (
              <>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {username}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={logOutUser}>Logout</MenuItem>
                </Menu>
              </>
            )
            : (
              <Button>
                <Link
                  to={{
                    pathname: '/login',
                  }}
                  style={navLinkStyle}
                >
                  Login
                </Link>
              </Button>
            )
        }
      </>
    </Grid>
  );
}

export default Navbar;
