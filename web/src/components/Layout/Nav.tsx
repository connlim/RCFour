import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn, mySignOut } from '../../firebase/auth';
import { addEvent } from "../../firebase/functions/events/FirebaseEventService";
import { auth } from '../../firebase/init';
import { onAuthStateChanged } from '@firebase/auth';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { selectUser, setUser } from '../../features/user/userSlice';


<<<<<<< HEAD
	auth.onAuthStateChanged( (user) => {
    console.log("state change")
=======

function Nav() {
  


  const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  onAuthStateChanged(auth, (user) => {
>>>>>>> 7f42010d7e060f1b069b1608b5476adfaccfb89e
		dispatch(setUser(user));
		// https://firebase.google.com/docs/reference/js/firebase.User
	});

<<<<<<< HEAD
	return (
		<div>
			Nav Bar
			{user === null ? (
				<button onClick={() => signIn()}>Sign In</button>
			) : (
				<button onClick={() => mySignOut()}>Sign Out</button>
			)}
      <button onClick={() => addEvent()}>Add event</button>
		</div>
	);
};
=======
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
>>>>>>> 7f42010d7e060f1b069b1608b5476adfaccfb89e

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRedirect = (url: string|null) => {
    if (url != null) navigate(url);
  }
  
  const LoggedIn = user?.uid === '';
  const title = "RC4Friends";
  // Logged In
  const tabs = LoggedIn 
    ? ['Add Event']
    : [];
  const tabsClick = LoggedIn
    ? [addEvent]
    : [];
  const settings = LoggedIn
    ? ['Sign Out']
    : ['Sign In'];
  const settingsClick = LoggedIn
    ? [mySignOut]
    : [signIn];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {tabs.map((tab, i) => (
                  <MenuItem 
                    key={i} 
                    onClick={() => {
                      tabsClick[i]();
                      handleCloseNavMenu();
                    }}>
                    <Typography textAlign="center">{tab}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {tabs.map((tab, i) => (
              <Button
                key={i}
                onClick={() => {
                  tabsClick[i]();
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {tab}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, i) => (
                <MenuItem 
                  key={i} 
                  onClick={()=>{
                    settingsClick[i]();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
