import React from "react";

function ContractCard({
  amount,
  description,
  collateral,
  duration,
  lendee,
  lender,
  interestRate,
}) {

  return (
    <div className="contract-card">
      <h3 className="contract-lender">Lender: {lender}</h3>
      <h3 className="contract-lendee">Lendee: {lendee}</h3>

      <p>Amount: ${amount}</p>
      <p>Interest Rate: {interestRate}%</p>
      <p>Duration: {duration} Days</p>

      <p>Description: {description}</p>
      <p>Collateral: {collateral}</p>
    </div>
  );
}

export default ContractCard;
