import NavBar from "./NavBar";
import React, { useState } from "react";

function AddShoe() {
    const [newShoe, setNewShoe] = useState({
        brand: "",
        name: "",
        price: "",
        imageURL: ""
    });

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
            <form className="form">
                    <table>
                        <tbody>
                            <tr>
                                <td align="right">Brand: </td>
                                <td align="left"><input id="brand" type="text" value={newShoe.brand}/></td>
                            </tr>
                            <tr>
                                <td align="right">Name: </td>
                                <td align="left"><input id="name" type="text" value={newShoe.name}/></td>
                            </tr>
                            <tr>
                                <td align="right">Price: </td>
                                <td align="left"><input id="price" type="text" value={newShoe.price}/></td>
                            </tr>
                            <tr>
                                <td align="right">Image URL: </td>
                                <td align="left"><input id="imageURL" type="text" value={newShoe.imageURL}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button">Submit</button>
                </form>
            </main>
        </>
    )
}

export default AddShoe;