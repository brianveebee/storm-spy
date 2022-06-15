import React, {useContext, useState} from "react";

const mainContext = React.createContext();

// Ensure children of context provider can access values
export function useMainContext() {
  return useContext(mainContext);
}

export function ContextProvider({children}){
  // All NASA EONET data
  const [eventData, setEventData] = useState([]);
  // Stores the event of user selection
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Re-renders event markers updated by user selection
  const [reRenderMarkers, setReRendMarkers] = useState(null);

  // Store in an object
  const value = {
    eventData,
    setEventData,
    selectedEvent,
    setSelectedEvent,
    reRenderMarkers,
    setReRendMarkers
  }

  return (
    <mainContext.Provider value={value}>
      {children}
    </mainContext.Provider>
  )
}