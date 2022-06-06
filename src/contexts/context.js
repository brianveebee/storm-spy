import React, {useContext, useState} from 'react';

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
  // Re-renders event markers updated user selection
  const [reRenderMarkers, setReReMarkers] = useState(null);

  const value = {
    eventData,
    setEventData,
    selectedEvent,
    setSelectedEvent,
    reRenderMarkers,
    setReReMarkers
  }

  return (
    <mainContext.Provider value={value}>
      {children}
    </mainContext.Provider>
  )
}