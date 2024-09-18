import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link, IconButton, Drawer, List, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  bgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor = '#fff' }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
      return;
    }
    setDrawerOpen(open);
  };

  const linkStyle = {
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#432361',
    '&:hover': { color: '#783EAD' },
  };

  const DrawerContent = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {['Discover', 'About us', 'FAQs', 'Contact us'].map((text) => (
          <ListItemButton key={text} sx={{ textAlign: 'center' }}>
            <ListItemText primary={text} />
          </ListItemButton >
        ))} 
      </List>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <Button sx={linkStyle}>Log in</Button>
        <Button variant="contained" sx={{ backgroundColor: '#5a2d82' }}>Sign up</Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: bgColor, boxShadow: 'none', padding: '12px 24px', borderRadius: '20px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Logo */}
          <Typography onClick={() => navigate('/')} variant="h1" sx={{ cursor: 'pointer', color: '#432361' }}>
            rendezvous
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
            {['Discover', 'About us', 'FAQs', 'Contact us'].map((text) => (
              <Link key={text} href="#" color='secondary' underline="none" sx={linkStyle}>
                {text}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant='text' color='secondary' sx={{ display: { xs: 'none', md: 'block' } }}>Log in</Button>
            <Button variant="contained" color='secondary' sx={{ display: { xs: 'none', md: 'block' } }}>
              Sign up
            </Button>

            <IconButton color="inherit" edge="end" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={toggleDrawer(true)}>
              <MenuIcon color={bgColor === '#fff' ? 'secondary' : 'inherit'} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Navbar;