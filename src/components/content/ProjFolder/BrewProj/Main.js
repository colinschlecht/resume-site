import React from "react";

const Main = () => {
  return (
    <div className="outer-project-container">
      <div className="project-container">
        <div className="demo-video">

        </div>

        <a href="https://www.brewery-project.com/">
          <h1 className="project-title brew-proj">Brewery Project</h1>
        </a>
        <div className="text-container">
          <p className="project-text project-intro brew-proj">
            Brewery Project was a group project with two good friends and
            cohort-mates. The idea came from two of my favorite things, rock
            climbing and a good beer! What the always handy "Mountain Project"
            app does for helping climbers find and learn about new routes,
            brewery project does for locating a good brewery.
          </p>
        </div>
        <div className="square-image with text brew-proj first">
          <span className="project-text floating brew-proj">
            Explore hundreds of breweries from all over the US, brought by the
            Open Brewery Database API.
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.34.10+PM.png"
            className="demo-image"
            alt="Brewery project home"
          ></img>
        </div>
        <div className="square-image with text brew-proj second">
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.31.54+PM.png"
            className="demo-image"
            alt="Brewery project state select"
          ></img>
          <span className="project-text floating brew-proj">
            You can view all by state, search using one of the search bars, or
            find one on the map-box provided map!
          </span>
        </div>
        <div className="square-image with text brew-proj third">
          <span className="project-text floating brew-proj">
            You can even drop a review after visiting so other users know what's
            up!
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.31.01+PM.png"
            className="demo-image"
            alt="Brewery project show brewery"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
