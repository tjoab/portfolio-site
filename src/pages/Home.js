import React from "react";
import HeroHome from "../components/HeroHome";
import Card from "../components/Card";
import "./styles/Home.css";
import AI from "../resources/ai.png";

function Home() {
  return (
    <>
      <HeroHome />
      <div className="cards">
        <div className="card-content">
          <div className="card1">
            <Card projName="Project A" category="Category A" imageSrc={AI} />
          </div>
          <div className="card2">
            <Card projName="Project B" category="Category B" imageSrc={AI} />
          </div>
          <div className="card3">
            <Card projName="Project C" category="Category C" imageSrc={AI} />
          </div>
          <div className="card4">
            <Card projName="Project D" category="Category Deez" imageSrc={AI} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
