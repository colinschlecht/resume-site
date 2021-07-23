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
      <h1 className="body-title" id="resume-body-title">
        {" "}
        Resume
      </h1>
      <Resume />
      <SubHeader id={"projects"} />
      <h1 className="body-title" id="projects-body-title">
        Projects
      </h1>
      <Projects />
      <SubHeader id={"contact"} />
      <h1 className="body-title" id="contact-body-title">
        Contact
      </h1>
      <Contact />
    </>
  );
};
export default Main;
