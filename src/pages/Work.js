import React from "react";
import { Helmet } from "react-helmet";
import HeroHome from "../components/HeroHome";
import Card from "../components/Card";
import "./styles/Work.css";
import Wordle from "../resources/wordle.png";
import latex from "../resources/latex.png";

import { motion as m } from "framer-motion";

function Work() {
  return (
    <div>
      <Helmet>
        <title>TJ Ayoub • Data Scientist</title>
      </Helmet>
      <HeroHome />
      <m.div
        className="cards"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
      >
        <div className="card-content">
          <Card
            projName="Wordle Assistant"
            category="Web App"
            imageSrc={Wordle}
            bgCol="hsla(284, 61%, 74%, 1)"
            start={1}
            end={10}
            workLink="/work/wordle"
          />
          <Card
            projName="Handwritten Math to LaTeX"
            category="Deep Learning"
            imageSrc={latex}
            bgCol="hsla(172, 45%, 75%, 1)"
            start={11}
            end={26}
            workLink="/work/im2seq"
          />
        </div>
      </m.div>
    </div>
  );
}
export default Work;
