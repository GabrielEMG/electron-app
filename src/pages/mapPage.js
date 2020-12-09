import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -39.82608613542645,
    longitude: -73.23936686767578,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZ2Vtb2xpbmFnIiwiYSI6ImNraWhwOXk5djBwem8yeXM1Y3Y2cnliNmkifQ.JcwC2Ubxl-EN0sNaWrPj_Q"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/gemolinag/ckihq3sy36dmq19p9vmtzts8b"
      >
        {/* Markers and Popup will go here */}
      </ReactMapGL>
    </div>
  );
};

export default Map;
