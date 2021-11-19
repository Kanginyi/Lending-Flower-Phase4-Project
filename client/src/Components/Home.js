import React from "react";
import GoldBackground from "../GoldBackground.mp4";

function Home() {
  return (
    <div id="homepage">
      <h1 id="homepage-welcome">Lending Breeze</h1>
      <h3 id="homepage-slogan">Initiating Loans With Ease</h3>
      <video
        id="background-video"
        src={GoldBackground}
        loop
        muted
        autoPlay={true}
      />
      <div id="homepage-paras-parent">
        <div id="homepage-paras-div">
          <div className="homepage-para-divs">
            <p className="homepage-paras">
              Lending Breeze is a lending platform where you can compare rates from accredited lenders and find the best deals for your loans.
            </p>
          </div>
          <div className="homepage-para-divs">
            <p className="homepage-paras">
              Whether you want to buy a house or start a small business to sell your famous chili (don't drop it), we've got you covered. Lending Breeze really makes it a breeze! We're the only online loan marketplace that isn't actually a loan marketplace!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

//Line 17 - hilarious bro, haha
