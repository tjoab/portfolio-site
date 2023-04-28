import React from "react";
import "./styles/Hero.css";

function HeroAbout() {
  return (
    <h1 className="tight">
      <span slot="title" className="hero">
        <span className="holder">
          <span className="holder-content">I'm TJ.</span>
        </span>
      </span>
    </h1>
  );
}
export default HeroAbout;
