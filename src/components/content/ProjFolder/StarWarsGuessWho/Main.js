import React from "react";

const Main = () => {
  return (
    <div className="outer-project-container">
      <div className="project-container">
        <div className="demo-video">
        </div>
        <a href="https://colinschlecht.github.io/starwarsguesswho/">
          <h1 className="project-title swgw">Star Wars Guess Who</h1>
        </a>
        <div className="text-container">
          <p className="project-text project-intro swgw">
            Star Wars Guess Who is a digital take on the classic board game,
            Guess Who, with a Star Wars twist!
          </p>
        </div>
        <div className="square-image with text">
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.28.01+PM.png"
            className="demo-image"
            alt="StarWars project home"
          ></img>
          <span className="project-text floating to-text">
            Select 16 characters from the original trillogy and prequel movies.
            Each character has descriptive traits based on physical appearance
            and character stats.
          </span>
        </div>
        <div className="square-image with text">
          <span className="project-text floating">
            Increase your odds of guessing the right character through deductive
            reasoning. Just don't forget to flip over those characters you can
            rule out!
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.25.16+PM.png"
            className="demo-image"
            alt="StarWars project game menu"
          ></img>
        </div>

        <div className="square-image with text last">
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.27.33+PM.png"
            className="demo-image"
            alt="StarWars project win"
          ></img>
          <span className="project-text floating last">
            Once you've received enough "Hello There" or "*Visible Confusion*"
            (yes or no) replies, take your shot at guessing the character name
            to win the game!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
