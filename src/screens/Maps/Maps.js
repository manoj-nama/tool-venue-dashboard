import React from "react";
import "./Maps.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Maps({ mapData }) {
  return (
    <MapContainer
      center={[mapData?.latitude, mapData?.longitude]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapData?.latitude, mapData?.longitude]}>
        <Popup>
          <strong>{mapData?.venueName}</strong>
          <br /><span>{mapData?.venueState}</span>
          <br /><span>{mapData?.venueType}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
