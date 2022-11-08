import React from "react";
import "./Section-head.scss";

const SectionHead = ({ small, main }) => {
  return (
    <article className="sec-head">
      <h1 className="small-head">{small}</h1>
      <h1 className="main-head">{main}</h1>
      <div className="line"></div>
    </article>
  );
};

export default SectionHead;
