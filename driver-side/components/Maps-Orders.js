import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { libraries, center, options, infoBoxOptions } from "./Maps";

// map container style options
export const mapContainerStyle = {
  width: "100%",
  background: "#4f4f4f",
  borderRadius: "6px",
  boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
};

const MapOrders = ({ destination, orders }) => {
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
  const marks = [destination.geometry.location];

  const wayPoints = [];
  orders.map((o) => {
    marks.push(o.Address.geometry.location);

    // add all locations except destination address as waypoints
    if (o !== orders[0]) {
      wayPoints.push({
        location: o.Address.geometry.location,
        stopover: true,
      });
    }
  });

  service.route(
    {
      origin: marks[1],
      destination: destination.geometry.location,
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
              position={destination.geometry.location}
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

export default MapOrders;
