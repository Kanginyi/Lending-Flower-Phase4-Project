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
  console.log(lendersData);

  return (
    <div>
      <div className="lender-card" id="jpmorgan-card">
        <h3><span><img src="https://nhqux1e4gny1xohv8r1ltd1s-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/JPMorganChase.Logo_-600x600.png" /></span> {jpMorgan?.name}</h3>
        <h4>Current Interest Rate: {jpMorgan?.interest_rate}%</h4>
        <p>Description: Interest Only For First Three Months</p>
      </div>
      <div className="lender-card" id="canadia-card">
        <h3><span><img src="https://logodix.com/logo/295115.png" /></span>{canadia?.name}</h3>
        <h4>Current Interest Rate: {canadia?.interest_rate}%</h4>
        <p>Description: Debt Consolidation</p>
      </div>
      <div className="lender-card" id="capitaltwo-card">
        <h3><span><img src="https://logodix.com/logo/516099.png" /></span>{capitalTwo?.name}</h3>
        <h4>Current Interest Rate: {capitalTwo?.interest_rate}%</h4>
        <p>Description: Fixed Rate Mortgage</p>
      </div>
      <div className="lender-card" id="silverman-card">
        <h3><span><img src="https://logopond.com/logos/fe9d7b3b73404aab22b1adfa84be2391.png" /></span>{silverman?.name}</h3>
        <h4>Current Interest Rate: {silverman?.interest_rate}%</h4>
        <p>Description: Student Loan</p>
      </div>
      <div className="lender-card" id="ttbank-card">
        <h3><span><img src="https://data.whicdn.com/images/275603802/original.gif" /></span>{ttBank?.name}</h3>
        <h4>Current Interest Rate: {ttBank?.interest_rate}%</h4>
        <p>Description: Auto Loan</p>
      </div>
    </div>
  );
}

export default Lenders;

<span><img src="" /></span>