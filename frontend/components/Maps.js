import React from "react";
import mapStyles from "../styles/mapStyles";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { getFromStorage } from "../lib/storage-tools";
const libraries = ["places"];
const mapContainerStyle = {
  width: "60%",
  boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
  height: "50vh",
};
const center = {
  lat: 52.125058,
  lng: -106.650718,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

/**
 * Function to render a google map component with markers placed on it.
 * @param {markers} : Destination address
 * @return {JSXComponent} : Map component rendered with markers for different addresses
 */
const Maps = ({ markers }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  const marks = [];

  const object = getFromStorage("placeOrder");
  object.map((o) => {
    marks.push(o.Address.geometry.location);
  });
  // array of {lat: "", lng: ""} items to be used as markers

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
      options={options}
    >
      {marks.map((mark, index) => (
        <Marker key={index} position={mark} />
      ))}
    </GoogleMap>
  );
};

export default Maps;
