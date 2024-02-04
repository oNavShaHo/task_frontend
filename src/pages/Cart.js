import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ProductDataContext } from "../context/context";
import Cartt from "../components/Cart";

function Cart() {
  const { cart, setCart } = useContext(ProductDataContext);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    const existingItem = updatedCart.items.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.items.push({ ...product, quantity: 1 });
    }

    updatedCart.totalPrice += product.price;
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    const itemToRemove = updatedCart.items.find(
      (item) => item.id === productId
    );

    if (itemToRemove) {
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity -= 1;
      } else {
        updatedCart.items = updatedCart.items.filter(
          (item) => item.id !== productId
        );
      }

      updatedCart.totalPrice -= itemToRemove.price;
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2>Your Cart</h2>
        {cart.items.length > 0 ? (
          <div>
            <ul className="flex flex-col gap-4">
              {cart.items.map((item) => (
                <li  key={item.id}>
                  <Cartt remove={removeFromCart} data={item} />
                </li>
              ))}
            </ul>
            <p>Total Price: ${cart.totalPrice}</p>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
