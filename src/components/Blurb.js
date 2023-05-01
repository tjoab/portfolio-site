import React from "react";
import "./styles/Blurb.css";

function Blurb(props) {
  const texts = props.texts;

  return (
    <div style={{ display: "contents" }}>
      <div className="blurbGrid">
        <div className="blurbGridItem">
          {texts.map((text) => (
            <p
              className="blurbP"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blurb;
