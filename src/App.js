import React, { createContext, useEffect, useState } from "react";
import "./SASS/_Global-rules.scss";

// import main Coponents
import { Menu, ByMe } from "./Components";
import {
  SmallDot,
  SmallCircle,
  BigCircle,
  SlideCursor,
} from "./Components/Main Components/Cursors/Cursors";
import LeftSide from "./Left Side/LeftSide";
import RightSide from "./Right Side/RightSide";

// creating the scroll and menu Context
export const MenuContext = createContext();
export const ClickedSlideContext = React.createContext();

function App() {
  const [cursor, setCursor] = useState("normal");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickedSlide, setClickedSlide] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  useEffect(() => {
    let circlcElements = document.querySelectorAll(".circle");
    let slideElements = document.querySelectorAll(".swiper-slide");

    slideElements.forEach((ele) => {
      ele.addEventListener("mouseenter", () => {
        setCursor("slide");
      });
      ele.addEventListener("mouseleave", () => {
        setCursor("normal");
      });
    });

    circlcElements.forEach((ele) => {
      ele.addEventListener("mouseenter", () => {
        setCursor("Big");
      });
      ele.addEventListener("mouseleave", () => {
        setCursor("normal");
      });
    });
  }, []);

  return (
    <MenuContext.Provider value={[showMenu, setShowMenu]}>
      <ClickedSlideContext.Provider value={[clickedSlide, setClickedSlide]}>
        <div className="App">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <LeftSide scrolled={scrolled} />
            <RightSide scrolled={scrolled} />
          </div>
          {/* cursors components*/}
          <SmallDot cursor={cursor} />
          <SmallCircle cursor={cursor} />
          <BigCircle cursor={cursor} />
          <SlideCursor cursor={cursor} />
          {/* cursors components */}
          {/* menu coponent */}
          <Menu scrolled={scrolled} />
          {/* menu coponent */}
          {/* Developer Component */}
          <ByMe />
          {/* Developer Component */}
        </div>
      </ClickedSlideContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
