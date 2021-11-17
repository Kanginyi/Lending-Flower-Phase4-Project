import Navbar from "./Components/Navbar";
import ContractContainer from "./Components/ContractContainer";
import Login from "./Components/Login";
import Lenders from "./Components/Lenders";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <div id="main">
        <Routes>
          <Route path="lenders" element={ <Lenders />}/>
          <Route path="contracts" element={ <ContractContainer />}/>
          <Route path="login" element={ <Login /> }/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;