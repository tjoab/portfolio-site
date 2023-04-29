import React from "react";
import "./styles/Hero.css";
import StarIcon from "../resources/star-1.svg";
import { motion as m } from "framer-motion";

function HeroHome() {
  return (
    <>
      <m.h1
        className="tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
      >
        <span slot="title" className="hero">
          <span className="holder">
            <span className="holder-content">
              Hi. I'm TJ.
              <m.span
                className="right-star"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
              >
                <figure className="star">
                  <img src={StarIcon} alt=""></img>
                </figure>
              </m.span>
            </span>
          </span>
          <span className="holder">
            <span className="holder-content">
              A Data Scientist.
              <m.span
                className="left-star"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
              >
                <figure className="star">
                  <img src={StarIcon} alt=""></img>
                </figure>
              </m.span>
            </span>
          </span>
        </span>
      </m.h1>
      <m.div
        className="wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
      >
        <p className="center">
          <div className="subtitle">
            I am a creative at heart and love to tell stories through
            unconventional mediums. From data analysis and model building to
            photography and creative coding.
          </div>
        </p>
      </m.div>
    </>
  );
}
export default HeroHome;
