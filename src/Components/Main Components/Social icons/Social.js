import React from "react";
import "./Social.scss";

import {
  FaFacebookF,
  FaLinkedinIn,
  BsInstagram,
  AiOutlineTwitter,
  SiWhatsapp,
} from "../../icons";

const Social = () => {
  return (
    <div className="social-icons circle">
      <div className="social-platform">
        <a href="https://twitter.com/AhmedFahiim2">
          <AiOutlineTwitter className="icon" />
        </a>
      </div>
      <div className="social-platform circle">
        <a href="https://www.linkedin.com/in/ahmed-fahiim-187892238/">
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <div className="social-platform circle">
        <a href="https://www.instagram.com/fahiim.ahmed/">
          <BsInstagram className="icon" />
        </a>
      </div>
      <div className="social-platform circle">
        <a href="https://www.facebook.com/profile.php?id=100080364111161">
          <FaFacebookF className="icon" />
        </a>
      </div>
      <div className="social-platform circle">
        <a href="#">
          <SiWhatsapp className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Social;
