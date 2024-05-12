import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
            to="/brands"
            className="nav-link"
            >
              Brands
            </NavLink>
            <NavLink 
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

