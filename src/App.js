import Map from "./components/Map";
import Header from "./components/Header";
import react, { useState, useEffect } from "react";
// Main context
import { useMainContext } from "./contexts/context";

function App() {
  // Deconstruct object from context
  const { setEventData, reRenderMarkers } = useMainContext();
  // Set useState for events
  const [eventId, setEventId] = useState(1);
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);

  // Render event
  const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const url = `/netlify/functions/nasa?id=${eventId}`;
      try {
        setLoading(true);
        const event = await fetch(url).then((res) => res.json());
        setEvent(event.title);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [eventId]);

  return (
    <div>
      <Header />
      <Map />
    </div>
  );
}

export default App;
