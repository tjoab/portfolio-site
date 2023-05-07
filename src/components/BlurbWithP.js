import React from "react";
import "./styles/BlurbWithP.css";
import { motion as m } from "framer-motion";

function BlurbWithP(props) {
  const { texts, title } = props;

  return (
    <div
      style={{ display: "contents" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
    >
      <div className="blurbGrid">
        <div className="blurbGridItem">
          <m.h2
            className="blurbTitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
          >
            {title}
          </m.h2>
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

export default BlurbWithP;
