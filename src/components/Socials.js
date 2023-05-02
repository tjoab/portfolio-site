import React from "react";
import "./styles/Socials.css";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  Fa500Px,
  FaMediumM,
  FaGithub,
} from "react-icons/fa";
import { motion as m } from "framer-motion";

function Socials() {
  return (
    <div className="socialHolder">
      <div className="socialGrid">
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          href="https://www.linkedin.com/in/tj-ayoub/"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 2 / 1 / span 1" }}
        >
          <FaLinkedinIn
            style={{ width: "100%", height: "100%", padding: "1rem" }}
          />
        </m.a>
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.675, duration: 0.5, ease: "easeOut" }}
          href="https://twitter.com/0xtjoab"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 3 / 1 / span 1" }}
        >
          <FaTwitter
            style={{ width: "100%", height: "100%", padding: "1rem" }}
          />
        </m.a>
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          href="https://www.instagram.com/tjoab/"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 4 / 1 / span 1" }}
        >
          <FaInstagram
            style={{ width: "100%", height: "100%", padding: "1rem" }}
          />
        </m.a>
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.825, duration: 0.5, ease: "easeOut" }}
          href="https://medium.com/@tj.ayoub"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 5 / 1 / span 1" }}
        >
          <FaMediumM
            style={{ width: "100%", height: "100%", padding: "1rem" }}
          />
        </m.a>
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
          href="https://500px.com/p/tjoab?view=photos"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 6 / 1 / span 1" }}
        >
          <Fa500Px style={{ width: "100%", height: "100%", padding: "1rem" }} />
        </m.a>
        <m.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.975, duration: 0.5, ease: "easeOut" }}
          href="https://github.com/tjoab"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{ gridArea: "1 / 7 / 1 / span 1" }}
        >
          <FaGithub
            style={{ width: "100%", height: "100%", padding: "1rem" }}
          />
        </m.a>
      </div>
    </div>
  );
}

export default Socials;
