import React from "react";
import "./styles/SkillElement.css";

function SkillElement(props) {
  const { imageSrc, skill, area } = props;

  return (
    <div className="skillElement" style={{ gridArea: area }}>
      <div className="skillContent">
        <div className="skillImgWrap">
          <div style={{ maxWidth: "25px", display: "block" }}>
            <img className="skillImg" src={imageSrc}></img>
          </div>
        </div>
        {skill}
      </div>
    </div>
  );
}

export default SkillElement;
