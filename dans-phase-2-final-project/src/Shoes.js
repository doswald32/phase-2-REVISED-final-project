import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function Shoes() {
    const [shoesList, setShoesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/shoes")
        .then(r => r.json())
        .then(data => setShoesList(data))
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div>Shoes</div>
            </main>
        </>
    )
}

export default Shoes;