import { BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import Nav from "./nav/Nav";
import Header from "./Header";
import Main from "./Main";
import Bottom from "./nav/Bottom";

function App() {



    document.onscroll = () => {  
      const scrollTotal = document.scrollingElement.scrollTop
      const target = document.querySelector("div.ui.inverted.vertical")
      // target.style.minHeight = `${90 + ((scrollTotal * 0.07) *0.7)}%`
      target.style.transform = `translate3d(0px, ${((scrollTotal) * .45)}px, 0px)`
    }



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
