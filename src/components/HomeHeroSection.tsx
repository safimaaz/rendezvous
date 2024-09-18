import React, { useState } from "react";
import { Box, Button, FormControl, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import bgImg from "../assets/home-hero-image2.png";
import Navbar from "./Navbar";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface HomeHeroSectionProps {
  getEvents: (type: string, search: string) => void;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ getEvents }) => {
  const [search, setSearch] = useState<string | null>(null);
  const [type, setType] = useState<string>('category');


  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',            
      }}
    >
      <Box maxWidth='xl' sx={{ padding: { xs: '40px 20px', md: '50px 65px' } }}>
        <Navbar bgColor="rgba(255, 255, 255, 0.6)" />
        <Box sx={{ marginTop: { xs: '26vh', md: '50vh', lg: '58vh' } }}>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent={"space-between"}            
          >
            <Box sx={{ marginBottom: { xs: '15px', md: '0' }, width: { xs: '100%', sm: '600px' } }}>
              <Typography variant="h1" component="h2" fontWeight={700} color="#FFFFFF">
                Ready to Rock? Discover the Hottest Events Here - Your Calendar's New Best Friend!
              </Typography>
            </Box>
            <Box>
              <Box sx={{ background: '#FFFFFF', borderRadius: '20px', padding: { xs: '18px', md: '24px' } }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 2 }} alignItems={"center"}>
                  <Box>
                    <TextField
                      id="input-with-icon-textfield"
                      placeholder="Search for an event"
                      value={search ?? ''}
                      onChange={(e) => setSearch(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: { xs: '100%', md: 'auto' } }}
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ borderLeft: '2px solid #E0E0E0' }}></Box>
                  <Box sx={{ width: { xs: '100%', md: '210px' } }}>
                    <FormControl fullWidth variant="outlined">
                      <Select
                        value={type}
                        onChange={(e) => setType(e.target.value as string)}
                      >
                        <MenuItem value="" disabled>
                          <em>Select an option</em>
                        </MenuItem>
                        <MenuItem value="category">Category</MenuItem>
                        <MenuItem value="title">Title</MenuItem>
                        <MenuItem value="location">Location</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box>
                    <Button 
                      onClick={() => getEvents(type, search ?? '')} 
                      variant="contained" 
                      color="secondary"
                      disabled={!search} 
                      sx={{ width: { xs: '100%', md: 'auto' }, padding: { xs: '15px 7px', md: '15px 24px' } }}
                    >
                      Search
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>        
      </Box>
    </Box>
  );
};

export default HomeHeroSection;
