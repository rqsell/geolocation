import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import GeoLocation from "./GeoLocation";
import getDistance from "./getDistance";
function App() {
  const location = GeoLocation();

  return (
    <div className="App">
      <h1>Location App</h1>
      {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data is not yet available"}
      {getDistance()}
    </div>
  );
}

export default App;
