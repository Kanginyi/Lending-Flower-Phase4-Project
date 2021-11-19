import Navbar from "./Components/Navbar";
import ContractContainer from "./Components/ContractContainer";
import Login from "./Components/Login";
import Lenders from "./Components/Lenders";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ContractForm from "./Components/ContractForm";

import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
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

  const handlePost = (e) => {
    fetch("/contracts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(e)
    })
      .then(resp => resp.json())
      .then(data => setContractList([data, ...contractList]));
  }

  return (
    <>
    <Router>
        <Navbar/>
        <div id="main">
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/lenders" element={ <Lenders />}/>
          <Route path="new_contract" element={ <ContractForm handlePost={handlePost} />}/>
          <Route path="/contracts" element={ <ContractContainer contractList={contractList} />}/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/contact" element={ <Contact />}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;