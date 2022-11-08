import React from "react";
import "./By-me.scss";

import { UnderLined, Button } from "../..";
import { BsArrowUp } from "../../icons";

let currentYear = new Date().getFullYear();

const ByMe = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="end-line">
        <div className="scroll-up-holder">
          <Button Fun={scrollUp}>
            <BsArrowUp className="arrow-up" />
          </Button>
        </div>
      </div>
      <div className="container">
        <section className="by-me">
          <p className="rights">
            Copyright &copy; {currentYear}. All rights reserved.
          </p>
          <div className="developed">
            <p className="developer-name">Designed by Frenify Developed by</p>
            <UnderLined type="text" content="Fahii.m" href="#" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ByMe;
