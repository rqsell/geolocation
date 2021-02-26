import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import GeoLocation from "./GeoLocation";
function App() {
  const location = GeoLocation();

  const GetDistance = () => {
    let lat1 = 48.8566;
    let lon1 = 2.3522;
    let lat2 = Number(location.coordinates.lat);
    let lon2 = Number(location.coordinates.lng);
    // location.coordinates.longitude;
    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    console.log(lat2);
    return <div> The distance in meters from paris france is {d}</div>;
  };
  return (
    <div className="App">
      <h1>Location App</h1>
      {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data is not yet available"}

      {GetDistance()}
    </div>
  );
}

export default App;
