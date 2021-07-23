import React, { useCallback, useEffect, useState } from "react";

export default function Nav() {
  const [targetAbout, setAbout] = useState(true);
  const [targetRes, setRes] = useState(false);
  const [targetProj, setProj] = useState(false);
  const [targetCont, setCont] = useState(false);

  const returnTop = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const returnToSubTitle = (e, targ) => {
    e.preventDefault();

    const elem = document.getElementById(`${targ}-body-title`);
    const rect = elem.getBoundingClientRect();
    const scrolledTop = window.pageYOffset;

    window.scroll({
      top: rect.top + scrolledTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const isTop = (el, checkedElement) => {
    return (
      el.getBoundingClientRect().top <
      checkedElement.getBoundingClientRect().top
    );
  };

  const trackScroll = useCallback(() => {
    const checkedElement = document.getElementById("menu-change");
    const wrappedElement = document.getElementById("main-content");
    const mainHeader = document.querySelector(".header.title");
    if (
      isTop(mainHeader, checkedElement) ||
      isTop(wrappedElement, checkedElement)
    ) {
      checkedElement.className = "ui secondary menu after";
    } else {
      checkedElement.className = "ui secondary menu inverted";
    }
  }, []);

  const updateNav = useCallback(() => {
    const res = document.getElementById(`resume-body-title`);
    const proj = document.getElementById(`projects-body-title`);
    const cont = document.getElementById(`contact-body-title`);
    const resArea = res.getBoundingClientRect().top;
    const projArea = proj.getBoundingClientRect().top;
    const contArea = cont.getBoundingClientRect().top;
    const halfway = window.innerHeight / 2;
    setAbout(false);
    setRes(false);
    setProj(false);
    setCont(false);
    if (resArea <= halfway && resArea >= 0) {
      setRes(true);
    } else if (resArea <= halfway && projArea >= window.innerHeight) {
      setRes(true);
    } else if (
      projArea <= window.innerHeight &&
      resArea <= 0 &&
      contArea >= halfway / 2 + halfway
    ) {
      setProj(true);
    } else if (contArea <= window.innerHeight && projArea <= halfway / 2) {
      setCont(true);
    } else if (contArea >= halfway && contArea <= window.innerHeight) {
      setCont(true);
    } else {
      setAbout(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", trackScroll);
  }, [trackScroll]);

  useEffect(() => {
    document.addEventListener("scroll", updateNav);
  }, [updateNav]);

  const setClass = (hook) => (hook ? "item top targeted" : "item top");

  return (
    <div className="ui secondary menu inverted" id="menu-change">
      <div className="menu">
        <a
          href="/about"
          className={setClass(targetAbout)}
          id="top"
          onClick={(e) => returnTop(e)}
        >
          About Me
        </a>
        <a
          href="/resume"
          className={setClass(targetRes)}
          id="top"
          onClick={(e) => returnToSubTitle(e, "resume")}
        >
          Resume
        </a>

        <a
          href="/projects"
          className={setClass(targetProj)}
          id="top"
          onClick={(e) => returnToSubTitle(e, "projects")}
        >
          Projects
        </a>

        <a
          href="/contact"
          className={setClass(targetCont)}
          id="top"
          onClick={(e) => returnToSubTitle(e, "contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
