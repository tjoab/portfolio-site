import React, { useEffect, useState } from "react";
import TS from "./styles/Timeline.module.css";
import TimelineCard from "./TimelineCard";

function Timeline() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 560);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={TS.timelineHolder}>
      <div className={TS.timelineGrid}>
        <TimelineCard
          company="University of Toronto"
          title="Graduate Teaching Assistant"
          time="'22~"
          row="1 / 1"
          columnSpan={isSmallScreen ? "10/span 15" : "16/span 9"}
        />
        <TimelineCard
          company="Western University"
          title="Computer Algebra Researcher"
          time="'21"
          row="2 / 2"
          columnSpan={isSmallScreen ? "6/span 13" : "8/span 7"}
        />
        <TimelineCard
          company="Maplesoft"
          title="Software Developer"
          time="'20"
          row="3 / 3"
          columnSpan={isSmallScreen ? "2/span 10" : "2/span 7"}
        />
        <TimelineCard
          company="Freelance"
          title="Photography, Videography, Design"
          time="'20~"
          row="4 / 4"
          columnSpan="3/span 22"
        />
      </div>
    </div>
  );
}

export default Timeline;
