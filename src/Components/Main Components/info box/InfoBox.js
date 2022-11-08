import React from "react";
import "./info-box.scss";

const InfoBox = ({ data, priceBox }) => {
  return data.map((obj, index) => {
    return (
      <article key={index} className="info-box">
        <InfoBoxData data={obj} />
        {priceBox && <InfoBoxPrice data={obj} />}
      </article>
    );
  });
};

const InfoBoxData = ({ data }) => {
  return (
    <div className="info-box-data">
      {data.period && (
        <div className="period-holder">
          <span className="place-name">{data.placeName}</span>
          <p className="period-time">{data.time}</p>
        </div>
      )}
      <h1 className="title">{data.title}</h1>
      <p className="title-disc">{data.disc}</p>
    </div>
  );
};

const InfoBoxPrice = ({ data }) => {
  return (
    <div className="info-box-price">
      <p className="start-word">Starts from</p>
      <span className="price">{data.price}</span>
    </div>
  );
};

export default InfoBox;
export { InfoBoxData, InfoBoxPrice };
