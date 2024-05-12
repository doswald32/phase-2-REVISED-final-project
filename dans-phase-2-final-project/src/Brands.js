import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Brands() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="brands-container">
                    <div className="brand">
                        <h2>Nike</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/nike/nike.svg" alt="Nike logo" />
                        <br/>
                        <Link to="/shoes">Click to see Nike shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Jordan</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/jordan.svg" alt="Jordan logo" />
                        <br/>
                        <Link to="/shoes">Click to see Jordan shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Adidas</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/adidas/adidas-originals.svg" alt="Adidas logo" />
                        <br/>
                        <Link to="/shoes">Click to see Adidas shoes</Link>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default Brands;