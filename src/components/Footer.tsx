import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2'; 
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box sx={{
        padding: {xs: '40px 20px', md: '50px 65px'},
        backgroundColor: "#432361"
    }}>
      <Grid container spacing={2} columns={{xs: 4, md: 12}}>
        <Grid size={{xs: 4, md: 5, lg: 5}}>
            <Typography color="#fff" variant="h4">
                rendezvous
            </Typography>
            <Typography color="#fff" variant="body1" component={"p"} sx={{paddingRight: {sm: 0, md: '25px'} }}>
                Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
            </Typography>
        </Grid>
        <Grid size={{ xs: 4, md: 2, lg: 2}}>
            <Typography color="#fff" variant="h5" component="h4">
                Feature
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="Events discovery" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Ticketing" sx={{color: '#fff'}} />
                </ListItem>
            </List>
        </Grid>
        <Grid size={{ xs: 4, md: 2, lg: 2}}>
            <Typography color="#fff" variant="h5" component="h4">
                Company
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="About Us" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="FAQs" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Careers" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Support" sx={{color: '#fff'}} />
                </ListItem>
            </List>
        </Grid>
        <Grid size={{ sm: 4, md: 3, lg: 3}}>
            <Typography color="#fff" variant="h5" component="h4">
                Contact Us
            </Typography>
            <List>
                <ListItem disablePadding>
                    <ListItemText primary="info@events.com" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="+234 701 345 6789" sx={{color: '#fff'}} />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos" sx={{color: '#fff'}} />
                </ListItem>
            </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
