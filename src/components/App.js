import { BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import Nav from "./nav/Nav";
import Header from "./Header";
import Main from "./Main";
import Bottom from "./nav/Bottom";

function App() {
  document.onscroll = () => {
    const main = document.getElementById("main-content");
    const scrollTotal = document.scrollingElement.scrollTop;
    const targets = document.querySelectorAll("div.ui.inverted.vertical");
    let headerArr = Array.from(targets);
    for (let target of headerArr) {
      switch (target.id) {
        case "masthead":
          target.style.transform = `translate3d(0px, ${
            scrollTotal * 0.45
          }px, 0px)`;
          break;
        case "subHeader1":
          target.style.transform = `translate3d(${
            450 - scrollTotal * 0.45
          }px, 0px, 0px)`;
          break;
        case "subHeader2":
          target.style.transform = `translate3d(${
            scrollTotal * 0.45
          }px, 0px, 0px)`;
          break;
      }
    }
    if (isBottom(main)) {
      const start = parseInt(targets[1].style.transform.split('(')[1].split('px')[0])
      targets[1].style.transform = `${start}, 0px, 0px)`;
      targets[1].style.transform = `${start}, 0px, 0px)`;
    }
  };

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom < window.innerHeight;
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <>
            <div className="App">
              <div id="topnav">
                <Nav />
              </div>
              <Header />
              <Main />
              <div id="bottomnav">
                <Bottom />
              </div>
            </div>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
