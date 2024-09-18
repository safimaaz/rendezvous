import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import { formatDate, formatTime } from '../helpers/helpers';
import { useNavigate } from 'react-router-dom';
import CustomLoader from './CustomLoader';

interface Event {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

interface TrendingEventsProps {
  events: Event[];
  isLoading: boolean;
}

const TrendingEvents: React.FC<TrendingEventsProps> = ({ events, isLoading }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, padding: {xs: '40px 20px', md: '50px 65px'} }}>
        <Stack sx={{textAlign: 'center'}} direction={{xs: "column", md: "row"}} justifyContent={{xs: "center", md: "space-between"}} mb={5}>
            <Typography variant="h1">Trending events</Typography>
            <Button variant="text" color="secondary" endIcon={<CallMadeOutlinedIcon />}>
                View all trending events
            </Button>
        </Stack>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {isLoading ? <CustomLoader /> :
                events?.map((event) => (
                    <Grid size={{xs: 12, sm: 12, md: 6, lg: 4}} key={event?.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="240"
                                image={event?.imageUrl}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h5">
                                {event?.title}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="p">
                                {formatDate(event?.date)} . {formatTime(event?.time)}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', height: '55px', overflow: 'hidden' }}>
                                    {event?.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="text" onClick={() => navigate(`/view-event/${event?.id}`)} color="secondary" endIcon={<CallMadeOutlinedIcon />}>Share</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
  );
}

export default TrendingEvents;
