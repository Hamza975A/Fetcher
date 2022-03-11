import React from "react";
import mapStyles from "../styles/mapStyles";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
} from "@react-google-maps/api";
import { getFromStorage } from "../lib/storage-tools";

// google maps libraries to be enabled
const libraries = ["places"];

// map container style options
const mapContainerStyle = {
  width: "60%",
  boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
  height: "50vh",
};

// default map center
const center = {
  lat: 52.125058,
  lng: -106.650718,
};

// extra map options
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const infoBoxOptions = { closeBoxURL: "", enableEventPropagation: true };

/**
 * Function to render a google map component with markers placed on it.
 * Other markers are fetched from the local storage.
 * @param {markers} : Destination address object
 * @return {JSXComponent} : Map component rendered with markers for different addresses
 */
const Maps = ({ markers }) => {
  // load and configure google maps component from @react-google-maps/api
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  // list of {lat, lng} for markers | initial marker is the destination address
  const marks = [markers.geometry.location];

  // fetch other addresses from local storage
  const object = getFromStorage("placeOrder");
  object.map((o) => {
    marks.push(o.Address.geometry.location);
  });

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
          <Marker key={index} position={mark} />
          {index == 0 ? (
            // Info Box to label the destination address
            <InfoBox
              position={markers.geometry.location}
              options={infoBoxOptions}
            >
              <div style={{ backgroundColor: "orange", opacity: 0.75 }}>
                <div style={{ fontSize: 16, color: "black" }}>Destination</div>
              </div>
            </InfoBox>
          ) : (
            // Info Box to label the pickup addresses
            <InfoBox position={mark} options={infoBoxOptions}>
              <div style={{ backgroundColor: "orange", opacity: 0.75 }}>
                <div style={{ fontSize: 16, color: "black" }}>Pickup</div>
              </div>
            </InfoBox>
          )}
        </>
      ))}

      {/* Info Box to signify the destination address marker */}
    </GoogleMap>
  );
};

export default Maps;
