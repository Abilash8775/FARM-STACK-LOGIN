import './App.css';
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Login from "./components/Login";
import"./components/bootstrap.css"
import Ls from "./components/Ls";
import Lf from "./components/Lf";

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Services" element={<Services/>}/>
              <Route path="/Signup" element={<Signup/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Ls" element={<Ls/>}/>
              <Route path="/Lf" element={<Lf/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
