import React, { useRef, useEffect } from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";

function Card(props) {
	const { projName, category, imageSrc, bgCol, workLink } = props;
	const cardBoxRef = useRef(null);

	const styling = {
		background: bgCol,
	};

	useEffect(() => {
		const titleElement = document.getElementById("/work/captionaize");
		const originalText = titleElement.innerText;

		const modifiedText = `<span>${originalText.substring(
			0,
			7
		)}</span><span style="color: #ED5C04;">${originalText.substring(
			7,
			9
		)}</span><span>${originalText.substring(9)}</span>`;
		titleElement.innerHTML = modifiedText;
	}, []);
	return (
		<div className="card-box" style={styling} ref={cardBoxRef}>
			<Link to={workLink} className="card">
				<div className="card-wrap">
					<div className="info">
						<span className="proj-title">{category}</span>
						<h2 id={workLink}>{projName}</h2>
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
