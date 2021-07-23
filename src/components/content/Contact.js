import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="ui raised very padded text container segment"
        id="main-content4"
      >
      <div className="content contact" id="contact">
        <div id="content-header">
          <div className="header-title">
            <h1>Colin Schlecht</h1>
          </div>
          <div id="header-address">
            <p>253-583-6528 | schlechtcolin1@gmail.com</p>
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
        </div>
      </div>
      </div>
    </>
  );
};
export default Contact;
