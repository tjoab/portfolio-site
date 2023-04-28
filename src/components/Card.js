import React from "react";
import "./styles/Card.css";

function Card(props) {
  const { projName, category, imageSrc } = props;

  return (
    <a className="card">
      <div className="card-wrap">
        <div className="info">
          <span className="proj-title">{projName}</span>
          <h2>{category}</h2>
        </div>
        <div className="inner">
          <div className="image-holder">
            <figure>
              <img className="card-image" src={imageSrc} alt="imgHolder"></img>
            </figure>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
