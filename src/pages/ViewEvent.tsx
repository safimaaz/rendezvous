import React from 'react';
import Layout from "../layouts/Layout";
import EventDetail from '../components/EventDetail';

const ViewEvent: React.FC = () => {
  return (
    <>
      <Layout>
        <EventDetail />
      </Layout>
    </>
  );
}

export default ViewEvent;
