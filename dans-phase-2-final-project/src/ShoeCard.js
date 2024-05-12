function ShoeCard({ name, brand, price, imageURL }) {
    return (
        <div className="shoe-card">
            <h1>{brand}</h1>
            <img className="shoe-image" src={imageURL} alt="logo"/>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default ShoeCard;