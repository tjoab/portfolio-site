import React from "react";
import { Helmet } from "react-helmet";
import HeroHome from "../components/HeroHome";
import Card from "../components/Card";
import "./styles/Work.css";
import Wordle from "../resources/wordle.png";
import Lambert from "../resources/lambert.png";
import NBA from "../resources/nba.png";
import DL from "../resources/lstm.png";

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
            projName="Wordle Solver"
            category="Web App"
            imageSrc={Wordle}
            bgCol="hsla(284, 61%, 74%, 1)"
            start={1}
            end={10}
            workLink="/work/wordle"
          />
          <Card
            projName="Bayesian Deep Learning"
            category="Model and Analysis"
            imageSrc={DL}
            bgCol="hsla(172, 45%, 75%, 1)"
            start={11}
            end={26}
            workLink="/work/deepLearning"
          />
          <Card
            projName="LambertW Functionality"
            category="Publication"
            imageSrc={Lambert}
            bgCol="hsla(22, 62%, 76%, 1)"
            start={1}
            end={16}
            workLink="/work/lambertW"
          />
          <Card
            projName="The 2-for-1 Play"
            category="Model and Analysis"
            imageSrc={NBA}
            bgCol="hsla(206, 84%, 86%, 1)"
            start={17}
            end={26}
            workLink="/work/2for1"
          />
        </div>
      </m.div>
    </div>
  );
}
export default Work;
