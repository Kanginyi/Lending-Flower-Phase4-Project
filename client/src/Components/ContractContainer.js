import React, { useState, useEffect } from "react";
import ContractCard from "./ContractCards";

function ContractContainer() {
  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    fetch("/contracts")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length > 0) {
          setContractList(data);
        }
      });
  }, []);

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

  return <div>{showContracts}</div>;
}

export default ContractContainer;

//Line 17 - nice - what does the question mark do

//do we need a form to create a new contract?

//if so, do we need a drop down bar for lendees to select a lender
