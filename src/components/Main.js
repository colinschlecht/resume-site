import React from "react";
import Resume from "./content/Resume";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import SubHeader from "./SubHeader";

const Main = () => {
  return (
    <>
      <div
        className="ui raised very padded text container segment"
        id="main-content"
      >
        <Resume />
      </div>
      <SubHeader id={"subHeader1"} />
      <h1 className="sub header title projects">Projects</h1>
      <div
        className="ui raised very padded text container segment"
        id="main-content2"
      >
        <Projects />
      </div>
      <h1 className="sub header title">Contact</h1>

      <SubHeader id={"subHeader2"} />
      <div
        className="ui raised very padded text container segment"
        id="main-content3"
      >
        <Contact />
      </div>
    </>
  );
};
export default Main;
