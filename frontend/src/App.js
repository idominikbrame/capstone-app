import './App.css';
import {Navbar} from './Components/NavBar/Navbar';
import Routers from "./Router";

const App = () => {
  return (
      <div className={"App"}>
          <Navbar />
          <Routers />
      </div>

    )
}

export default App;
