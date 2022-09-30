import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart]=useState(false);

  function handleAddToCart(){
    setInCart((inCart)=> !inCart);
    console.log(inCart)
  }

  const ItemClass = inCart ? "in-cart": " "

  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
