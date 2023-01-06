import React from "react";
import "../Maps/Maps.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Maps({ mapData }) {
  return (
    <MapContainer
      center={[mapData?.latitude, mapData?.longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapData?.latitude, mapData?.longitude]}>
        <Popup>
          <h4 className="h4">
            <b>{mapData?.venueName}</b>
          </h4>
          <h4>Venue State : {mapData?.venueState}</h4>
          <h4>Venue Type : {mapData?.venueType}</h4>
          
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
