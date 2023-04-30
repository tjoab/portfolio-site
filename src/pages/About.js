import React from "react";
import HeroAbout from "../components/HeroAbout";
import Timeline from "../components/Timeline";

import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>TJ Ayoub • About</title>
      </Helmet>
      <HeroAbout />
      <Timeline />
    </>
  );
}

export default About;
