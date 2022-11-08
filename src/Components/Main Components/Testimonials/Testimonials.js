import React from "react";
import "./Testimonials.scss";

import { Paragraph } from "../../../Components";

const Testimonials = ({ content, name, customerTitle }) => {
  return (
    <article className="testimonials-holder">
      <Paragraph content={content} />
      <div className="customer-data">
        <p className="name">{name}</p>
        <span className="customer-title">{customerTitle}</span>
      </div>
    </article>
  );
};

export default Testimonials;
