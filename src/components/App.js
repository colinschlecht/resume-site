import { BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import Nav from "./nav/Nav";
import Header from "./Header";
import Main from "./Main";
import Bottom from "./nav/Bottom";

function App() {
  document.onscroll = () => {
    const main = document.getElementById("main-content");
    const main2 = document.getElementById("main-content2");
    const main3 = document.getElementById("main-content3");
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
          target.style.minHeight = `${90 + scrollTotal * 0.01}%`;
          target.style.maxWidth = `${0 + scrollTotal * 0.07}%`;
          if (target.style.maxWidth.split("%")[0] > 100.0001) {
            target.style.maxWidth = `100%`;
          }
          break;
        case "subHeader2":
          if (isBottom(main2)) {
            target.style.maxWidth = `${((scrollTotal * 0.001) ** 2) ** 2}%`;
            if (target.style.maxWidth.split("%")[0] > 100.0001) {
              target.style.maxWidth = `100%`;
            }
            main3.style.marginTop = `${30 - (scrollTotal * 0.01 - 7)}%`;
          }
          break;
        default:
          return null;
      }
    }
    if (isBottom(main)) {
      main2.style.marginTop = `${20 - (scrollTotal * 0.01 - 1)}%`;
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
