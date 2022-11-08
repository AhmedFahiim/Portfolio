import React from "react";
import "./Right-Side.scss";

import { MenuBar, Person, UnderLined } from "../Components";

const RightSide = ({ scrolled }) => {
  return (
    <section className={`right-side  ${scrolled && "scrolled"}`}>
      <MenuBar />
      <article className="main-side-content">
        <Person />
        <UnderLined
          type="link"
          content="I’m available for a freelance job. Hire me"
          href="#contact"
        />
      </article>
    </section>
  );
};

export default RightSide;
