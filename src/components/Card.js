import React, { useEffect, useRef } from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { projName, category, imageSrc, bgCol, start, end, workLink } = props;
  const cardBoxRef = useRef(null);

  const styling = {
    background: bgCol,
    gridColumnStart: start,
    gridColumnEnd: end,
  };

  useEffect(() => {
    const updateCardImageSize = () => {
      if (cardBoxRef.current) {
        const cardBoxWidth = cardBoxRef.current.offsetWidth;
        const cardBoxHeight = cardBoxRef.current.offsetHeight;

        const cardImage = document.querySelectorAll(".card-image");

        cardImage.forEach((cardImage) => {
          cardImage.style.maxWidth = `${cardBoxWidth}px`;
        });
      }
    };

    window.addEventListener("resize", updateCardImageSize);
    updateCardImageSize();

    return () => {
      window.removeEventListener("resize", updateCardImageSize);
    };
  }, []);

  return (
    <div className="card-box" style={styling} ref={cardBoxRef}>
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
