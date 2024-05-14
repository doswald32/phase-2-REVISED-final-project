import { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";

function Shoes() {
    const [shoesList, setShoesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/shoes")
        .then(r => r.json())
        .then(data => setShoesList(data))
    }, []);

    return (
        <>
            <main>
                <div className="shoes-list">{shoesList.map((shoe) => {
                    return <ShoeCard key={shoe.id} name={shoe.name} brand={shoe.brand} price={shoe.price} imageURL={shoe.imageURL}/>
                })}</div>
            </main>
        </>
    )
}

export default Shoes;