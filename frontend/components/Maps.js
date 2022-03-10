import React from "react";
import mapStyles from "../styles/mapStyles";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Maps;
