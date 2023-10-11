import React from "react";
import "./styles/Blurb.css";
import { motion as m } from "framer-motion";

function Blurb(props) {
  const texts = props.texts;

  return (
    <div style={{ display: "contents" }}>
      <div className="blurbGrid">
        <div className="blurbGridItem">
          {texts.map((text) => (
            <m.p
              className="blurbP"
              dangerouslySetInnerHTML={{ __html: text }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
            ></m.p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blurb;
