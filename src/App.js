import Map from "./components/Map";
import Header from "./components/Header";
import react, { useState, useEffect } from "react";
// Main context
import { useMainContext } from "./contexts/context";

function App() {
  // Deconstruct object from context
  const { setEventData, reRenderMarkers } = useMainContext();
  const [loading, setLoading] = useState(false);

  // Render event
  const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingState(true);

    }
  }, [])

  return (
    <div>
      <Header />
      <Map />
    </div>
  );
}

export default App;
