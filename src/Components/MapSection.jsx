import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useGlobalContext } from '../Context';

const MapSection = () => {
  const {cordinates}= useGlobalContext()
  const center = [-0.1, 1];

  return (
    <section id="map-section" className="h-80 bg-red-500 z-10" >
      <MapContainer center={center} zoom={13} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapSection;