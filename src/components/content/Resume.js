import React from "react";

const Resume = () => {
  return (
    <div
      className="ui raised very padded text container segment"
      id="main-content2"
    >
      <div className="content" id="resume">
        <div id="content-header">
          <div className="header-title">
            <h1>Colin Schlecht</h1>
          </div>
          <div id="header-address">
            <p>253-583-6528 | schlechtcolin1@gmail.com</p>
          </div>
          <div id="header-links">
            <p>
              <a href="https://github.com/colinschlecht">
                <i className="github square icon "></i> GitHub{" "}
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/colin-schlecht-390916a8/">
                <i className="linkedin icon"> </i> LinkedIn{" "}
              </a>{" "}
              |{" "}
              <a href="https://colinschlecht.medium.com/">
                <i className="medium icon"></i>
                Medium{" "}
              </a>
            </p>
          </div>
          <div className="content background">
            <div className="content title">
              <h4>OVERVIEW</h4>
            </div>
            <div className="ui divider"></div>
            <div className="content body">
              <p>
                Experienced in Ruby on Rails and JavaScript based programming
                with a professional background in customer service and supply
                chain. Possesses strong interpersonal skills, driving
                communication between internal and external customers to
                efficiently achieve operational goals. Nimble learner with a
                passion for finding creative solutions to complex problems.
              </p>
            </div>
          </div>
          <div className="content skills">
            <div className="content title">
              <h4>TECHNICAL SKILLS</h4>
            </div>
            <div className="ui divider"></div>
            <div className="content body">
              <p>
                JavaScript, React, Redux, Ruby on Rails, Next, Solidity,
                Node/Express, Postgres, SQLite, SQL, HTML, CSS, Google /
                Microsoft Suite, SAP
              </p>
            </div>
          </div>
          <div className="content projects">
            <div className="content title">
              <h4>TECHNICAL PROJECTS</h4>
            </div>
            <div className="ui divider"></div>
            <div className="project title">
              <a href="http://nftgram.io/">nftgram.io</a>|
              <a href="https://github.com/colinschlecht/nftgram">
                <i className="github square icon "></i>
              </a>
            </div>
            <div className="project">
              <p className="description">
                Web application in which users can create, display, sell, and
                purchase NFT’s (Non-Fungible Tokens) on a social
                media/marketplace platform.
              </p>
              <ul>
                <li>
                  Leveraged the Ethereum Blockchain, Interplanetary File System
                  (IPFS) and Ruby on Rails to build a hybrid decentralized
                  back-end.
                </li>
                <li>
                  Integrated the MetaMask Cryptocurrency wallet for processing
                  Ethereum transactions with ease and streamline the user
                  authentication and authorization processes.
                </li>
                <li>
                  Explored advanced database concepts such as polymorphism and
                  self-referencing models to efficiently enable complex user
                  interaction.
                </li>
                <li>
                  Maintained global and local state through redux and react
                  hooks to optimize dataflow client-side.
                </li>
              </ul>
            </div>
            <div className="project title">
              <a href="https://www.brewery-project.com/">Brewery Project</a>|
              <a href="https://github.com/harrf815/brew-frontend">
                <i className="github square icon "></i>
              </a>
            </div>
            <div className="project">
              <p className="description">
                A brewery locator web service, where users can write/read
                reviews for breweries by location.
              </p>
              <ul>
                <li>
                  Enabled user authentication and authorization through
                  client-side storage of encrypted data via JSON Web Tokens.
                </li>
                <li>
                  Utilized a React client and Ruby on Rails server to
                  efficiently route the user to content based on location.
                </li>
                <li>
                  Integrated Geo-location technology mapping the location of all
                  available breweries.
                </li>
              </ul>
            </div>
            <div className="project title">
              <a href="https://colinschlecht.github.io/starwarsguesswho/">
                Star Wars Guess Who
              </a>
              |
              <a href="https://github.com/colinschlecht/starwarsguesswho">
                <i className="github square icon "></i>
              </a>
            </div>
            <div className="project">
              <p className="description">
                Guessing game built on a single page web application where a
                user attempts to guess the name of a character through site
                interaction and deductive reasoning.
              </p>
              <ul>
                <li>
                  Merged Vanilla JavaScript, HTML and CSS in the front end to
                  build a responsive single page application.
                </li>
                <li>
                  Mapped complex data structures and control flows to implement
                  game logic and content delivery.
                </li>
                <li>
                  Compiled external resources to seed a server-side database of
                  specific character traits, curated to the games logic.
                </li>
                <li>
                  Experimented with custom CSS transformations to provide an
                  immersive user experience.
                </li>
              </ul>
            </div>
          </div>
          <div className="content experience">
            <div className="content title">
              <h4>EXPERIENCE</h4>
            </div>
            <div className="ui divider"></div>
            <div className="company">
              <h4>Recreational Equipment Incorporated, REI</h4>
            </div>
            <div className="job title">
              <h4>
                Customer Support <span className="location">Sumner, Wa</span>
              </h4>
            </div>
            <div className="job description">
              <ul>
                <li>
                  Utilized internal warehouse and enterprise software to provide
                  escalated support/instruction to internal representatives
                  taking in customer inquiries to create resolutions for
                  de-escalation
                </li>
                <li>
                  Communicated with warehouses, retail locations, shipping and
                  vendor partners to identify trends in customer facing issues
                  and prevention of future complications.
                </li>
              </ul>
              <div className="job title">
                <h4>
                  Vendor Operations Analyst
                  <span className="location">Kent, Wa</span>
                </h4>
              </div>
              <div className="job description">
                <ul>
                  <li>
                    Collaborated alongside various supply chain and
                    merchandising departments to ensure the efficient flow of
                    goods and data into REI’s supply chain.
                  </li>
                  <li>
                    Onboarded prospective vendors and maintained existing
                    vendors B2B connectivity through EDI, master data records,
                    and training/monitoring shipping/goods non-compliance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="content title">
              <h4>EDUCATION</h4>
            </div>
            <div className="ui divider"></div>
            <div className="school">
              <h4>
                Flatiron School <span className="location">Seattle, Wa</span>
              </h4>
            </div>
            <p>
              Full Stack Web Development, Ruby on Rails and JavaScript program
            </p>
            <br></br>
            <div className="school">
              <h4>
                Central Washington University
                <span className="location">Ellensburg, Wa</span>
              </h4>
            </div>
            <p>BSBA Business Administration / Supply Chain Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
