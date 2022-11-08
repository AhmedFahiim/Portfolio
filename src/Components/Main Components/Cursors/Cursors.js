import React, { useEffect, useRef } from "react";
import "./Cursors.scss";

import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const SmallDot = ({ cursor }) => {
  const smallDot = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      smallDot.current.style.top = `${e.clientY}px`;
      smallDot.current.style.left = `${e.clientX}px`;
    });
    document.addEventListener("drag", (e) => {
      smallDot.current.style.top = `${e.clientY}px`;
      smallDot.current.style.left = `${e.clientX}px`;
    });
  }, []);

  return (
    <div
      ref={smallDot}
      className={`small-dot ${cursor == "normal" && "active"}`}
    ></div>
  );
};

const SmallCircle = ({ cursor }) => {
  const smallCircle = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      smallCircle.current.style.top = `${e.clientY}px`;
      smallCircle.current.style.left = `${e.clientX}px`;
    });
  }, []);

  return (
    <div
      ref={smallCircle}
      className={`small-circle ${cursor == "normal" && "active"}`}
    ></div>
  );
};

const BigCircle = ({ cursor }) => {
  const bigCircle = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      bigCircle.current.style.top = `${e.clientY}px`;
      bigCircle.current.style.left = `${e.clientX}px`;
    });
  }, []);

  return (
    <div
      ref={bigCircle}
      className={`Big-circle ${cursor == "Big" && "active"}`}
    ></div>
  );
};

const SlideCursor = ({ cursor }) => {
  const slideCircle = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      slideCircle.current.style.top = `${e.clientY}px`;
      slideCircle.current.style.left = `${e.clientX}px`;
    });
  }, []);

  return (
    <div
      ref={slideCircle}
      className={`slide-circle ${cursor == "slide" && "active"}`}
    >
      <HiArrowLeft className="left cursor-icon" />
      <HiArrowRight className="right cursor-icon" />
    </div>
  );
};

export { SmallCircle, SmallDot, BigCircle, SlideCursor };
