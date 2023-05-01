import React from "react";
import "./styles/Hero.css";
import { motion as m } from "framer-motion";

function HeroContact() {
  return (
    <>
      <m.h1
        className="tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
      >
        <span slot="title" className="hero">
          <span className="holder">
            <span className="holder-content">Lets Connect.</span>
          </span>
        </span>
      </m.h1>
      <m.div
        className="wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
      >
        <p className="center">
          <div className="subtitle">
            I would love to hear from you! Whether you're interested in
            collaborating on a project, or just want to chat, let's get the
            conversation started. You can find my social links below, as well as
            a contact form.
          </div>
        </p>
      </m.div>
    </>
  );
}
export default HeroContact;
