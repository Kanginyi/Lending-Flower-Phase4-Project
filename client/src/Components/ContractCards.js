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
      <h3 className="contract-lender">Lender: <span className="contract-lender-text">{lender}</span></h3>
      <h3 className="contract-lendee">Lendee: <span className="contract-lendee-text">{lendee}</span></h3>

      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Interest Rate:</strong> {interestRate}%</p>
      <p><strong>Duration:</strong> {duration} Days</p>

      <p><strong>Description:</strong> {description}</p>
      <p><strong>Collateral:</strong> {collateral}</p>
    </div>
  );
}

export default ContractCard;
