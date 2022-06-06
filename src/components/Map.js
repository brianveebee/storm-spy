// Enable use hooks
import React, {useState, useRef, useEffect} from "react";
// Import dependencies
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

function Map({center, eventData}) {

  // Set zoom use state
  const [zoom, setZoom] = useState(1);


  // Set map container
  return (
    <div className="map-container">
      <GoogleMapReact>
        bootstrapURLKeys={{key: }}
      </GoogleMapReact>
    </div>
  );
}

// Set default properties for Map
Map.defaultProps = {
  center: {
    lat: 37.7749,
    lng: 122.4194
  }
}

export default Map;