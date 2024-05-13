import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
    const [shoesList, setShoesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/shoes")
        .then(r => r.json())
        .then(data => setShoesList(data))
    }, []);

    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
              Home
            </NavLink>
            <NavLink shoesList={shoesList}
            to="/brands"
            className="nav-link"
            >
              Brands
            </NavLink>
            <NavLink shoesList={shoesList}
            to="/shoes"
            className="nav-link"
            >
              Shoes
            </NavLink>
            <NavLink 
            to="/add-a-shoe"
            className="nav-link"
            >
              Add A Shoe
            </NavLink>
        </nav>
    );
};

export default NavBar;

