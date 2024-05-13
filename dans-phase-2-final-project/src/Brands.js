import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Brands({ shoesList }) {

    function handleClick(e) {
        console.log(e);
    }

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
                        <Link id="nike" to="/shoes" onClick={handleClick} shoesList={shoesList}>Click to see Nike shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Jordan</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/jordan.svg" alt="Jordan logo" />
                        <br/>
                        <Link id="jordan" to="/shoes" onClick={handleClick} shoesList={shoesList}>Click to see Jordan shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Adidas</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/adidas/adidas-originals.svg" alt="Adidas logo" />
                        <br/>
                        <Link id="adidas" to="/shoes" onClick={handleClick} shoesList={shoesList}>Click to see Adidas shoes</Link>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default Brands;