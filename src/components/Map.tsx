


import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface GoogleMapProps {
  width: string;
  height: string;
  lat?: number;
  lng?: number;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ width, height, lat = 13.32862473, lng = 100.95155334 }) => {
  const containerStyle = {
    width: width,
    height: height,
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey="google_api_key">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        options={{
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
          scaleControl: false,
          streetViewControl: false,
        }}
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;
