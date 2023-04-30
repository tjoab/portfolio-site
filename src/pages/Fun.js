import React from "react";
import HeroFun from "../components/HeroFun";
import { Helmet } from "react-helmet";

function Fun() {
  return (
    <>
      <Helmet>
        <title>TJ Ayoub • Fun</title>
      </Helmet>
      <HeroFun />
    </>
  );
}

export default Fun;
