import ShoeCard from "./ShoeCard";
import { Outlet, useOutletContext } from "react-router-dom";

function Shoes() {
    const {shoesList, setShoesList} = useOutletContext();

    console.log(shoesList);

    return (
        <>
            <main>
                <Outlet />
                <div className="shoes-list">{shoesList.map((shoe) => {
                    return <ShoeCard key={shoe.id} name={shoe.name} brand={shoe.brand} price={shoe.price} imageURL={shoe.imageURL}/>
                })}</div>
            </main>
        </>
    )
}

export default Shoes;