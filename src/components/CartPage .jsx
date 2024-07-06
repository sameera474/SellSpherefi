import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, e) => {
    const quantity = parseInt(e.target.value, 10);
    updateQuantity(productId, quantity);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <label>Quantity:</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.productId, e)}
              />
              <button onClick={() => handleRemove(item.productId)}>
                Remove
              </button>
            </div>
          ))}
          <p>Total Price: ${getTotalPrice()}</p>
          <button onClick={() => alert("Implement checkout functionality")}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
