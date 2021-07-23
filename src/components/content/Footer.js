import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-title">
            <h1>Colin Schlecht</h1>
          </div>
          <div className="footer-address">
            <p>253-583-6528 | schlechtcolin1@gmail.com</p>
          </div>
          <div className="footer-links">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
