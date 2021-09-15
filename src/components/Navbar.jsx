import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Navbar() {
  return (
    <Typography>
      <Link href="/">
        Home
      </Link>
      <Link href="/routines" variant="body2">
        Routines
      </Link>
      <Link href="/routines/me" variant="body2">
        My routines
      </Link>
      <Link href="/activities" variant="body2">
        Activities
      </Link>
      <Link href="login" variant="body2">
        Login
      </Link>
    </Typography>
  );
}

export default Navbar;
