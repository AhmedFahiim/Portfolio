import React from "react";
import "./Client-image.scss";

const ClientImage = ({ data }) => {
  return (
    <article className="clients-images">
      <div className="row">
        {data.map((img) => {
          return (
            <div
              key={img}
              className="customer-img-holder circle col-md-6 col-lg-4"
            >
              <div className="bg-div">
                <img src={img} alt="Client Image" />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ClientImage;
