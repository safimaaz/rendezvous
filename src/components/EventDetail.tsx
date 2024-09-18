import React, { useEffect, useState } from 'react';
import { Box, Button, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Map from './Map';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';
import { formatDate, formatTime } from '../helpers/helpers';
import CustomLoader from './CustomLoader';
import Navbar from './Navbar';

interface Organizer {
  name: string;
  email: string;
  twitterUrl?: string;
  instagram?: string;
}

interface Event {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  address: string;
  organizer: Organizer;
  description: string;
  price: number;
  lat: number;
  long: number;
}

const EventDetail: React.FC = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const getEventById = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/events/${id}`);
      setEvent(response?.data?.data?.event);
    } catch (err) {
      console.error('Error fetching event:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEventById();
  }, [id]);

  return (
    <Box
        sx={{
            padding: {xs: '40px 20px', md: '50px 65px'},
            width: "100%",
        }}
    >
        <Navbar />
        {isLoading ? <CustomLoader /> : (
            <>
                <Box mt={3}>
                    <img src={event?.imageUrl} width={"100%"} alt="event-image" />
                </Box>
                <Box>
                    <Grid container marginTop={3}>
                        <Grid size={{sm: 12, md: 7, lg: 8}}>
                            <Typography variant="h2">
                                {event?.title}
                            </Typography>
                            <Stack direction={"row"} marginTop={2}>
                                <Typography variant="body1">
                                <CalendarTodayOutlinedIcon sx={{marginRight: '10px', fontSize: '16px'}} color="secondary" />
                                {formatDate(event?.date ?? '')} 
                                </Typography>
                                <Typography variant="body1" marginLeft={3}>
                                    <AccessTimeOutlinedIcon sx={{marginRight: '10px', fontSize: '16px'}} color="secondary" />
                                    {formatTime(event?.time ?? '')}
                                </Typography>
                            </Stack>
                            <Typography variant="body1">
                                <FmdGoodOutlinedIcon sx={{marginRight: '10px', fontSize: '18px'}} color="secondary" />
                                {event?.address}
                            </Typography>
                            <Typography variant="body1">
                                <PersonOutlineOutlinedIcon sx={{marginRight: '10px', fontSize: '18px'}} color="secondary" />
                                {event?.organizer?.name}
                            </Typography>
                            <Typography variant="h6" marginTop={4}>
                                Event description
                            </Typography>
                            <Typography variant="body1" marginTop={3}>
                                {event?.description}
                            </Typography>
                            <Typography variant="h6" marginTop={3}>
                                Tickets Pricing
                            </Typography>
                            <Stack direction="row" marginTop={3}>
                                <Box>
                                    <Typography variant="h5">Single</Typography>
                                    <Typography variant="h6" marginTop={2} color="secondary">NGN {(event?.price)?.toLocaleString()}</Typography>
                                </Box>
                                <Box marginLeft={4}>
                                    <Typography variant="h5">Pair</Typography>
                                    <Typography variant="h6" marginTop={2} color="secondary">NGN 9,000</Typography>
                                </Box>
                            </Stack>
                            <Button variant="contained" color="secondary" sx={{padding: '8px 34px', marginTop: '35px'}}>Buy Now</Button>
                        </Grid>
                        <Grid marginTop={{xs: 3, md: '0'}} size={{xs: 12, md: 5, lg: 4}}>
                            <Typography variant="h6">Contact Organizers</Typography>
                            <Stack marginTop={2} width={"160px"} direction="row" justifyContent={"space-between"}>
                                <Link href={`mailto:${event?.organizer?.email}`}>
                                    <Box bgcolor={"secondary"} sx={{
                                        height: '32px',
                                        width: '32px',
                                        borderRadius: '38px',
                                        backgroundColor: '#783EAD',
                                        textAlign: 'center',
                                        paddingTop: '3px'
                                    }}>
                                        <EmailIcon sx={{color: '#fff'}}  />
                                    </Box>
                                </Link>
                                <Link href={event?.organizer?.twitterUrl} target="_blank">
                                    <Box bgcolor={"secondary"} sx={{
                                        height: '32px',
                                        width: '32px',
                                        borderRadius: '8px',
                                        backgroundColor: '#783EAD',
                                        textAlign: 'center',
                                        paddingTop: '3px'
                                    }}>
                                        <TwitterIcon sx={{color: '#fff'}}  />
                                    </Box>
                                </Link>
                                <Link href={event?.organizer?.instagram} target="_blank">
                                    <Box bgcolor={"secondary"} sx={{
                                        height: '32px',
                                        width: '32px',
                                        borderRadius: '8px',
                                        backgroundColor: '#783EAD',
                                        textAlign: 'center',
                                        paddingTop: '3px'
                                    }}>
                                        <InstagramIcon sx={{color: '#fff'}}  />
                                    </Box>
                                </Link>
                            </Stack>
                            <Typography variant="h6" marginTop={4}>
                                Directions
                            </Typography>
                            <Box sx={{position: 'relative', height: '430px'}} marginTop={3}>
                                <Map width="100%" lat={event?.lat ?? 13.32862473} lng={event?.long ?? 100.95155334} height="400px" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )}
    </Box>
  );
};

export default EventDetail;
