import React from 'react';
import GoldBackground from "../GoldBackground.mp4"

function Home() {
    return (
        <div id="homepage">
            <h1>Welcome to Lending Breeze</h1>
            <h3>Initiating loans with ease.</h3>
            <video
                id="background-video"
                src={GoldBackground}
                loop
                muted
                autoPlay={true}
            />
            <p>A lending platform where you can compare rates</p>
        </div>
    );
}

export default Home;