// import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'

export const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map(ev => {
    if(ev.categories[0].id === 8){
      return  <LocationMarker lat={ev.geometeries[0].coordinates[1]} lng={ev.geometeries[0].coordinates[0]} />
    }
    return null
  })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA9VfevGfBvOar-1a6EbRFgJNuEa_4M580' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
         {markers}
      </GoogleMapReact>
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
