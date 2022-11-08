import React, { useContext } from "react";
import "./Menu.scss";

import { MenuContext } from "../../../App";
import { Button, Social, UnderLined } from "../../../Components";

const Menu = ({ scrolled }) => {
  const [showMenu, setShowMenu] = useContext(MenuContext);

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <article className="menu-over-lay" onClick={hideMenu}>
      <div className={`over-lay ${showMenu && "show"}`}></div>
      <div className={`menu ${showMenu && "show"} ${scrolled && "scrolled"}`}>
        <div
          className={`button-holder ${showMenu && "active"}
`}
        >
          {showMenu && (
            <Button swiper={false} Fun={hideMenu}>
              X
            </Button>
          )}
        </div>
        <div className="content-holder">
          <h1 className="menu-word">Menu</h1>
          <ul className="menu-list circle">
            <li
              onClick={hideMenu}
              className={`list-item  ${showMenu && "active-item"}`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item  ${showMenu && "active-item"}`}
            >
              <a href="#about">about</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item circle ${showMenu && "active-item"}`}
            >
              <a href="#portfolio">portfolio</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item circle ${showMenu && "active-item"}`}
            >
              <a href="#services">services</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item circle ${showMenu && "active-item"}`}
            >
              <a href="#customers">customers</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item circle ${showMenu && "active-item"}`}
            >
              <a href="#news">{"news & tips"}</a>
            </li>
            <li
              onClick={hideMenu}
              className={`list-item circle ${showMenu && "active-item"}`}
            >
              <a href="#contact">contact</a>
            </li>
          </ul>
          <div className={`social-and-developed ${showMenu && "active"}`}>
            <Social />
            <UnderLined type="link" href="#" content="Devolped By Fahii.m" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Menu;
