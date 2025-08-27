import { useState } from "react";
import "./product.css";

const Product = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increasePrice = () => {
    setQuantity((quantity) => quantity + 1 );
  };

  const decreasePrice = () => {
    setQuantity((quantity) => quantity > 1 ? quantity - 1 : 1);
  };

  const moveToCart = () => addToCart(item, quantity);


  let totalPrice = item.price * quantity;

  return (
    <li className="productCard">
      <a href="#">
        <img src={item.image} alt={item.title} className="productImage" />
        <span className="itemTitle">{item.title}</span>
        <span className="itemPrice">${totalPrice}</span>
        <div className="actions">
          <button className="add" onClick={increasePrice}>+</button>
          <button className="remove" onClick={decreasePrice}>-</button>
          <button className="moveToCart" onClick={moveToCart}>addToCart</button>
        </div>
      </a>
    </li>
  );
};

export default Product;