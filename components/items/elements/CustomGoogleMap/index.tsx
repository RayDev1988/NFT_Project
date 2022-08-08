import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

export const CustomGoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 47.444,
      lng: -122.176,
    },
    zoom: 11,
  };
  const [position, setPosition] = useState(defaultProps.center);

  console.log(position);

  const mapContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    // Important! Always set the container height explicitly
    <>
      <div style={mapContainer}>
        <div className="map-style">
          <div className="top-search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 search-icon-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="lat-line"></div>
          <div className="lng-line"></div>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBKrCHuYKL5B_ba1xHkhaRVHMfEqgTxkOw' }}
            center={position}
            defaultZoom={defaultProps.zoom}
          />
          <div className="bottom-icon">
            <NearMeOutlinedIcon className="near-me-out-lined-icon" />
          </div>
          <style jsx global>{`
            .gm-fullscreen-control {
              display: none;
            }
            .gm-bundled-control-on-bottom .gmnoprint:nth-child(2) > div {
              box-shadow: none !important;
              background-color: unset !important;
              margin-top: -60px !important;
              margin-left: 5px !important;
            }
            .gm-bundled-control-on-bottom .gmnoprint:nth-child(2) > div button {
              background-color: white !important;
              border-radius: 50%;
              width: 36px !important;
              height: 36px !important;
              margin-top: 5px !important;
            }
            .gm-bundled-control-on-bottom .gmnoprint:nth-child(2) > div div {
              display: none !important;
            }
            .gm-bundled-control-on-bottom .gmnoprint:nth-child(2) > div button img {
              width: 10px !important;
              height: 10px !important;
              color: rgb(150, 150, 150) !important;
            }
          `}</style>
          <LocationSearchInput position={position} setPosition={setPosition} />
        </div>
      </div>
    </>
  );
};

const LocationSearchInput = ({ position, setPosition }) => {
  const [address, setAddress] = useState('');

  const handleChange = (address: any) => {
    setAddress(address);
  };

  const handleSelect = (address: any) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results: any[]) => getLatLng(results[0]))
      .then((latLng: any) => setPosition(latLng))
      .catch((error: any) => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search-side">
          <div className="search-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(120 113 255)"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div style={{ display: 'flex', color: 'rgb(120,120,120)', fontSize: '10px', marginTop: '5px' }}>
              <p style={{ marginRight: '10px' }}>{position.lat}</p>
              <p>{position.lng}</p>
            </div>
          </div>
          <input className="search-input" {...getInputProps({})} />
          <div className="autocomplete-dropdown-container" style={{ paddingTop: '5px' }}>
            {loading && <div>Loading...</div>}
            {suggestions.map(
              (suggestion: {
                active: any;
                description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
              }) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };

                return (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default CustomGoogleMap;
function setPosition(latLng: any) {
  throw new Error('Function not implemented.');
}
