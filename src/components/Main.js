import React from "react";
import About from "./content/About"
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
        <About />
      </div>
      <div
        className="ui raised very padded text container segment"
        id="main-content"
      >
        <Resume />
      </div>
      <SubHeader id={"projects"} />
      <h1 className="sub header title projects">Projects</h1>
      <div
        className="ui raised very padded text container segment"
        id="main-content2"
      >
        <Projects />
      </div>
      <h1 className="sub header title">Contact</h1>

      <SubHeader id={"contact"} />
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
