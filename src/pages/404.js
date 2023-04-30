import React from "react";
import { Helmet } from "react-helmet";
import "../components/styles/Hero.css";
import { motion as m } from "framer-motion";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>TJ Ayoub • 404</title>
      </Helmet>
      <m.h1
        className="tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
      >
        <span slot="title" className="hero">
          <span className="holder">
            <span className="holder-content">Oops!</span>
          </span>
        </span>
      </m.h1>
      <m.div
        className="wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.55, ease: "easeOut" }}
      >
        <p className="center">
          <div className="subtitle" style={{ marginBottom: "2rem" }}>
            You must've taken that wrong turn at Albuquerque.
          </div>
          <a href="/" class="button">
            Home
          </a>
        </p>
      </m.div>
    </div>
  );
}

export default NotFound;
