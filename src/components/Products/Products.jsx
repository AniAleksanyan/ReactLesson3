import { useState } from "react";
import Product from "../product/product";
import AddToCart from "../AddToCart/AddToCart"

const Products = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item, quantity) => {
        setCartItems((prevItems) => {
            const currentItem = prevItems.find((i) => i.id === item.id);

            if (currentItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + quantity } : i
                );
            } else {
                return [...prevItems, { ...item, qty: quantity }];
            }
        });
    };
    return (
        <>
            <div className="productsContainer">
                <ul className="productsList">
                    {products.map((item) => (
                        <Product key={item.id} item={item} addToCart = {addToCart}/>
                    ))}
                </ul>
            </div>
            <AddToCart cartItems={cartItems}/>
        </>
    );
};

export default Products;