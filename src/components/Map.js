// Enable use hooks
import React, {useState, useRef, useEffect} from "react";
// Import dependencies
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";


function Map({ center, eventData }) {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="map">
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "" }}
        defaultZoom={ zoom }
        defaultCenter={ center }
      >
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 37.7749,
    lng: 122.4194
  }
}

export default Map;