import React from "react";
import "./styles/Arrow.css";
import { Link } from "react-router-dom";

function Arrow(props) {
  const { left, link } = props;

  return (
    <Link to={link} className={left ? "arrow left" : "arrow"}>
      <i></i>
      <svg className="svg">
        <use xlinkHref="#circle"></use>
      </svg>
    </Link>
  );
}

export default Arrow;
