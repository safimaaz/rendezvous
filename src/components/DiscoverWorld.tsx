import { Box, Grid2, Grid, Button, Typography } from "@mui/material";
import eventImg from "../assets/event1.png";
import eventImg2 from "../assets/event2.png";
import eventImg3 from "../assets/event3.png";

interface Event {
  id: number;
  img: string;
  title: string;
}

const DiscoverWorld: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      img: eventImg,
      title: 'Online Events',
    },
    {
      id: 2,
      img: eventImg2,
      title: 'Physical Events',
    },
    {
      id: 3,
      img: eventImg3,
      title: 'Hybrid Events',
    },
  ];

  return (
    <Box sx={{padding: {xs: '40px 20px', md: '50px 65px'},  flexGrow: 1}}>
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2 size={{sm: 12, lg: 4}}>
            <Typography variant="h1" marginBottom={3}>
                Discover a World of Events Tailored Just for You.
            </Typography>
            <Button variant="contained" color="secondary" >See all events</Button>
        </Grid2>
        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 8}}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {events?.map(signleEvent => (
                    <Grid item xs={4} sm={8} md={6} key={signleEvent?.id}>
                        <Box sx={{
                            height: {xs: '340px', md:'270px'},
                            width: '100%',
                            borderRadius: '10px',
                            backgroundImage: `url(${signleEvent?.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <Box sx={{
                                width: '100%',
                                height: 'inherit',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: '10px',
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography variant="h6" color="#FFFFFF" >
                                    {signleEvent?.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>        
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DiscoverWorld;
