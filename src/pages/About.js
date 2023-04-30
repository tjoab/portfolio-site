import React from "react";
import HeroAbout from "../components/HeroAbout";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";

import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>TJ Ayoub • About</title>
      </Helmet>
      <HeroAbout />
      <Timeline />
      <Skills />
    </>
  );
}

export default About;
