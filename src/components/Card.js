import React from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { projName, category, imageSrc, bgCol, start, end, workLink } = props;

  const styling = {
    background: bgCol,
    gridColumnStart: start,
    gridColumnEnd: end,
  };
  return (
    <div className="card-box" style={styling}>
      <Link to={workLink} className="card">
        <div className="card-wrap">
          <div className="info">
            <span className="proj-title">{category}</span>
            <h2>{projName}</h2>
          </div>
          <div className="inner">
            <div className="image-holder">
              <figure>
                <img
                  className="card-image"
                  src={imageSrc}
                  alt="imgHolder"
                  loading="lazy"
                ></img>
              </figure>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
