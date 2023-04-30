import React from "react";
import TC from "./styles/TimelineCard.module.css";

function TimelineCard(props) {
  const { company, title, time, row, columnSpan } = props;

  return (
    <div style={{ display: "contents" }}>
      <div
        className="timeline"
        style={{
          gridColumn: columnSpan,
          gridRow: row,
          color: "hsla(158, 23%, 18%, 1)",
          background: "hsla(160, 52%, 71%, 1)",
          padding: "1rem 1.5rem",
          borderRadius: "4rem",
          position: "relative",
          overflow: "hidden",
          display: "grid",
        }}
      >
        <div className={TC.content}>
          <div className={TC.work}>
            <div className={TC.company}>{company}</div>
            <div className={TC.title}>{title}</div>
          </div>
          <div className={TC.time}>{time}</div>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
