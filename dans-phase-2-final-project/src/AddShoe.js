import React, { useState } from "react";

function AddShoe() {
    const [newShoe, setNewShoe] = useState({
        brand: "",
        name: "",
        price: "",
        imageURL: ""
    });

    function handleChange(e) {
        if (e.target.id === "brand") {
            setNewShoe({...newShoe, brand: e.target.value});
        } else if (e.target.id === "name") {
            setNewShoe({...newShoe, name: e.target.value});
        } else if (e.target.id === "price") {
            setNewShoe({...newShoe, price: e.target.value});
        } else if (e.target.id === "imageURL") {
            setNewShoe({...newShoe, imageURL: e.target.value});
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        setNewShoe({
            name: "",
            brand: "",
            price: "",
            imageURL: ""
        });
    };

    return (
        <>
            <main>
            <form className="form" onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td align="right">Brand: </td>
                                <td align="left"><input id="brand" type="text" value={newShoe.brand} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Name: </td>
                                <td align="left"><input id="name" type="text" value={newShoe.name} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Price: </td>
                                <td align="left"><input id="price" type="text" value={newShoe.price} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td align="right">Image URL: </td>
                                <td align="left"><input id="imageURL" type="text" value={newShoe.imageURL} onChange={handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="submit-button">Submit</button>
                </form>
            </main>
        </>
    )
}

export default AddShoe;