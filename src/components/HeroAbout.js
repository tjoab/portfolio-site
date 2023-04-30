import React from "react";
import "./styles/Hero.css";
import Me from "../resources/me.jpg";
import { motion as m } from "framer-motion";

function HeroAbout() {
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
            <span className="holder-content">About myself.</span>
          </span>
        </span>
      </m.h1>
      <m.div
        className="details"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
      >
        <div className="me">
          <div className="me-content">
            <div style={{ display: "contents" }}>
              <m.figure
                className="hero-img-wrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
              >
                <img
                  src={Me}
                  alt="Photo of TJ"
                  width="384"
                  height="575"
                  loading="lazy"
                  class="hero-img"
                ></img>
              </m.figure>
            </div>
          </div>
        </div>
        <div className="blurb">
          <h2 className="intro">
            I work with math, computers &amp; cameras. Based in Toronto, Canada.
          </h2>
          <p className="blurb-content">
            I was born in 1999 and grew up in the digital age, fascinated by
            computers and technology. As a young person, I spent hours exploring
            the internet trying to understand how things worked.
          </p>
          <p className="blurb-content">
            Now, I am pursuing a master's degree in statistics at the University
            of Toronto, after completing my undergrad in applied mathematics. I
            am most interested in machine learning, coming up with tools and
            methods that can help better harness insights from data and drive
            innovation forward.
          </p>
          <p className="blurb-content">
            I also enjoy playing around with web design and work as a freelance
            photographer and videographer.
          </p>
        </div>
      </m.div>
    </>
  );
}
export default HeroAbout;
