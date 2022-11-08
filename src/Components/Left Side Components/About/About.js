import React, { useEffect, useState, useRef } from "react";
import "./About.scss";

import {
  SectionHead,
  Paragraph,
  SocialBar,
  InfoTab,
  InfoBox,
  Skills,
} from "../../../Components";

export const TabsContext = React.createContext();

// social data
let socialData = [
  { itemKey: "Name", value: "Ahmed Fahiim", type: "text", class: "normal" },
  { itemKey: "Birthday", value: "2nd Dec 1996", type: "text", class: "normal" },
  { itemKey: "Age", value: "25 years", type: "text", class: "normal" },
  {
    itemKey: "Address",
    value: "Cairo, Egypt",
    type: "text",
    class: "normal",
  },
  {
    itemKey: "phone",
    type: "tel",
    value: "(+20)1154232534",
    href: "(+20)1154232534",
    class: "link",
  },
  {
    itemKey: "mail",
    type: "mailto",
    value: "ahmedsallaam01@gmail.com",
    href: "ahmedsallaam01@gmail.com",
    class: "link",
  },
  {
    itemKey: "Linkedin",
    type: "link",
    value: "Ahmed Fahiim",
    href: "https://www.linkedin.com/in/ahmed-fahiim-187892238/",
    class: "link",
  },
];
// personal data
let personalData = {
  Experience: [
    {
      id: 0,
      period: true,
      placeName: "Freelancing",
      time: "( September 2022 — Today )",
      title: "Front-end Developer",
      disc: "After leaving Techeor company I loved to start a new challenge in freelancing websites after learning React and developing my skills, to build a loyal customer base, besides improving my skills as well.      ",
    },
    {
      id: 1,
      period: true,
      placeName: "Techeor Co.",
      time: "( May 2022 — August 2022 )",
      title: "Tr. Front-end Developer",
      disc: "Starting the real experience in a startup company by start creating small web pages using basic features like HTML CSS JavaScript Bootstrap SCSS.      ",
    },
  ],
  Education: [
    {
      id: 0,
      period: true,
      placeName: "Udemy",
      time: "( August 2022 — October 2022 )",
      title: "SEO Best Practices",
      disc: "Started learning the basics of SEO to be aware of the Search engine optimization rules and accordingly build a website with a better performance.",
    },
    {
      id: 1,
      period: true,
      placeName: "Different Resources",
      time: "( January 2022 — Today )",
      title: "Front-end Development",
      disc: "Started learning the road map of the Expert Front-end Developer, also now i'm still learning the new features to be up to the continuous updates.      ",
    },
    {
      id: 2,
      period: true,
      placeName: "COMMERCE COLLEGE",
      time: "( 2014 — 2018 )",
      title: "Bachelor Degree",
      disc: "Graduated as an Accountant from the Faculty of Commerce at Al-Azhar university.",
    },
  ],
};
// skills data
let skillsData = [
  { name: "Html5 & css3", percentage: "90%", transition: "2.3s", delay: "0s" },
  { name: "JavaScript", percentage: "80%", transition: "2.3s", delay: "0.2s" },
  { name: "React JS", percentage: "75%", transition: "2.3s", delay: "0.4s" },
  { name: "SASS", percentage: "90%", transition: "2.3s", delay: "0.6s" },
  { name: "Gulp JS", percentage: "85%", transition: "2.3s", delay: "0.8s" },
  {
    name: "Git & Github",
    percentage: "70%",
    transition: "2.3s",
    delay: "1s",
  },
];

const About = () => {
  const [ActiveTab, setActiveTab] = useState("Experience");

  const holder = useRef();

  useEffect(() => {
    holder.current.classList.remove("active");
    setTimeout(() => {
      holder.current.classList.add("active");
    }, 150);
  }, [ActiveTab]);

  return (
    <section id="about" className="about">
      <article className="about-section-head">
        <SectionHead small="about me" main="Biography" />
        <Paragraph content="Hi, I'm a Front-End Developer, I Can Build a Dream Website With High Quality, Best Performance, Best SEO, And a Responsive Website, So Don't Waste Your Time And Let Me Help Your Business To Fly Up There." />
      </article>
      <article className="social-data">
        <div className="row">
          <div className="data-col col-xl-6">
            <SocialBar data={socialData} />
          </div>
          <div className="download-col circle col-xl-5">
            <a href="./Fahiim's CV.pdf" download>
              <div className="download-wraper">
                <img
                  className="down-box"
                  src="./img/download.svg"
                  alt="download-cv"
                />
                <img className="down-arrow" src="./img/arrow.svg" alt="arrow" />
                <p className="down-word">Download Cv</p>
              </div>
            </a>
          </div>
        </div>
      </article>
      <article className="skills-education">
        <TabsContext.Provider value={[ActiveTab, setActiveTab]}>
          <InfoTab />
        </TabsContext.Provider>
        <div ref={holder} className="info-boxs-holder">
          {ActiveTab !== "Skills" && <InfoBox data={personalData[ActiveTab]} />}
          <Skills active={ActiveTab} data={skillsData} />
        </div>
      </article>
    </section>
  );
};
export default About;
