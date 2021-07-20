import React from "react";

const About = () => {
  return (
    <>
      <div className="content contact" id="about-me">
        <div id="content-header">
          <div className="header-title">
            <h1>Colin Schlecht</h1>
          </div>
          <div id="header-address">
            <img
              alt="colin schlecht"
              id="profile-pic"
              className="avatar"
              src="https://ipfs.io/ipfs/bafybeigjeq2nv72erijbt5kcm6gkk3xicm7cyfxepgt4hnbywvficya2nq"
            ></img>
          </div>
          <div id="header-links">
            <p>
              <a href="https://github.com/colinschlecht">
                <i className="github square icon "></i> GitHub{" "}
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/colin-schlecht-390916a8/">
                <i className="linkedin icon"> </i> LinkedIn{" "}
              </a>{" "}
              |{" "}
              <a href="https://colinschlecht.medium.com/">
                <i className="medium icon"></i>
                Medium{" "}
              </a>
            </p>
          </div>
          <div className="description">
            <p>
              Hello there! I'm Colin Schlecht, a passionate problem solver,
              learner, and developer from the Pacific Northwest. I may be early
              in my career as a software engineer but I have a life-long journey
              of creative and analytical thinking behind me. Whether it's on a
              computer, in the mountains, or in my driveway, I find myself
              happiest when pushing myself out of my comfort zone to learn
              something new.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
