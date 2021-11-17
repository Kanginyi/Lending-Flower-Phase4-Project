import React, { useState} from 'react'

function Contract Form({handlePost, errors}) {
  const ["", ""] = useState('')
  const ["", ""] = useState('')
  const ["", ""] = useState('')
 

  function onSubmit(e){
    e.preventDefault()
    const new_contract = {
      name,
      amount,
      collateral,
      duration,
      description,
      ongoing:true
    }
    handlePost(new_contract)
  }
    return (
      <div className="App">
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Name
          <input type="text" value={name} onChange={(e) => setSomething(e.target.value)} />
        </label>
        <br/>
        <label>
        Amount
          <input type="text" value={amount} onChange={(e) => setSomething(e.target.value)} />
        </label>
        <br/>
        <label>
        Collateral
          <input type="number" value={collateral} onChange={(e) => setSomething(e.target.value)} />
        </label>
        <br/>
        <label>
        Duration
          <input type="text" value={duration} onChange={(e) => setSomething(e.target.value)} />
        </label>
        <br/>
        <label>
        Description
          <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setSomething(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Submit For Loan" />
       </form>
      </div>
    );
  }
  
  export default ContractForm;