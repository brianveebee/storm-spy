import React from "react";
import { Icon } from "@iconify/react";

// Render icons to map based on their id via NASA EONET API
function Marker({ onClick, id }) {
  let renderIcon = null;
  if(id === "wildfires") {
    renderIcon = "emojione:fire";
  } else if(id === "severeStorms") {
      renderIcon = "emojione:cloud-with-lightning-and-rain"; 
  } else if(id === "volcanoes") {
      renderIcon = "emojione:volcano";
  } else if(id === "seaLakeIce") {
      renderIcon = "emojione:snowflake";
  }
  return (
    <div onClick={onClick}>
      <Icon icon={renderIcon} className="icon-marker" />
    </div>
  );
}

export default Marker;