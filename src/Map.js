import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    return (
      <MapContainer center={[33.7057882182573, 72.95713172238948]} zoom={15} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
        </Marker>
      </MapContainer>
    );
  }
  
  export default MapComponent;