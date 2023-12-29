import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
      <Login />
    </div>
  );
}

export default App;
