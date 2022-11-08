import React, { useContext } from "react";
import "./Info-tab.scss";

import { TabsContext } from "../../Left Side Components/About/About";

// tab data
let tabs = [
  { id: 0, content: "Experience", nth: "" },
  { id: 1, content: "Education", nth: "" },
  { id: 2, content: "Skills", nth: "last" },
];

const InfoTab = () => {
  const [active, setActive] = useContext(TabsContext);

  const clickHandler = (content) => {
    setActive(content);
  };

  return (
    <ul className="tabs-menu">
      {tabs.map(({ id, content, nth }) => {
        return (
          <li
            key={id}
            id={id}
            onClick={() => clickHandler(content)}
            className={`tab-item circle ${nth} ${
              active == content && "active"
            }`}
          >
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default InfoTab;
