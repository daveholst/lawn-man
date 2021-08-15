import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { Box, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Auth from '../utils/authUtils';

const NavBar = ({ loginOnClick, isAuthenticated }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      opacity: 0.8,
      fontFamily: 'Nunito ',
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 600,
      color: 'white',
    },
  }));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    Auth.logout();
  };
  const handleLogin = () => {
    handleClose();
    loginOnClick();
  };

  return (
    <>
      <AppBar className={classes.appbar} position="sticky" elevation={0}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit" underline="none">
              Lawn Manager
            </Link>
          </Typography>
          <Box mr={-3}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link underline="none" href="/dashboard" color="inherit">
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            </Link>
            <Link underline="none" href="/fertilisers" color="inherit">
              <MenuItem onClick={handleClose}>Fertilisers</MenuItem>
            </Link>
            <Link underline="none" href="/create-fertigate" color="inherit">
              <MenuItem onClick={handleClose}>Fertigate</MenuItem>
            </Link>

            {isAuthenticated ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>Login</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

NavBar.propTypes = {
  loginOnClick: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default NavBar;
