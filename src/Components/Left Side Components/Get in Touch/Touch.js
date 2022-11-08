import React, { useState } from "react";
import "./Touch.scss";

import {
  SectionHead,
  Paragraph,
  Button,
  UnderLined,
} from "../../../Components";

const Touch = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const typeHandler = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "mail") {
      setMail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <section id="contact" className="contact">
      <article className="section-head">
        <SectionHead small="CONTACT" main="Get In Touch" />
        <Paragraph content="If you have any suggestions, projects, free consultations, or even if you want to say “hello”, please fill out the form below and I will reply to you shortly." />
      </article>
      <article className="form">
        <form>
          <div className="row">
            <div className="input-holder name col-md-6">
              <input
                className="form-item"
                name="name"
                type="text"
                onChange={(e) => typeHandler(e)}
                value={name}
              />
              <div className="type-holder">Name *</div>
            </div>
            <div className="input-holder mail col-md-6">
              <input
                className="form-item"
                name="mail"
                type="mail"
                onChange={(e) => typeHandler(e)}
                value={mail}
              />
              <div className="type-holder">Email *</div>
            </div>
            <div className="input-holder form-number">
              <input
                className="form-item"
                type="number"
                name="phone"
                onChange={(e) => typeHandler(e)}
                value={phone}
              />
              <div className="type-holder">Phone</div>
            </div>
            <div className="input-holder form-message">
              <textarea
                className="form-item"
                name="message"
                rows={9}
                value={message}
                onChange={(e) => typeHandler(e)}
              ></textarea>
              <div className="type-holder">Message</div>
            </div>
          </div>
          <Button>Send Message</Button>
        </form>
      </article>
      <article className="living-data-holder">
        <div className="living-data">
          <p className="living-data-head">Address</p>
          <address className="living-data-disc">
            7 Al-Quds St,Obour City <br />
            Cairo, Egypt
          </address>
        </div>
        <div className="living-data circle">
          <p className="living-data-head">Phone</p>
          <a className="living-data-disc phone" href="tel:(+20)1154232534">
            (+20) 1154232534
          </a>
        </div>
        <UnderLined
          type="mailto"
          href="ahmedsallaam01@gmail.com"
          content="ahmedsallaam01@gmail.com"
        />
      </article>
    </section>
  );
};

export default Touch;
