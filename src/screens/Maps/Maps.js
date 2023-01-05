import React from "react";
import "../Maps/Maps.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Maps({ cordinates }) {
  return (
    <MapContainer
      center={[cordinates?.latitude, cordinates?.longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[cordinates?.latitude, cordinates?.longitude]}>
        <Popup>
          <h4 className="h4">
            <b>Donvale</b>
          </h4>
          <h4>Venue Type : Agency</h4>
          <h4>Phone : 145.170181</h4>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
