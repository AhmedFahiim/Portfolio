import React from "react";
import "./Person.scss";

import { useTypewriter } from "react-simple-typewriter";

const Person = () => {
  const { text } = useTypewriter({
    words: ["Ahmed Fahiim", "Web Developer", "Freelancer"],
    loop: 0,
    delaySpeed: 1500,
    deleteSpeed: 40,
    typeSpeed: 90,
  });

  return (
    <article className="person">
      <div className="person-card">
        <div className="person-image">
          <img src="./img/Person.jpg" alt="developer-image" />
        </div>
        <div className="person-data">
          <h2 className="hi-word">hi there! i am</h2>
          <div className="active-word-holder">
            <span className="bracet left">[</span>
            <p className="active-word">{text}</p>
            <span className="bracet right">]</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Person;
