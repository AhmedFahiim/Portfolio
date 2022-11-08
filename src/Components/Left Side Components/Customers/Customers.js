import React from "react";
import "./Customers.scss";

import { SectionHead, ClientsImages, Slides } from "../../../Components";

// customers images
let customersImages = [
  "./img/Clients/3.png",
  "./img/Clients/4.png",
  "./img/Clients/5.png",
  "./img/Clients/6.png",
  "./img/Clients/7.png",
  "./img/Clients/8.png",
];

// customers Testimonials
let customersFeedback = [
  {
    content:
      "“Ahmed did a very professional job with my project. I gave him a very in depth brief. He understood it from A to Z, where other Freelancers I gave it to didn't. His work and communication were perfect and every tweak was delivered on time. I cannot praise Ahmed enough. Perfect English too. ”",
    name: "Alexandra Travis",
    customerTitle: "Client",
  },
  {
    content:
      "“Absolutely astounding. The website looks great and he has also been supportive in helping me to learn some of the tools which mean I can now edit the website myself, which is what I wanted. I would definitely go to him again with my next project. ”",
    name: "Steven Wind",
    customerTitle: "Client",
  },
  {
    content:
      "“Ahmed has been a pleasure to work with and very patient with my thousands of questions. He immediately understood the look I wanted to project and nailed it! I will definitely use him for further input and projects. He rocks!. ”",
    name: "Maryann Tim",
    customerTitle: "Client",
  },
  {
    content:
      "“I am completely satisfied with the work that is done by Ahmed . I have found the one to help me move my business. Thank you very much for the great work. ”",
    name: "Gray Frank",
    customerTitle: "Client",
  },
];

const Customers = () => {
  return (
    <section id="customers" className="customers">
      <article className="customers-section-head">
        <SectionHead small="CUSTOMERS" main="Happy People" />
      </article>
      <ClientsImages data={customersImages} />
      <Slides
        type="Testi"
        slidesData={customersFeedback}
        breakpoints={{ 768: { SlidesPerView: 1 } }}
      />
    </section>
  );
};

export default Customers;
