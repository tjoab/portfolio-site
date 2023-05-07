import React, { useState, useEffect, useRef } from "react";
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
  const lastActiveLinkRef = useRef(null);

  const handleSetActiveLinkPosition = (linkElement) => {
    const linkRect = linkElement.getBoundingClientRect();
    const navRect = linkElement.closest("nav").getBoundingClientRect();
    const linkHref = linkElement.getAttribute("href");

    if (location.pathname.includes(linkHref)) {
      setActiveLinkPosition({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  };

  const handleResize = () => {
    let activeLink = document.querySelector(`a[href="${location.pathname}"]`);
    if (!activeLink) {
      activeLink = document.querySelector(`a[href="/"]`);
    }
    handleSetActiveLinkPosition(activeLink);
  };

  const handleClick = (e) => {
    const isCurrentLink = e.currentTarget.pathname === location.pathname;
    if (isCurrentLink) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleSetActiveLinkPosition(e.target.closest("a"));
    }
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
    let activeLink = document.querySelector(`a[href="${location.pathname}"]`);
    if (!activeLink) {
      activeLink = document.querySelector(`a[href="/"]`);
    }
    handleSetActiveLinkPosition(activeLink);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  return (
    <m.nav
      id="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.75, duration: 1, ease: "easeOut" }}
    >
      <ul className={scrolled ? "glass" : ""}>
        <li>
          <Link to="/" onClick={handleClick}>
            Work
            <span className="slash">/</span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contact
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
