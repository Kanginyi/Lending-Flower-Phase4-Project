import React, { useState } from "react";

function ContractForm({ addNewContract }) {
  const [amount, setAmount] = useState(0);
  const [collateral, setCollateral] = useState("");
  const [duration, setDuration] = useState(0);
  const [interest, setInterest] = useState(0);
  const [description, setDescription] = useState("");
  const [lender, setLender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newContractObj = {
      amount: amount,
      duration: duration,
      amount: amount,
      description: description,
      // lender: { lender: { name: lenders } },
      lender: lender,
      // lendee_id: lendeeId,
      // lender: {
      //   name: lenderName,
      // },
      // lendee: {
      //   name: lendeeName,
      // },
    };
    // console.log(newContract);
    console.log(newContractObj);
    console.log();

    fetch("/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContractObj),
    })
      .then((response) => response.json())
      .then((newContract) => {
        addNewContract(newContract);
      });
  }

  return (
    <div className="new-contract-form">
      <h2>New Contract</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Collateral
          <input
            type="text"
            name="collateral"
            placeholder="Collateral"
            value={collateral}
            onChange={(e) => setCollateral(e.target.value)}
          />
        </label>
        <br />
        {/* <label>
          Interest Rate
          <input
            type="number"
            name="interest"
            placeholder="Interest Rate"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </label> */}
        <br />
        <label>
          Duration
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <select onChange={(e) => setLender(e.target.value)}>
          <option value="none">Select a Lender</option>
          <option value="jpMorgan">JP Morgan Pursue</option>
          <option value="canadia">Bank of Canadia</option>
          <option value="capitalTwo">Capital Two</option>
          <option value="silverman">Silverman Sucks</option>
          <option value="ttBank">TT Bank</option>
        </select>
        <br />
        <button type="submit">Add Contract</button>
      </form>
    </div>
  );
}

export default ContractForm;

// import React from 'react';

// function ContractForm() {
//     return (

//     );
// }

// export default ContractForm;

// function Contract Form({handlePost, errors}) {
//   const ["", ""] = useState('')
//   const ["", ""] = useState('')
//   const ["", ""] = useState('')

//   // Lender, Lendee, amount, interest rate, duration, description, collateral

//   function onSubmit(e){
//     e.preventDefault()
//     const new_contract = {
//       name: "",
//       amount : 0,
//       collateral: "",
//       duration: "",
//       description: "",
//     }
//     handlePost(new_contract)
//   }

//     return (
//       <div className="App">
//         {errors?errors.map(e => <div>{e}</div>):null}
//        <form onSubmit={onSubmit}>
//        <label>
//           Name
//           <input type="text" value={name} onChange={(e) => setSomething(e.target.value)} />
//         </label>
//         <br/>
//         <label>
//         Amount
//           <input type="text" value={amount} onChange={(e) => setSomething(e.target.value)} />
//         </label>
//         <br/>
//         <label>
//         Collateral
//           <input type="number" value={collateral} onChange={(e) => setSomething(e.target.value)} />
//         </label>
//         <br/>
//         <label>
//         Duration
//           <input type="text" value={duration} onChange={(e) => setSomething(e.target.value)} />
//         </label>
//         <br/>
//         <label>
//         Description
//           <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setSomething(e.target.value)} />
//         </label>
//         <br/>
//         <input type="submit" value="Submit For Loan" />
//        </form>
//       </div>
//     );
//   }

//   export default ContractForm;
