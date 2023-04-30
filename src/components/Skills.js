import React from "react";
import "./styles/Skills.css";
import SkillElement from "./SkillElement";
import TF from "../resources/TF.png";
import Py from "../resources/pyth.png";
import PT from "../resources/pytor.png";
import R from "../resources/R.png";
import brain from "../resources/brain.png";
import git from "../resources/git.png";
import NN from "../resources/nn.png";
import S from "../resources/stats.png";

function Skills() {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <div className="skillsWrap">
        <div className="skillsGrid">
          <div style={{ display: "contents" }}>
            <SkillElement
              imageSrc={Py}
              area="1 / 5 / 1 / span 7"
              skill="Python"
            />
            <SkillElement imageSrc={R} area="1 / 13 / 1 / span 7" skill="R" />
            <SkillElement
              imageSrc={TF}
              area="1 / 21 / 1 / span 7"
              skill="Tensorflow"
            />
            <SkillElement
              imageSrc={PT}
              area="1 / 29 / 1 / span 7"
              skill="PyTorch"
            />
            <SkillElement
              imageSrc={S}
              area="2 / 5 / 2 / span 7"
              skill="Statistics"
            />
            <SkillElement
              imageSrc={brain}
              area="2 / 13 / 2 / span 7"
              skill="Deep Learning"
            />
            <SkillElement
              imageSrc={NN}
              area="2 / 21 / 2 / span 7"
              skill="Model Building"
            />
            <SkillElement
              imageSrc={git}
              area="2 / 29 / 2 / span 7"
              skill="Git"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
