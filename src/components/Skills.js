import React, { useEffect, useState } from "react";
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
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 750);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="skillsWrap">
			<div className="skillsGrid">
				<div style={{ display: "contents" }}>
					<SkillElement
						imageSrc={Py}
						area={isSmallScreen ? "1 / 3 / 1 / span 16" : "1 / 5 / 1 / span 7"}
						skill="Python"
					/>
					<SkillElement
						imageSrc={R}
						area={
							isSmallScreen ? "1 / 21 / 1 / span 16" : "1 / 13 / 1 / span 7"
						}
						skill="R"
					/>
					<SkillElement
						imageSrc={TF}
						area={isSmallScreen ? "2 / 3 / 2 / span 16" : "1 / 21 / 1 / span 7"}
						skill="Tensorflow"
					/>
					<SkillElement
						imageSrc={PT}
						area={
							isSmallScreen ? "2 / 21 / 2 / span 16" : "1 / 29 / 1 / span 7"
						}
						skill="PyTorch"
					/>
					<SkillElement
						imageSrc={S}
						area={isSmallScreen ? "3 / 3 / 3 / span 16" : "2 / 5 / 2 / span 7"}
						skill="Statistics"
					/>
					<SkillElement
						imageSrc={brain}
						area={
							isSmallScreen ? "3 / 21 / 3 / span 16" : "2 / 13 / 2 / span 7"
						}
						skill="Deep Learning"
					/>
					<SkillElement
						imageSrc={NN}
						area={isSmallScreen ? "4 / 3 / 4 / span 16" : "2 / 21 / 2 / span 7"}
						skill="Model Building"
					/>
					<SkillElement
						imageSrc={git}
						area={
							isSmallScreen ? "4 / 21 / 4 / span 16" : "2 / 29 / 2 / span 7"
						}
						skill="Git"
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills;
