import React, { useState } from "react";
import NFTgram from "./ProjFolder/NFTgram/Main";
import BrewProj from "./ProjFolder/BrewProj/Main";
import StarWarsGuessWho from "./ProjFolder/StarWarsGuessWho/Main";

const Projects = () => {
  const [nftGram, setNftGram] = useState(true);
  const [swgw, setSWGW] = useState(false);
  const [brewProj, setBrewProj] = useState(false);

  const handleDisplay = (e, display) => {
    e.preventDefault();
    setNftGram(false);
    setSWGW(false);
    setBrewProj(false);
    switch (display) {
      case "NFTGRAM":
        setNftGram(true);
        break;
      case "SWGW":
        setSWGW(true);
        break;
      case "BREWPROJ":
        setBrewProj(true);
        break;
      default:
        setNftGram(true);
    }
  };

  const setChoice = (disp) =>
    disp ? "proj-list-item focused" : "proj-list-item";

  return (
    <>
    
      <div id="main-content3" className="main-proj-container  proj-main">
      <h1 id="projects-title-test">Projects</h1>
        <span className="dummydiv" >
        </span>
        
          <ul className="proj-bar proj-list">
            <a
              href="/NFTgram/show"
              onClick={(e) => handleDisplay(e, "NFTGRAM")}
            >
              <li className={setChoice(nftGram)} id="NFTGRAM">
                <div className="tab-protector">
                  <h3 className="tab-title NFTgram">NFTgram</h3>
                </div>
              </li>
            </a>
            <a
              href="/StarWarsGuessWho/show"
              onClick={(e) => handleDisplay(e, "SWGW")}
            >
              <li className={setChoice(swgw)} id="SWGW">
                <div className="tab-protector">
                  <h3 className="tab-title SWGW">Star Wars Guess Who</h3>
                </div>
              </li>
            </a>
            <a
              href="/BrewProj/show"
              onClick={(e) => handleDisplay(e, "BREWPROJ")}
            >
              <li className={setChoice(brewProj)} id="BREWPROJ">
                <div className="tab-protector">
                  <h3 className="tab-title BREWPROJ">Brewery Project</h3>
                </div>
              </li>
            </a>
          </ul>
          
          <div className="proj-holder">
            <div className="inner-proj-holder">
              {nftGram && <NFTgram />}
              {swgw && <StarWarsGuessWho />}
              {brewProj && <BrewProj />}
            </div>
          </div>
        
      </div>
    </>
  );
};
export default Projects;
