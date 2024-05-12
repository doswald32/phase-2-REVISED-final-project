import NavBar from "./NavBar";

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
                        <p id="nike-shoes">Click to see Nike shoes</p>
                    </div>
                    <div className="brand">
                        <h2>Jordan</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/jordan.svg" alt="Jordan logo" />
                        <p id="jordan-shoes">Click to see Jordan shoes</p>
                    </div>
                    <div className="brand">
                        <h2>Adidas</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/adidas/adidas-originals.svg" alt="Adidas logo" />
                        <p id="adidas-shoes">Click to see Adidas shoes</p>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default Brands;