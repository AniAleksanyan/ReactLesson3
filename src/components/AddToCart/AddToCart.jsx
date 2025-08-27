import  "./AddToCart.css";

const AddToCart = ({ cartItems }) => {
  return (
     <div className="cartContainer">
      <h2>Shopping Cart</h2>
      <table className="cartTable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.qty}</td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCart;