import ShoeCard from "./ShoeCard";

function Shoes() {

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