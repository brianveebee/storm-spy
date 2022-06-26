import React from "react";
import { Icon } from "@iconify/react";

// Creates header container
function Header(props) {
  return (
    <div className="header-bar">
      <div className="icon">
      Storm Spy! <Icon icon= "emojione:magnifying-glass-tilted-right" />
      </div>
    </div>
  );
}

export default Header;