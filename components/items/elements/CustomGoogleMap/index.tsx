import { GoogleAPI, GoogleApiWrapper, Map } from 'google-maps-react';

export const CustomGoogleMap = () => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <div>
      <Map google={GoogleAPI} style={mapStyles} initialCenter={{ lat: 9.761927, lng: 79.95244 }} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKrCHuYKL5B_ba1xHkhaRVHMfEqgTxkOw',
})(CustomGoogleMap);
