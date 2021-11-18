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
    <div>
      <div className="lender-card">
        <h3>{jpMorgan?.name}</h3>
        <h4>Current Interest Rate: {jpMorgan?.interest_rate}%</h4>
        <p>Description: Interest Only For First Three Months</p>
      </div>
      <div className="lender-card">
        <h3>{canadia?.name}</h3>
        <h4>Current Interest Rate: {canadia?.interest_rate}%</h4>
        <p>Description: Debt Consolidation</p>
      </div>
      <div className="lender-card">
        <h3>{capitalTwo?.name}</h3>
        <h4>Current Interest Rate: {capitalTwo?.interest_rate}%</h4>
        <p>Description: Fixed Rate Mortgage</p>
      </div>
      <div className="lender-card">
        <h3>{silverman?.name}</h3>
        <h4>Current Interest Rate: {silverman?.interest_rate}%</h4>
        <p>Description: Student Loan</p>
      </div>
      <div className="lender-card">
        <h3>{ttBank?.name}</h3>
        <h4>Current Interest Rate: {ttBank?.interest_rate}%</h4>
        <p>Description: Auto Loan</p>
      </div>
    </div>
  );
}

export default Lenders;
