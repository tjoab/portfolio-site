import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/NavBar.css";
import { motion as m } from "framer-motion";

function NavBar() {
  const location = useLocation();
  const [activeLinkPosition, setActiveLinkPosition] = useState({
    left: 0,
    width: 0,
  });
  const [scrolled, setScrolled] = useState(false);

  const handleSetActiveLinkPosition = (linkElement) => {
    const linkRect = linkElement.getBoundingClientRect();
    const navRect = linkElement.closest("nav").getBoundingClientRect();
    setActiveLinkPosition({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleSetActiveLinkPosition(document.querySelector('a[href="/"]'));
  }, []);

  return (
    <m.nav
      id="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.75, duration: 1, ease: "easeOut" }}
    >
      <ul className={scrolled ? "glass" : ""}>
        <li>
          <Link
            id="homeLink"
            to="/"
            onClick={(e) => handleSetActiveLinkPosition(e.target)}
            className={isActive("/") ? "active" : ""}
          >
            Home
            <span className="slash">/</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={(e) => handleSetActiveLinkPosition(e.target)}
            className={isActive("/about") ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/fun"
            onClick={(e) => handleSetActiveLinkPosition(e.target)}
            className={isActive("/fun") ? "active" : ""}
          >
            Fun
          </Link>
        </li>
      </ul>
      <m.div
        className="background"
        style={{
          "--left": `${activeLinkPosition.left}px`,
          "--width": `${activeLinkPosition.width}px`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      ></m.div>
    </m.nav>
  );
}

export default NavBar;
