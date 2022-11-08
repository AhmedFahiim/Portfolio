import React from "react";
import "./Left-side.scss";

import {
  Home,
  About,
  Portfolio,
  Services,
  Customers,
  Blogs,
  Touch,
} from "../Components";

const LeftSide = ({ scrolled }) => {
  return (
    <section className={`left-side ${scrolled && "scrolled"}`}>
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Customers />
      <Blogs />
      <Touch />
    </section>
  );
};

export default LeftSide;
