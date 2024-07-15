import React from 'react';
import { MapContainer, TileLayer, Polygon} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const multiPolygon = [
    [
      [33.70, 72.97],
      [33.70, 72.95],
      [33.71, 72.95],
    ],
    [
    [33.712, 72.97],
    [33.714, 72.95],
    [33.72, 72.95],
    ],
  ]

const MapComponent = () => {
    return (
      <MapContainer center={[33.7057882182573, 72.95713172238948]} zoom={15} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <Marker position={[51.505, -0.09]}>
        </Marker> */}
        <Polygon positions={multiPolygon} />
      </MapContainer>
    );
  }
  
  export default MapComponent;