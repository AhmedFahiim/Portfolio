import React from "react";
import "./Services.scss";

import { SectionHead, Paragraph, InfoBox } from "../../../Components";

// start services data

let servicesData = [
  {
    period: false,
    title: "Build React App",
    disc: "I can build your dream website using React App with more advanced features and libraries.",
    price: "$150",
  },
  {
    period: false,
    title: "Build Basic website",
    disc: "I can build your basic website using Html, CSS, and JavaScript without animations or libraries.",
    price: "$60",
  },
  {
    period: false,
    title: "Build Static website",
    disc: "I can build your Static website using Html, and CSS without animations or JavaScript Code, or libraries.",
    price: "$30",
  },
  {
    period: false,
    title: [
      ["Responsiveness Solutions"],
      [<sup className="project-duration">( Hourly )</sup>],
    ],
    disc: "I can solve any responsive issue in your website by taking care of different screen sizes and providing a report clarifying the issue and how to prevent it the next time.",
    price: "$15",
  },
  {
    period: false,
    title: [
      ["Editing Website"],
      [<sup className="project-duration">( Hourly )</sup>],
    ],
    disc: "I can edit your website if you need to fix, add or delete any part of your code.",
    price: "$15",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <article className="section-head">
        <SectionHead small="SERVICES" main="What I Do" />
        <Paragraph content="I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales." />
      </article>
      <article className="services-box">
        <InfoBox priceBox={true} data={servicesData} />
      </article>
      <p className="note">
        Note: the previous prices can be increased or decreased depending on
        project volume.
      </p>
    </section>
  );
};

export default Services;
