import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Brands() {
    const {shoesList, setShoesList} = useOutletContext();

    function handleClick(e) {
        setShoesList((shoes) => shoes);
        if (e.target.id === "nike") {
            let nikeShoes = shoesList.filter((shoe) => shoe.brand === "Nike");
            setShoesList(nikeShoes);
        } else if (e.target.id === "jordan") {
            let jordanShoes = shoesList.filter((shoe) => shoe.brand === "Jordan");
            setShoesList(jordanShoes);
        } else if (e.target.id === "adidas") {
            let adidasShoes = shoesList.filter((shoe) => shoe.brand === "Adidas");
            setShoesList(adidasShoes);
        };
    };

    return (
        <>
            <main>
                <div className="brands-container">
                    <div className="brand">
                        <h2>Nike</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/nike/nike.svg" alt="Nike logo" />
                        <br/>
                        <Link id="nike" to="/shoes" onClick={handleClick}>Click to see Nike shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Jordan</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/jordan.svg" alt="Jordan logo" />
                        <br/>
                        <Link id="jordan" to="/shoes" onClick={handleClick}>Click to see Jordan shoes</Link>
                    </div>
                    <div className="brand">
                        <h2>Adidas</h2>
                        <img className="brand-image" src="https://images.footlocker.com/content/dam/Resources/shared/brand-logos/adidas/adidas-originals.svg" alt="Adidas logo" />
                        <br/>
                        <Link id="adidas" to="/shoes" onClick={handleClick}>Click to see Adidas shoes</Link>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default Brands;