import React, { useContext, useRef, useEffect } from "react";
import "./Portfolio.scss";

import { SectionHead, Slides, Button } from "../../../Components";

import { BsArrowRight, BsArrowLeft } from "../../icons";

import { ClickedSlideContext } from "../../../App";

// portfolio data
let portfolioData = [
  {
    id: 0,
    img: "./Portfolio imgs/projects/flower.png",
    small: "React Js, SASS, Swiper, BootStrap",
    main: "Flower Studio",
    features:
      "React (useState, useEffect, useContext, useRef, useParams, react router dom), Swiper library, SASS, BootStrap.",
    href: "https://flower-studio.vercel.app/",
    disc: "Flower Studio Project is one of my best projects, it aims to help any flower studio owner to display his catalog, events, and his activities attractively, the user can deal with many features, including favorite cart, shopping cart, checkout page, user addresses, login and logout, track orders. I'm working on the responsive part now and will be finished ASAP. many animations and smooth transitions are using css3 features, in the main parts I used flex-box to align and handle small boxes, but the main structure of the pages build by using Bootstrap 5 Grid system I've also used SCSS as a preprocessor language for CSS which make the coding much easier by using Mixins and PlaceHolders. Hope you like the project and hire me for building a similar one for you.   ",
  },
  {
    id: 1,
    img: "./Portfolio imgs/projects/portfolio.png",
    small: "React Js, SASS, Swiper, BootStrap",
    main: "Personal Portfolio",
    features:
      "React (useState, useEffect, useContext, useRef), Swiper library, SASS, BootStrap.",
    href: "https://portfolio-ahmedfahiim.vercel.app/",
    disc: "The project Helps any Freelancer to show his data, recent projects, experience, education, skills, happy customers, and testimonials sections, you are in the project already so you can try a full experience.    .",
  },

  {
    id: 2,
    img: "./Portfolio imgs/projects/Cappa-landing-sec.png",
    small: "React Js, SASS, Swiper, BootStrap",
    main: "Cappa Luxury Hotel",
    features:
      "React (useState, useEffect, useContext, useRef, useParams, react router dom), Swiper library, SASS, BootStrap.",
    href: "https://cappa-hotel.vercel.app/",
    disc: "The project Helps any Hotel to show its identity, Luxury services, and rules. the hotel can show Rooms, Luxury Services, a gallery page for hotel pictures, a Spa page, a Restaurant page, a contact page, an About page, and anything related to the hotel you will find a place to display the data in the Project made by css3 and html5, many animations and a smooth transition are using css3 features, in main parts I used flex-box to align and handle small boxes, but the main structure of the pages build by using Bootstrap 5 Grid system I've also used SCSS as a preprocessor language for CSS which make the coding much easier by using Mixins and PlaceHolders. the project is responsive on all screens, Hope you like the project and hire me to build a similar one for you.",
  },
  {
    id: 3,
    img: "./Portfolio imgs/projects/Resturantly-landing-sec.png",
    small: "HTML, CSS, JavaScript, BootStrap",
    main: "Resturantly",
    features: "HTML, CSS, JavaScript  (DOM, BOM), BootStrap.",
    href: "https://resturantly-ahmedfahiim.vercel.app/",
    disc: "The Project can help any Restaurant to show its identity, there are many sections, first, there is a landing section that has two buttons to call the user to take an action, also you will find a video button to play an attractive video about your resturant, then there is a section for restaurant info and why choose us, section menu and best plates, a section for the gallery, section for best chefs, and events plans. and you will find a form the customer should fill out to book a table, the project is made by html5,css3, Vanilla Javascript, and bootstrap5 Grid System, and there are many smooth transitions on hovering and clicks, all made by css3. the project is responsive on all screens, Hope you like the project and hire me to build a similar one for you.",
  },

  {
    id: 4,
    img: "./Portfolio imgs/projects/Nevica-landing-sec.png",
    small: "HTML, CSS, JavaScript, BootStrap",
    main: "Nevica Luxury Boats",
    features: "HTML, CSS, JavaScript  (DOM, BOM), BootStrap.",
    href: "https://nevica-ahmedfahiim.vercel.app/",
    disc: "The project Helps any Boats Rental agency to show its identity, Luxury Boats, and much more. the agency can show Boats Fleet, Luxury Services, Events, Boats Journeys, About Page, Blogs Page, contact page, About page, and anything related to the hotel you will find a place to display data. the Project made by css3 and html5, and there is many animations and smooth transition using css3 features, in the main parts I used flex-box to align and handle small boxes, but the main structure of the pages build by using Bootstrap5 Grid system., the project slide shows made by Vanilla Javascript without any plugins, the project is responsive on all screens Hope you like the project and hire me for building a similar one for you.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <article className="portfolio-section-head">
        <SectionHead small="PORTFOLIO" main="Featured Projects" />
      </article>
      <article className="portfolio-items">
        <Slides
          slidesData={portfolioData}
          type="portfolio"
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.5 },
          }}
        />
      </article>
      <PortfolioOverLay />
    </section>
  );
};

const PortfolioOverLay = () => {
  const [activeSlide, setActiveSlide] = useContext(ClickedSlideContext);
  const mainContent = useRef();

  const clickHandler = (e) => {
    mainContent.current.scrollTo({ top: 0, behavior: "smooth" });

    if (e.currentTarget.id == 0) {
      setTimeout(() => {
        if (activeSlide == 0) {
          setActiveSlide(portfolioData.length - 1);
        } else setActiveSlide((prev) => +prev - 1);
      }, 1300);
    } else if (e.currentTarget.id == 1) {
      setTimeout(() => {
        if (activeSlide == portfolioData.length - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide((prev) => +prev + 1);
        }
      }, 1300);
    }
  };

  const hideOverlay = () => {
    setActiveSlide(null);
  };

  return (
    <>
      {activeSlide !== null ? (
        <section className="portfolio-overlay">
          <article ref={mainContent} className="main-content-holder">
            <SingleProject data={portfolioData[activeSlide]} />
            <div className="buttons-holder">
              <div
                id="0"
                className="button-wraper circle"
                onClick={(e) => clickHandler(e)}
              >
                <button className="prev button">
                  <BsArrowLeft />
                </button>
                <span className="direction prev">Prev</span>
              </div>
              <div
                id="1"
                className="button-wraper circle"
                onClick={(e) => clickHandler(e)}
              >
                <span className="direction next">Next</span>
                <button className="next button">
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <Button Fun={hideOverlay}>X</Button>
          </article>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

const SingleProject = ({ data }) => {
  const [activeSlide] = useContext(ClickedSlideContext);
  const SingleProjectRef = useRef();

  useEffect(() => {
    SingleProjectRef.current.classList.remove("active");
    setTimeout(() => {
      SingleProjectRef.current.classList.add("active");
    }, 600);
  }, [activeSlide]);

  return (
    <article ref={SingleProjectRef} className="single-project">
      <div className="main-data">
        <div className="features-and-name">
          <h2 className="project-name">
            <a href={data.href} target="blank">
              {data.main}
            </a>
          </h2>
          <p className="features">Used Features: {data.features}</p>
        </div>
        <div className="img-holder">
          <img src={data.img} alt="Project Name" />
        </div>
      </div>
      <div className="project-descriptions">
        <p className="descripe">{data.disc}</p>
      </div>
    </article>
  );
};

export default Portfolio;
