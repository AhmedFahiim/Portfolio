import React from "react";
import "./Skills.scss";

import { Paragraph } from "../../../Components";

const Skills = ({ data, active }) => {
  return (
    <article className={`skills-box ${active == "Skills" && "active"}`}>
      {data.map(({ name, percentage, delay, transition }) => {
        return (
          <div className="skill" key={name}>
            <h2 className="skill-name">{name}</h2>
            <div className="proccess-bar-holder">
              <div
                className="proccess-bar"
                style={
                  active == "Skills"
                    ? {
                        width: percentage,
                        transition: transition,
                        transitionDelay: delay,
                      }
                    : {}
                }
              >
                <span
                  className="percentage"
                  style={{
                    transitionDelay: delay,
                  }}
                >
                  {percentage}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <Paragraph content="A creative developer freelance with a love for minimal design, clean typography and well-written code, located in Cairo. Provide high quality and best website performance." />
    </article>
  );
};

export default Skills;
