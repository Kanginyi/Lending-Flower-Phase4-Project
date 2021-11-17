import React from "react";
import GoldBackground from "../GoldBackground.mp4";

function Home() {
  return (
    <div id="homepage">
      <h1>Welcome to Lending Breeze</h1>
      <h3>Initiating loans with ease</h3>
      <video
        id="background-video"
        src={GoldBackground}
        loop
        muted
        autoPlay={true}
      />
      <p>
        Lending Breeze is a lending platform where you can compare rates from
        accredited lenders and find the best deals for your loans.
      </p>
      <p>
        Whether you want to buy a house or a mouse, or you want to create a
        company to sell your famous chili (don't drop it), we've got you
        covered. Lending Breeze really makes it a breeze! We're the only online
        loan marketplace that is fake af but also looks legit af.
      </p>
    </div>
  );
}

export default Home;

//Line 17 - hilarious bro, haha
