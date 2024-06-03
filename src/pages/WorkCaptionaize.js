import React from "react";
import "./styles/WorkCaptionaize.css";
import { Helmet } from "react-helmet";
import BlurbWithP from "../components/BlurbWithP";
import Blurb from "../components/Blurb";
import { motion as m } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import promptPic from "../resources/prompt.png";
import brainPlosion from "../resources/brainplosion.png";
import cv from "../resources/cv.png";
import chatGPT from "../resources/chatGPTinterface.png";
import openAI from "../resources/openaiMoney.png";
import geminiArch from "../resources/geminiArch.png";
import output from "../resources/output.png";

var Latex = require("react-latex");

function WorkCaptionaize() {
	const intro = [
		"I've been creating content for quite some time now, from youtube videos in highschool, ad campaigns in university, to tiktok and instagram shorts now. During those different stages, I have fallen in and out of love with different aspects of the creation pipeline. In my latest stint, I have become super focused on visual storytelling, trying to convey emotion without or limited dialogue. I try to make my content super cinematic and pay close attention to sound design.",
		"Planning all this out for every piece of content I made quickly started to take a toll on me. I would frequently find myself with a finished product, ready to post, but have no mental energy left to come up with a creative caption or do any market research to pick some relevant hashtags.",
	];
	const intro2 = [
		"This was the problem that sparked inspiration for this project. I began to think of a way I could put together a tool that could <em><b>watch</b></em> my video in a sense, understand what is going on — perhaps pick up on some themes or the type of emotion I am trying to invoke — and provide me with some caption ideas based on what it could gather. Sounds like a perfect opportunity for some computer vision!",
	];
	const intro22 = [
		"Well, not exactly — not traditional computer vision — I needed something that could also <em><b>understand</b></em>.",
		"Hmm, large language models are good at understanding, but they are <em><b>language</b></em> models.",
		"It was at this point where I put this project on the storage shelf until I could make a breakthrough with respect to the modeling task.",
	];
	const intro3 = [
		"Enter GPT-4.",
		"I remember when the multimodal model wave started to take over the LLM scene mid-late last year. Watching the GPT-4 demo with vision enabled was super eye-opening and got me really excited for what was to come. Then Google hit us with the Gemini teaser, and I remember losing my mind over the trailer. At that point my mind was flooding with potential uses for this new tech, but it never occurred to me to use a same style image to text model to finally tackle this project. Untiiiil… GPT-4o was pushed into chatGPT and I remembered that these models can take in image input… <b>*facepalm*</b>",
	];

	const gpt4 = [
		"I still did not have a solid plan on how exactly I would tackle this problem — GPT-4o/V couldn't handle video formats directly, so some preprocessing steps had to be done. I came across a github repo for a paper that was published outlining a tool called <b>MM-Vid</b> — this was a paper published by some Azure AI researchers that used GPT-4V to perform '<em><b>advanced video understanding</b></em>'. This was exactly what I needed!",
		"But there were two huge problems in my way:",
		"<b>1)</b> They did not have a live demo to use the tool, or any sort of API to tap into the service",
		"<b>2)</b> Everything was open-sourced but I needed an OpenAI key <em><b>*cry in broke* </b></em>",
	];
	const openSource = [
		"My thinking at this point was to find something open source. From the MM-Vid repo, they had some nice functions I could use for video preprocessing and really all I needed was any half decent image to text LLM that I could use for free and viola!",
		"Seems like a straightforward plan right. Oh how naive I sometimes am 🙃 ",
		"The problem with going fully open source is that you usually need to have the model downloaded locally. This was going to be a problem, since in the world of LLMs,  <small><small><b>small</b></small></small> models are still <big><big><b>huge</b></big></big>. If I were to actually use this tool, at some point I would need to host it somewhere…",
	];
	const openSource2 = ["Back to the drawing board."];
	const gemini = [
		"For some reason, using Gemini slipped my mind until this point. I just assumed their pricing structure would be similar to OpenAI's, but I was completely wrong — their API had a generous free tier that even gives you access to their newest models.",
		"I started playing around in their sandbox app for Gemini 1.5 and noticed that I could upload videos directly to the model.",
		"<b><em>Me to me:</em></b> If i can do it here, surely I could do it through the API... right?",
		"I was eager to figure this out since it would let me scrap all of the the video chunking and preprocessing on my end and let Google do all the work for me 😈",
		"The main documentation for the API only outlined image to text modeling, which was a hard blow to bear, but after some digging around, I came across a file API that is integrated into Gemini. What can the file API do?",
		"Work with videos 😈 😈 😈",
	];

	const prompt = [
		"With the logistics out of the way — I could focus on setting up a nice prompt to try and get the results I was after. The idea was to <b>tell Gemini what it was an expert at</b> first, then give it some detailed instructions as to what I wanted it to do.",
		"I gave the model an extra degree of freedom when coming up with captions allowing it to <b>vary its response based on what platform</b> the caption would be used on. Broadly speaking, I feel that TikTok is more fast paced when compared to Instagram, while the latter feels more <em>formal</em> and put together. I was curious if the model would pick up on this and reflect it in its generation.",
		"I had a similar idea with hashtags — that is, to include an extra degree of freedom and let the model suggest hashtags governed by two sets of goals; <em><b>virality</b></em> and <em><b>relevance</b></em>. I'd like to pat myself on the back a little for this one because after using the final tool I saw some pretty interesting results.",
	];

	const tiktok = [
		"Take a look at the viral hashtags being generated for TikTok in the output below.",
		"You've got <b>#foryou</b> and <b>#fyp</b>. I was shocked at this point because these extra degrees of freedom were clearly being taken advantage of by the model. These were TikTok exclusive hashtags only being generated for the TikTok section of suggestions.",
		"Not only that, they were also being generated for the subset of hashtags geared towards virality. Long story short, this was a positive litmus test and I had the biggest grin on my face using the application.",
	];

	const streamlit = [
		"Speaking of the application, I used a Python package called Streamlit to make it.",
		"I have heard of Streamlit before during my last job, some senior devs would prototype proofs of concept using it, but I had never used it myself. I would stumble on a lot of LLM based applications made on Streamlit, so I figured I would try it out for this project.",
		"The real beauty of it is how fast you can package up a script into an application and host on the web. It was fun to learn and I would recommend trying it out at least once to anyone who likes building applications and wants to do so completely in Python.",
		"There is a link to both the app and GitHub repo at the top of this page, please check them out!",
	];

	const vectorDB = [
		"I'll be honest, going the LLM route was not the first idea I tried to flesh out.",
		"Initially, I built a TikTok scraper to grab a bunch of trending videos on the app and extracted their caption and hashtag data. This ended up being a whole side quest since TikTok does not provide any API endpoints to fetch trending videos for their non-research based API (the research API required a whole application process). I had managed to scrape around 3,000 caption and hashtag pairs for content that is <em><b>currently</b></em>  trending.",
		"The idea was to use a pre-trained sentence transformer to generate embeddings for all of the captions and store them in a vector database. Then using an LLM, I could generate some candidate captions for my video or come up with one on my own. By creating an embedding for this caption, I could do a nearest neighbor search in the vector DB, querying similar TikToks that are <em><b>currently trending</b></em>, compiling a list of their corresponding hashtags.",
		"Sadly, this didn't work too well and giving the entire task to the LLM proved to be both simpler and more effective.",
		"Perhaps I didn't have enough data for the vector DB query to be powerful, or perhaps using captions as the data item being embedded doesn't capture the true variance in the problem. Either way, this was a fun little adventure and if anyone has any ideas related to it, please reach out!",
	];

	const caveat = [
		"There was an interesting... <em><b>feature</b></em>... I noticed while testing the app.",
		"Any time the video I was inputting had captions on screen, the message behind the captions tended to dominate the generated captions and hashtags.",
		"In my case, the themes behind the captions aligned with the theme of the video itself, however I am curious as to what may be generated should the video's visual theme be misaligned with what the captions are describing.",
		"I think this could provide some insight with respect to the inner workings of the model.",
	];

	const originalText = "Captionaize";
	return (
		<>
			<Helmet>
				<title>TJ Ayoub • Work</title>
			</Helmet>
			<m.h1
				className="DL-tight"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
			>
				<span slot="title" className="DL-hero">
					<span className="DL-holder">
						<span className="DL-holder-content">
							<span>{originalText.substring(0, 7)}</span>
							<span style={{ color: "#FFFFFF" }}>
								{originalText.substring(7, 9)}
							</span>
							<span>{originalText.substring(9)}</span>
						</span>
					</span>
				</span>
			</m.h1>
			<m.div
				className="DL-wrapper"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.38, duration: 0.55, ease: "easeOut" }}
			>
				<p className="center">
					<div className="DL-subtitle">
						Web App &nbsp; • &nbsp; Large Language Models &nbsp; • &nbsp; Python
						&nbsp; • &nbsp; 2024
					</div>
				</p>
			</m.div>
			<m.div
				className="linkHolder"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
			>
				<div className="linkGrid">
					<a
						href="https://github.com/tjoab/captionaize"
						rel="nofollow noreferrer"
						target="_blank"
						className="linkLink"
						style={{ gridArea: "1 / 2 / 1 / span 1" }}
					>
						<FaGithub style={{ width: "100%", height: "100%" }} />
					</a>
					<a
						href="https://captionaize.streamlit.app/"
						rel="nofollow noreferrer"
						target="_blank"
						className="linkLink"
						style={{ gridArea: "1 / 3 / 1 / span 1" }}
					>
						<FiExternalLink style={{ width: "100%", height: "100%" }} />
					</a>
				</div>
			</m.div>
			<BlurbWithP texts={intro} title="Burnt Out" />
			<m.img
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.58, duration: 0.5, ease: "easeOut" }}
				style={{
					display: "block",
					margin: "auto",
					width: "400px",
					marginTop: "1rem",
				}}
				src={brainPlosion}
			></m.img>
			<BlurbWithP texts={intro2} title="Computer Vision?" />
			<m.img
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.58, duration: 0.5, ease: "easeOut" }}
				style={{
					display: "block",
					margin: "auto",
					width: "500px",
					marginTop: "1rem",
				}}
				src={cv}
			></m.img>
			<Blurb texts={intro22} />
			<BlurbWithP texts={intro3} title="LLM Fever" />
			<img
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.58, duration: 0.5, ease: "easeOut" }}
				style={{
					display: "block",
					margin: "auto",
					width: "500px",
					marginTop: "1rem",
				}}
				src={chatGPT}
			></img>
			<BlurbWithP texts={gpt4} title="ClosedAI" />
			<img
				style={{
					display: "block",
					margin: "auto",
					width: "425px",
					marginTop: "1rem",
				}}
				src={openAI}
			></img>
			<BlurbWithP texts={openSource} title="Modeling Woes Continued" />
			<h3 className="latex">
				<Latex displayMode={true}>{`$$big(model) = big(💰) = sad(TJ)$$`}</Latex>
			</h3>
			<Blurb texts={openSource2} />
			<BlurbWithP texts={gemini} title="The Stars Alligned ♊" />
			<img
				style={{
					display: "block",
					margin: "auto",
					width: "550px",
					marginTop: "1rem",
				}}
				src={geminiArch}
			></img>
			<BlurbWithP texts={prompt} title="Prompting" />
			<img
				style={{
					display: "block",
					margin: "auto",
					width: "700px",
					marginTop: "1rem",
				}}
				src={promptPic}
			></img>
			<BlurbWithP texts={tiktok} title="Power of Some Freedom" />
			<img
				style={{
					display: "block",
					margin: "auto",
					width: "700px",
					marginTop: "1rem",
				}}
				src={output}
			></img>
			<BlurbWithP texts={streamlit} title="A New Package" />
			<BlurbWithP texts={vectorDB} title="Occam's Razor" />
			<BlurbWithP texts={caveat} title="Shower Thoughts" />
		</>
	);
}

export default WorkCaptionaize;
