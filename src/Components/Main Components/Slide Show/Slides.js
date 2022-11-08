import React, { useEffect, useRef, useContext } from "react";
import "./Slides.scss";

import { Card, Testimonials } from "../../../Components";
import { BsArrowRight, BsArrowLeft } from "../../icons";
import { ClickedSlideContext } from "../../../App";

// import swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const Slides = ({ slidesData, type, breakpoints }) => {
  const [, setActiveSlide] = useContext(ClickedSlideContext);

  const swiperRef = useRef();
  const rightArrow = useRef();
  const leftArrow = useRef();

  const clickedSlideHandler = (e) => {
    if (type == "portfolio") {
      setActiveSlide(Number(e.currentTarget.id));
    } else return;
  };

  useEffect(() => {
    setInterval(() => {
      if (type != "portfolio") {
        swiperRef.current.swiper.slideNext();
      }
    }, 4000);
  }, []);

  return (
    <Swiper
      className="swiper"
      ref={swiperRef}
      spaceBetween={25}
      speed={700}
      modules={[Navigation]}
      loop
      breakpoints={breakpoints}
      navigation={{
        prevEl: leftArrow.current,
        nextEl: rightArrow.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = leftArrow.current;
        swiper.params.navigation.nextEl = rightArrow.current;
      }}
    >
      {slidesData.map((data, index) => {
        return (
          <SwiperSlide key={index}>
            {type == "portfolio" ? (
              <Card
                img={data.img}
                small={data.small}
                main={data.main}
                href={data.href}
                id={data.id}
                Fun={clickedSlideHandler}
              />
            ) : (
              <Testimonials
                content={data.content}
                name={data.name}
                customerTitle={data.customerTitle}
              />
            )}
          </SwiperSlide>
        );
      })}
      <div className="swiper-buttons-holder circle">
        <button className="swiper-button" ref={leftArrow}>
          <BsArrowLeft />
        </button>
        <button className="swiper-button" ref={rightArrow}>
          <BsArrowRight />
        </button>
      </div>
    </Swiper>
  );
};

export default Slides;
