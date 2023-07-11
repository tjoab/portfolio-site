import React, { useEffect, useState } from "react";
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 575);
      setIsMobileScreen(window.innerWidth < 465);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="socialHolder">
      <m.div
        className="socialGrid"
        initial={{ opacity: 0, y: -20, transform: "translate3d(0, 0, 0)" }}
        animate={{ opacity: 1, y: 0, transform: "translate3d(0, 0, 0)" }}
        transition={{ delay: 0.5, duration: 0.55, ease: "easeOut" }}
      >
        <a
          href="https://www.linkedin.com/in/tj-ayoub/"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "1 / 5 / 1 / span 1"
              : "1 / 2 / 1 / span 1",
          }}
        >
          <FaLinkedinIn
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
        <a
          href="https://twitter.com/0xtjoab"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "1 / 6 / 1 / span 1"
              : "1 / 3 / 1 / span 1",
          }}
        >
          <FaTwitter
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/tjoab/"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "1 / 7 / 1 / span 1"
              : "1 / 4 / 1 / span 1",
          }}
        >
          <FaInstagram
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
        <a
          href="https://medium.com/@tj.ayoub"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "2 / 5 / 2 / span 1"
              : "1 / 5 / 1 / span 1",
          }}
        >
          <FaMediumM
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
        <a
          href="https://500px.com/p/tjoab?view=photos"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "2 / 6 / 2 / span 1"
              : "1 / 6 / 1 / span 1",
          }}
        >
          <Fa500Px
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
        <a
          href="https://github.com/tjoab"
          rel="nofollow noreferrer"
          target="_blank"
          className="socialLink"
          style={{
            gridArea: isMobileScreen
              ? "2 / 7 / 2 / span 1"
              : "1 / 7 / 1 / span 1",
          }}
        >
          <FaGithub
            style={{
              width: "100%",
              height: "100%",
              padding: isSmallScreen ? "0.7rem" : "1rem",
            }}
          />
        </a>
      </m.div>
    </div>
  );
}

export default Socials;
