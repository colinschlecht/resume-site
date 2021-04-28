import { BrowserRouter, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import Header from "./Header";
import Main from "./Main";
import Bottom from "./nav/Bottom";

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Switch>
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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
