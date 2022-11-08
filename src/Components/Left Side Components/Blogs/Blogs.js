import React, { useEffect, useRef, useState } from "react";
import "./Blogs.scss";

import { SectionHead, Card } from "../../../Components";

// start blogs data
let blogsData = [
  {
    img: "./img/Blog/1.jpg",
    small: "SEPTEMBER 22, 2021",
    main: "Five Solid Evidences Attending Design Is Good For Your Career Development.",
    href: "#",
  },
  {
    img: "./img/Blog/2.jpg",
    small: "SEPTEMBER 17, 2021",
    main: "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.",
    href: "#",
  },
  {
    img: "./img/Blog/3.jpg",
    small: "SEPTEMBER 04, 2021",
    main: "I Will Tell You The Truth About Design In The Next 60 Seconds.",
    href: "#",
  },
  {
    img: "./img/Blog/4.jpg",
    small: "AUGUST 18, 2021",
    main: "What You Know About Design And What You Don't Know About Design.",
    href: "#",
  },
  {
    img: "./img/Blog/5.jpg",
    small: "AUGUST 15, 2021",
    main: "Forgive Yourself for Not Being Perfect. Then Do It Again Tomorrow.",
    href: "#",
  },
  {
    img: "./img/Blog/6.jpg",
    small: "AUGUST 01, 2021",
    main: "Five Solid Evidences Attending Design Is Good For Your Career Development.",
    href: "#",
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemPerPage = 4;
  const indexOfLastElement = currentPage * itemPerPage;

  const loadButton = useRef();
  const blogsLength = useRef();

  const loadMoreFun = () => {
    if (blogsLength.current.children.length == blogsData.length) {
      loadButton.current.children[0].textContent = "No More Blogs To Load";
      setTimeout(() => {
        loadButton.current.children[0].textContent = "Done";
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (loading) {
      loadButton.current.children[0].textContent = "";
    } else loadButton.current.children[0].textContent = "Load More Articles";

    if (blogsLength.current.children.length == blogsData.length) {
      loadButton.current.children[0].textContent = "Done";
    }
  }, [loading, currentPage]);

  return (
    <section className="Blogs" id="news">
      <SectionHead small={"NEWS & TIPS"} main="Latest Articles" />
      <section className="blogs-holder" ref={blogsLength}>
        {blogsData
          .slice(0, indexOfLastElement)
          .map(({ img, small, main, href }, index) => {
            return (
              <div key={index} className="blog-holder circle">
                <Card img={img} small={small} main={main} href={href} />
              </div>
            );
          })}
      </section>
      <div ref={loadButton} className="Load-more" onClick={loadMoreFun}>
        <button className="load-more-button"></button>
        <div className={`animation-div ${loading && "loading"}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
