import React from "react";
import HeroContact from "../components/HeroContact";
import Socials from "../components/Socials";
import Submit from "../components/Submit";
import { Helmet } from "react-helmet";
import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <Helmet>
        <title>TJ Ayoub • Contact</title>
      </Helmet>
      <HeroContact />
      <Socials />
      <Submit />
    </>
  );
}

export default Contact;
