import React from "react";
import testgif from "../assets/testgif.gif";
import "./LandingAni.scss";

function LandingAni() {
  return (
    <div className="w-60 d-flex align-items-center justify-content-center">
      <img src={testgif} alt="testgif" className="head_animation" />
    </div>
  );
}

export default LandingAni;
