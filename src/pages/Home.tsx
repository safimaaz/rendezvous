import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import { BASE_URL } from "../config";
import HomeHeroSection from "../components/HomeHeroSection";
import TrendingEvents from "../components/TrendingEvents";
import DiscoverWorld from "../components/DiscoverWorld";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  address: string;
  organizer: {
    name: string;
    email: string;
    twitterUrl?: string;
    instagram?: string;
  };
  imageUrl: string;
  description: string;
  price: number;
  lat?: number;
  long?: number;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getEvents = async (type?: string, search?: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${type ? `events/search/${type}` : `events`}`, {
        params: { search },
      });
      setEvents(response?.data?.data?.allEvents || []);
      console.log("response : ", response);
    } catch (err) {
      console.log("err : ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Layout>
        <HomeHeroSection getEvents={getEvents} />
        <TrendingEvents events={events} isLoading={isLoading} />
        <DiscoverWorld />
      </Layout>
    </>
  );
};

export default Home;
