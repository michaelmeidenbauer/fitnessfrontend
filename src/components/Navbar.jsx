/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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
  return (
    <Typography>
      <Link
        to={{
          pathname: '/',
        }}
      >
        Home
      </Link>
      <Link
        to={{
          pathname: '/routines',
        }}
      >
        Routines
      </Link>
      <Link
        to={{
          pathname: '/routines/me',
        }}
      >
        My routines
      </Link>
      <Link
        to={{
          pathname: '/activities',
        }}
      >
        Activities
      </Link>
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
              <Link
                to={{
                  pathname: '/login',
                }}
              >
                Login
              </Link>
            )
        }
      </>
    </Typography>
  );
}

export default Navbar;
