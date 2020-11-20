import React from 'react';
import GoogleMapReact from 'google-map-react';

export const Map = ({ center, zoom }) => {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA9VfevGfBvOar-1a6EbRFgJNuEa_4M580' }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
