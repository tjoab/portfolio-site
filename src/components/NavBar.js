import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/NavBar.css";

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

  return (
    <nav id="navbar">
      <ul className={scrolled ? "glass" : ""}>
        <li>
          <Link
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
      <div
        className="background"
        style={{
          "--left": `${activeLinkPosition.left}px`,
          "--width": `${activeLinkPosition.width}px`,
        }}
      ></div>
    </nav>
  );
}

export default NavBar;
