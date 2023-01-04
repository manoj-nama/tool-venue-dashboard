import React from "react";
import "../Maps/Maps.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Maps() {
  return (
    <MapContainer
      center={[-37.790545, 145.170181]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-37.790545, 145.170181]}>
        <Popup>
          <h4>
            <b>Donvale</b>
          </h4>
          <p>Venue Type : Agency</p>
          <p>Phone : 145.170181</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
