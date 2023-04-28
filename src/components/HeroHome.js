import React from "react";
import "./styles/Hero.css";
import StarIcon from "../resources/star-1.svg";

function HeroHome() {
  return (
    <>
      <h1 className="tight">
        <span slot="title" className="hero">
          <span className="holder">
            <span className="holder-content">
              Hi. I'm TJ.
              <span className="right-star">
                <figure className="star">
                  <img src={StarIcon} alt=""></img>
                </figure>
              </span>
            </span>
          </span>
          <span className="holder">
            <span className="holder-content">
              A Data Scientist.
              <span className="left-star">
                <figure className="star">
                  <img src={StarIcon} alt=""></img>
                </figure>
              </span>
            </span>
          </span>
        </span>
      </h1>
      <div className="wrapper">
        <p className="center">
          <div className="subtitle">
            At school, I learnt a lot about how to problem solve and think
            creatively, applying various skillsets to both real-wold and
            abstract applications. Aside from studying, I enjoy playing around
            with front-end web design and occasionally work as a freelance
            photographer/videographer.
          </div>
        </p>
      </div>
    </>
  );
}
export default HeroHome;
