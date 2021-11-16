import Navbar from "./Components/Navbar";
import ContractContainer from "./Components/ContractContainer";
import Login from "./Components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
        <Navbar/>
        <ContractContainer />
        <Login />
        <br/><br/><br/><br/><br/>
     </>
  );
}

export default App;