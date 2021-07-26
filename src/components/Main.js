import React from "react";
import About from "./content/About";
import Resume from "./content/Resume";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import Header from "./Header";
import SubHeader from "./SubHeader";

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <SubHeader id={"resume"} />
      <span className="body-title" id="resume-body-title">
      </span>
      <Resume />
      <SubHeader id={"projects"} />
      <span className="body-title" id="projects-body-title"></span>
      <Projects />
      <SubHeader id={"contact"} />
      <span className="body-title" id="contact-body-title"></span>
      <Contact />
    </>
  );
};
export default Main;
