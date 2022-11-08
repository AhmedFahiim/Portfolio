import React from "react";
import "./Underlined.scss";

const UnderLined = ({ type, content, href }) => {
  const itemType =
    type === "text" ? (
      <span className="text">{content}</span>
    ) : type === "mailto" || type === "tel" ? (
      <a className="text" href={`${type}:${href}`}>
        {content}
      </a>
    ) : type === "link" ? (
      <a className="text" href={href}>
        {content}
      </a>
    ) : (
      ""
    );

  return <div className="underlined-holder circle">{itemType}</div>;
};

export default UnderLined;
