import './App.css';
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <h1>Welcome!</h1>
        <h3>Instructions</h3>
        <p>- Click on the Brands link to be taken to a list of shoe brands. From there, you can click on a particular brand to see a list of shoes offered by that particular brand.</p>
        <p>- Click on the Shoes link to be taken to a list of all shoes in the database.</p>
        <p>- Click on the Add A Shoe link to add your own shoe to the database. Just enter the shoe's brand, name, price, and image URL before hitting submit. </p>
        <p>-Click on the Home link at any time to be brought back to this page.</p>
      </main>
    </div>
  );
}

export default App;
