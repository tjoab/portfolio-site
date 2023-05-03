import React from "react";
import Blurb from "../components/Blurb";
import { Helmet } from "react-helmet";

function WorkFiller() {
  const text = [
    "This is just some filler text to display in order to complete the site routes. It will host one of my projects soon enough!",
  ];

  return (
    <>
      <Helmet>
        <title>TJ Ayoub • Work</title>
      </Helmet>
      <div style={{ marginTop: "10rem" }}>
        <Blurb texts={text} />
      </div>
    </>
  );
}

export default WorkFiller;
