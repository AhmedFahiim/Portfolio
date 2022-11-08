import React from "react";
import "./Card.scss";

const Card = ({ img, small, main, href, id, Fun }) => {
  return (
    <div className="card">
      <div id={id} onClick={(e) => Fun(e)} className="card-img-holder">
        <img className="card-img" src={img} alt="Card Image" />
      </div>
      <div className="card-disc">
        <p className="card-small">{small}</p>
        <h2 className="card-main">
          <a href={href}>{main}</a>
        </h2>
      </div>
    </div>
  );
};

export default Card;
