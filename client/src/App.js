import Navbar from "./Components/Navbar";
import ContractContainer from "./Components/ContractContainer";
import Login from "./Components/Login";
import Lenders from "./Components/Lenders";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <div id="main">
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/lenders" element={ <Lenders />}/>
          <Route path="/contracts" element={ <ContractContainer />}/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/contact" element={ <Contact />}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;