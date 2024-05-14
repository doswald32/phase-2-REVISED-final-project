import './App.css';
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/shoes")
      .then(r => r.json())
      .then(data => setShoesList(data))
  }, []);

  console.log(shoesList);

  function addShoe(newShoe) {
    setShoesList([...shoesList, newShoe]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet context={{shoesList, setShoesList, addShoe}}/>
    </div>
  );
}

export default App;
