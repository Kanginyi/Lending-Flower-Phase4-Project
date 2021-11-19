import React from "react";
import ContractCard from "./ContractCards";

function ContractContainer({contractList}) {
  const showContracts = contractList?.map((contract) => (
    <ContractCard
      key={contract.id}
      amount={contract.amount}
      description={contract.description}
      collateral={contract.collateral}
      duration={contract.duration}
      lender={contract.lender.name}
      lendee={contract.lendee.name}
      interestRate={contract.lender.interest_rate}
    />
  ));

  return (
    <>
      <div>{showContracts}</div>
    </>
  );
}

export default ContractContainer;
