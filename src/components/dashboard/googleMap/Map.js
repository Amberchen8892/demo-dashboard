import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '50vh',
  width: '100%' };
// const defaultCenter = {
//   lat: 41.3851, lng: 2.1734
// };

const Map = (props) => {
  const { address1, zipcode, city } = props;
  const [customerLat, setCustomerLat] = useState();
  const [customerLng, setCustomerLng] = useState();
  const location = `${address1}  ${city}  ${zipcode}`;
  const geoCode = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: process.env.REACT_APP_GOOGLE_API_KEY
      }
    })
      .then((response) => {
        console.log(response.data.results[0].geometry.location);
        // const formattedData = response.data.results[0].geometry.location;
        setCustomerLat(response.data.results[0].geometry.location.lat);
        setCustomerLng(response.data.results[0].geometry.location.lng);
        // console.log(lat);
        // console.log(lng);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const customerPosition = {
    lat: parseFloat(customerLat),
    lng: parseFloat(customerLng)
  };
  useEffect(() => {
    geoCode();
  }, [geoCode, setCustomerLat, setCustomerLng]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,

  });
  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Map';
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={customerPosition}
    >
      <Marker position={customerPosition} />
    </GoogleMap>
  );
};
export default Map;
