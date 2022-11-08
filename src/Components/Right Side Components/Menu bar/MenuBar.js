import React, { useContext } from "react";
import "./Menu-bar.scss";

import { IoMdMenu } from "../../icons";

import { MenuContext } from "../../../App";

const MenuBar = () => {
  const [, setMenu] = useContext(MenuContext);

  const showMenue = () => {
    setMenu(true);
  };

  return (
    <div onClick={showMenue} className="menu-bar circle">
      <span className="menu-word">Menu</span>
      <IoMdMenu className="menu-icon" />
    </div>
  );
};

export default MenuBar;
