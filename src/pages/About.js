import React from "react";
import HeroAbout from "../components/HeroAbout";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Blurb from "../components/Blurb";
import "./styles/About.css";
import capa from "../resources/capa.JPG";
import crane from "../resources/crane.JPG";
import tdot from "../resources/tdotBW.jpg";

import { Helmet } from "react-helmet";

function About() {
  const interests = [
    "I have a tendency to always ask &ldquo;but why?&rdquo; This is how you project a high dimensional vector down to a two dimensional space. But why? These two words made me appreciate so much more about the world around us and how it really works. I wanted to be a part of that.",
    "Before making my own contributions, I had to understand what already exists. This was made easier with mathematics. Finding out that <i> <b> this </b> </i> modern technology hinged on <i> <b> that </b> </i> mathematical theory from decades ago always left me wide-eyed. My side project work is just an excuse to satisfy my curiosity about new technologies and understand how the world is moving forward.",
    "These are some areas where I have invested time and energy over the years and continue to explore and develop. I hope this gives you a better sense of who I am and what I bring to the table.",
  ];
  const fun = [
    "Outside of school and work, I enjoy a good coffee within the hustle and bustle of the city, going on photography walks, exploring new trails and locations on my bike, and playing soccer with strangers on Sunday nights.",
  ];

  return (
    <>
      <Helmet>
        <title>TJ Ayoub • About</title>
      </Helmet>
      <HeroAbout />
      <Timeline />
      <Blurb texts={interests} />
      <Skills />
      <Blurb texts={fun} />
      <div className="pics">
        <div className="largePic">
          <figure className="picWrap">
            <img className="pic" src={capa}></img>
          </figure>
        </div>
        <div className="smallPic">
          <figure className="picWrap">
            <img className="pic" src={crane}></img>
          </figure>
        </div>
      </div>
    </>
  );
}

export default About;
