import ShoeCard from "./ShoeCard";
import { useOutletContext } from "react-router-dom";

function Shoes() {
    const {shoesList, setShoesList} = useOutletContext();

    function handleReset() {
        fetch("http://localhost:3001/shoes")
        .then(r => r.json())
        .then(data => setShoesList(data));
    };

    return (
        <>
            <main>
                <label>Click here to reset shoes list: </label>
                <button className="reset-button" onClick={handleReset}>Reset Shoes List</button>
                <br/>
                <div className="shoes-list">{shoesList.map((shoe) => {
                    return <ShoeCard key={shoe.id} name={shoe.name} brand={shoe.brand} price={shoe.price} imageURL={shoe.imageURL}/>
                })}</div>
            </main>
        </>
    )
}

export default Shoes;