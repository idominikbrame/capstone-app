import './App.css';
import {Link, Routes, Route, Outlet} from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

const App = () => {
  return (
      <div className={"App"}>
          <Login />
      </div>

    )
}

export default App;