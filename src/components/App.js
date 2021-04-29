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
    const dividingTitles = document.querySelectorAll("h1.sub.header.title.projects");
    let headerArr = Array.from(targets);
    let titleArr = Array.from(dividingTitles);
    
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
          if (isBottom(main2)){ 
            console.log(-2200 + (scrollTotal * 0.01 + 7) ** 2);
          target.style.transform = `translate3d(${
            -2200 + (scrollTotal * 0.01 + 5) ** 2
          }px, 0px, 0px)`;
          main3.style.marginTop = `${30 - (scrollTotal * 0.01 - 10)}%`;

        }
          break;
      }
    }
    if (isBottom(main)) {
      const start = parseInt(
        targets[1].style.transform.split("(")[1].split("px")[0]
      );
      targets[1].style.transform = `${start}, 0px, 0px)`;
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
