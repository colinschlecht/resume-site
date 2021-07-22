import React from "react";
import {Divider } from "semantic-ui-react"

const Main = () => {
  return (
    <div className="outer-project-container">
      <div className="project-container">
        <a href="http://nftgram.io/">
          <h1 className="project-title nftgram">NFTgram</h1>
        </a>
          <Divider />
        <div className="demo-video nftgram">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/ICYFH2EkYBs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
          <Divider />
        <div className="text-container">
          <p className="project-text project-intro nftgram">
            NFTgram is intended to offer the user an easy way to show off their
            NFT collection, create NFTs, and even buy or sell NFTs without fees.
          </p>
        </div>
        <div className="vertical-image with text floating nft left">
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.16.33+PM.png"
            className="demo-image floating nft"
            alt="NFT project explore example"
          ></img>
          <span className="project-text floating nft">
            Explore an infinite scroll timeline, loading more pieces of art as
            you reach the bottom for "endless" entertainment.
          </span>
        </div>
        <div className="horizontal-image with text nft">
          <span className="project-text horizontal nft">
            View individual NFTs, in a detailed show page with all their
            metadata, artist/owner info and leave a like or a comment to show
            your support.{" "}
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.15.52+PM.png"
            className="demo-image large nft"
            alt="NFT project show-art page"
          ></img>
        </div>

        <div className="horizontal-image with text floating nft">
          <span className="project-text horizontal nft">
            Utilize the MetaMask crypto wallet browser extension to interract
            with the Ethereum blockchain on NFTgram.
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.19.57+PM.png"
            className="demo-image large nft"
            alt="NFT project sell"
          ></img>
        </div>
        <div className="vertical-image with text floating nft">
          <span className="project-text vertical floating nft right">
            Combined with a crisp user interface, the wallet also is smoothly
            integrated with NFTgram to create, login, and switch user accounts
            with ease.
          </span>
          <img
            src="https://colinsprojectphotos.s3.amazonaws.com/example+photos/Screen+Shot+2021-07-19+at+9.17.12+PM.png"
            className="demo-image floating nft"
            alt="NFT project ui menu"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
