import React, { useState } from "react";
import mapStyles from "../styles/mapStyles";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { getFromStorage } from "../lib/storage-tools";

// google maps libraries to be enabled
export const libraries = ["places"];

// map container style options
const mapContainerStyle = {
  width: "min(100%, 640px)",
  boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
  height: "50vh",
};

// default map center
export const center = {
  lat: 52.125058,
  lng: -106.650718,
};

// extra map options
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };

/**
 * Function to render a google map component with markers placed on it.
 * Other markers are fetched from the local storage.
 * @param {markers} : Destination address object
 * @return {JSXComponent} : Map component rendered with markers for different addresses
 */
const Maps = ({ markers }) => {
  const [directions, setDirections] = useState();
  // load and configure google maps component from @react-google-maps/api
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const service = new google.maps.DirectionsService();
  // list of {lat, lng} for markers | initial marker is the destination address
  const marks = [markers.geometry.location];
  // fetch other addresses from local storage
  const object = getFromStorage("placeOrder");
  const wayPoints = [];
  object.map((o) => {
    marks.push(o.Address.geometry.location);

    // add all locations except destination address as waypoints
    if (o !== object[0]) {
      wayPoints.push({
        location: o.Address.geometry.location,
        stopover: true,
      });
    }
  });

  service.route(
    {
      origin: marks[1],
      destination: markers.geometry.location,
      waypoints: wayPoints,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === "OK" && result) {
        setDirections(result);
      }
    }
  );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={options}
    >
      {/* place each marker on the map */}
      {marks.map((mark, index) => (
        <>
          <Marker
            key={index}
            position={mark}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
          {index == 0 ? (
            // Info Box to label the destination address
            <InfoBox
              key={index}
              position={markers.geometry.location}
              options={infoBoxOptions}
            >
              <div
                style={{
                  backgroundColor: "black",
                  opacity: 0.75,
                  lineHeight: 1.35,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <p style={{ fontSize: 16, color: "white" }}>Destination</p>
              </div>
            </InfoBox>
          ) : (
            // Info Box to label the pickup addresses
            <InfoBox key={index} position={mark} options={infoBoxOptions}>
              <div
                style={{
                  backgroundColor: "white",
                  opacity: 0.75,
                  lineHeight: 1.35,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                <div style={{ fontSize: 16, color: "black" }}>Pickup</div>
              </div>
            </InfoBox>
          )}
        </>
      ))}

      <DirectionsRenderer
        directions={directions}
        options={{
          polylineOptions: {
            zIndex: 50,
            strokeColor: "#1976D2",
            strokeWeight: 5,
          },
        }}
      />
      {/* Info Box to signify the destination address marker */}
    </GoogleMap>
  );
};

export default Maps;
