import React from "react";

const ItemList = ({ title, id,status,handleDelete}) => {
    return (
    <div>
        <h1>{title}</h1>
        <button onClick = {() => handleDelete(id)}>Delete</button>
    </div>
    )
}


export default ItemList;