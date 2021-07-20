import React, { useCallback, useEffect } from "react";

export default function Nav() {
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

  useEffect(() => {
    document.addEventListener("scroll", trackScroll);
  }, [trackScroll]);

  return (
    <div className="ui secondary menu inverted" id="menu-change">
      <div className="menu">
        <a
          href="#resume"
          className="item top"
          id="top"
        >
          Resume
        </a>

        <a href="#subHeader1" className="item top" id="top">
          Projects
        </a>

        <a href="#subHeader2" className="item top" id="top">
          Contact
        </a>
      </div>
    </div>
  );
}
