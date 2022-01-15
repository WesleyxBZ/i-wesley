import React from "react";
import Navbar from "./navbar";
import StartContent from "./start-content";

import "./styles.css";

const Start = () => {
  return (
    <div id="start" className="gradient-image">
      <Navbar />
      <StartContent />
    </div>
  );
};

export default Start;
