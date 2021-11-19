import React, { useState } from "react";

function ContractForm({ handlePost }) {
  const [lender, setLender] = useState("");
  const [newContract, setNewContract] = useState({
    amount: "",
    description: "",
    collateral: "",
    duration: "",
    lender_id: "",
    lendee_id: 8
  });

  const handleChange = (e) => {
    setNewContract({...newContract, [e.target.name]:e.target.value});
  }

  const handleSelect = (e) => {
    setLender(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    newContract.lender_id = lender;

    handlePost(newContract);

    alert("Your contract has been posted")
  }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <section>

    <div className="container">
        <h2>New Contract</h2>
        <div className="row100">
            <div className="col">
                <div className="inputBox">
                  <input
                    type="number"
                    name="amount"
                    required="required"
                    value={newContract.amount}
                    onChange={handleChange}
                  />
                  <span className="text">Amount</span>
                  <span className="line"></span>
                </div>
            </div>

            <div className="col">
                <div className="inputBox">
                <input
                  type="text"
                  name="collateral"
                  required="required"
                  value={newContract.collateral}
                  onChange={handleChange}
                />
                  <span className="text">Collateral</span>
                  <span className="line"></span>
                </div>
            </div>
        </div>

        <div className="row100">
            <div className="col">
                <div className="inputBox">
                <input
                  type="number"
                  name="duration"
                  required="required"
                  value={newContract.duration}
                  onChange={handleChange}
                />
                  <span className="text">Duration</span>
                  <span className="line"></span>
                </div>
            </div>

            <div className="col">
                <div className="inputBox">
                <select onChange={handleSelect}>
                  <option value="none">Select a Lender</option>
                  <option value="1">JP Morgan Pursue</option>
                  <option value="2">Bank of Canadia</option>
                  <option value="3">Capital Two</option>
                  <option value="4">Silverman Sucks</option>
                  <option value="5">TT Bank</option>
                </select>
                </div>
            </div>
        </div>

        <div className="row100">
            <div className="col">
                <div className="inputBox textarea">
                    <textarea style={{resize: "none"}} required="required" onChange={handleChange} name="description" value={newContract.description}></textarea>
                    <span className="text">Description</span>
                    <span className="line"></span>
                </div>
            </div>
        </div>

        <div className="row100">
          <div id="new-contract-button" className="col">
            <button type="submit">Create Contract</button>
          </div>
        </div>

    </div>
    </section>
    </form>
    </div>
    </>
  );
}

export default ContractForm;