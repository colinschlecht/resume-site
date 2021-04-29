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
    const mainHeader = document.querySelector(".header.title")
    if (isTop(mainHeader, checkedElement) || isTop(wrappedElement, checkedElement))  {
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
        <a href="/subheader1" className="item top" id="top">
          Resume
        </a>
        
        <a href="/subheader2" className="item top" id="top">
          Projects
        </a>
      
        <a href="/subheader3" className="item top" id="top">
          Contact
        </a>
      </div>
    </div>
  );
}

{
  /* <a
          href="https://www.linkedin.com/in/colin-schlecht-390916a8/"
          className="item"
        >
          <i className="linkedin icon"></i>
        </a>
        <a href="https://github.com/colinschlecht" className="item">
          <i className="github square icon "></i>
        </a>
        <a href="https://colinschlecht.medium.com/" className="item">
          <i className="medium icon "></i>
        </a> */
}
