import React, { useEffect, useState } from "react";
import TS from "./styles/Timeline.module.css";
import TimelineCard from "./TimelineCard";
import { motion as m } from "framer-motion";

function Timeline() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 750);
		};

		handleResize(); // Initial check

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<m.div
			className={TS.timelineHolder}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
		>
			<div className={TS.timelineGrid}>
				<TimelineCard
					company="Swiss Re"
					title="Data Scientist"
					time="'23~"
					row="1 / 1"
					columnSpan={isSmallScreen ? "10/span 15" : "18/span 7"}
				/>
				<TimelineCard
					company="University of Toronto"
					title="Graduate Teaching Assistant"
					time="'22/23"
					row="2 / 2"
					columnSpan={isSmallScreen ? "10/span 15" : "13/span 8"}
				/>
				<TimelineCard
					company="Western University"
					title="Computer Algebra Researcher"
					time="'21"
					row="3 / 3"
					columnSpan={isSmallScreen ? "6/span 13" : "8/span 7"}
				/>
				<TimelineCard
					company="Maplesoft"
					title="Software Developer"
					time="'20"
					row="4 / 4"
					columnSpan={isSmallScreen ? "2/span 10" : "2/span 7"}
				/>
				<TimelineCard
					company="Freelance"
					title="Photography, Videography, Design"
					time="'20~"
					row="5 / 5"
					columnSpan="3/span 22"
				/>
			</div>
		</m.div>
	);
}

export default Timeline;
