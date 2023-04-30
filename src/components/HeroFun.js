import React from "react";
import "./styles/Hero.css";

function HeroFun() {
  return (
    <>
      <h1 className="tight">
        <span slot="title" className="hero">
          <span className="holder">
            <span className="holder-content">Some Fun.</span>
          </span>
        </span>
      </h1>
      <div className="wrapper">
        <p className="center">
          <div className="subtitle">
            I work with math, computers and cameras. Student and photographer.
            Based in London Ontario.
          </div>
        </p>
      </div>
    </>
  );
}
export default HeroFun;
