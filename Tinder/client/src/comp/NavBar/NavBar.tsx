import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen:boolean) => () => {
    setOpen(isOpen);
  };

  const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/AboutUs' },
    { label: 'Profile', link: '/Profile' },
  ];

  return (
    <AppBar
    position="fixed"
    sx={{
      top: 'auto',
      bottom: 0,
      backgroundColor: 'rgb(22, 7, 36)',
      width: '100%',
      marginLeft: 0,
    }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }}>
        Your Logo
      </Typography>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          {navLinks.map((link, index) => (
            <ListItem button key={index} component="a" href={link.link}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <List sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px', marginLeft: 'auto' }}>
        {navLinks.map((link, index) => (
          <ListItem key={index} component="a" href={link.link}>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
