import './App.css';
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
