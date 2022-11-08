import React from "react";
import "./SocialBar.scss";

import { UnderLined } from "../../../Components";

const SocialBar = ({ data }) => {
  return data.map((ele) => {
    return (
      <div key={ele.itemKey} className="social-bar">
        <span className="data-key">{ele.itemKey}</span>
        {ele.itemKey === "phone" ||
        ele.itemKey === "mail" ||
        ele.itemKey === "Linkedin" ? (
          <UnderLined type={ele.type} content={ele.value} href={ele.href} />
        ) : (
          <span className="data-value">{ele.value}</span>
        )}
      </div>
    );
  });
};

export default SocialBar;
