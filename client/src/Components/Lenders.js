import React, { useState, useEffect } from "react";

function Lenders() {
  const [lendersData, setLendersData] = useState([]);

  useEffect(() => {
    fetch("/lenders")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length > 0) {
          setLendersData(data);
        }
      });
  }, []);

  const jpMorgan = lendersData[0];
  const canadia = lendersData[1];
  const capitalTwo = lendersData[2];
  const silverman = lendersData[3];
  const ttBank = lendersData[4];

  return (
    <div id="lender-card-parent">
      <div className="lender-card" id="jpmorgan-card">
        <div className="lender-image-div">
          <img src="https://www.logolynx.com/images/logolynx/e3/e3de6dd45dca767b417ac86a74f772a5.jpeg" alt="JP Morgan Chase Logo" title="JP Morgan Pursue Logo"/>
        </div>
        <div className="lender-description-div" id="jpmorgan-text">
          <h3>{jpMorgan?.name}</h3>
          <h4>Current Interest Rate: {jpMorgan?.interest_rate}.0%</h4>
          <div className="lender-description">
            <p><strong>Description:</strong> JP Morgan Pursue only goes after the best and brightest assets.</p>
          </div>
        </div>
      </div>

      <div className="lender-card" id="canadia-card">
        <div className="lender-image-div">
          <img src="https://logodix.com/logo/295115.png" alt="Bank of America Logo" title="Bank of Canadia Logo"/>
        </div>
        <div className="lender-description-div" id="canadia-text">
          <h3>{canadia?.name}</h3>
          <h4>Current Interest Rate: {canadia?.interest_rate}%</h4>
          <div className="lender-description">
            <p><strong>Description:</strong> Bank of Canadia specializes in debt consolidation. We're Gretzky approved!</p>
          </div>
        </div>
      </div>

      <div className="lender-card" id="capitaltwo-card">
        <div className="lender-image-div">
          <img src="https://logodix.com/logo/516099.png" alt="Capital One Logo" title="Capital Two Logo"/>
        </div>
        <div className="lender-description-div" id="capitaltwo-text">
          <h3>{capitalTwo?.name}</h3>
          <h4>Current Interest Rate: {capitalTwo?.interest_rate}%</h4>
          <div className="lender-description">
            <p><strong>Description:</strong> Capital Two specializes in auto loans and personal banking.</p>
          </div>
        </div>
      </div>

      <div className="lender-card" id="silverman-card">
        <div className="lender-image-div">
          <img src="https://logopond.com/logos/fe9d7b3b73404aab22b1adfa84be2391.png" alt="Random Sucks Logo" title="Silverman Sucks"/>
        </div>
        <div className="lender-description-div" id="silverman-text">
          <h3>{silverman?.name}</h3>
          <h4>Current Interest Rate: {silverman?.interest_rate}%</h4>
          <div className="lender-description">
            <p><strong>Description:</strong> Silverman Sucks is the leader in global investment banking. We don't suck!</p>
          </div>
        </div>
      </div>

      <div className="lender-card" id="ttbank-card">
        <div className="lender-image-div">
          <img src="https://data.whicdn.com/images/275603802/original.gif"/>
        </div>
        <div className="lender-description-div" id="ttbank-text">
          <h3>{ttBank?.name}</h3>
          <h4>Current Interest Rate: {ttBank?.interest_rate}%</h4>
          <div className="lender-description">
            <p><strong>Description:</strong> TT Bank makes you feel special, so you can dance the night away.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lenders;

<span><img src="" /></span>