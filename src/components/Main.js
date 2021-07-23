import React from "react";
import About from "./content/About";
import Resume from "./content/Resume";
import Projects from "./content/Projects";
import Contact from "./content/Contact";
import Header from "./Header"
import SubHeader from "./SubHeader";
const Main = () => {
  return (
    <>
      <Header />
      <About />
      <SubHeader id={"resume"} />
      <Resume />
      <SubHeader id={"projects"} />
      <Projects />
      <SubHeader id={"contact"} />
      <Contact />
    </>
  );
};
export default Main;
