import React from "react";
import "./Home.scss";

import { SectionHead, Paragraph } from "../../../Components";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="main-home-holder">
        <SectionHead small="introduction" main="Front-end Developer" />
        <Paragraph content="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores." />
        <img className="sign" src="./img/signature1.png" alt="signature" />
      </div>
    </section>
  );
};

export default Home;
