import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { ProductDataContext } from "../context/context";
import Cartt from "../components/Cart";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, setCart, placeOrderForCart } = useContext(ProductDataContext);

  const navigate = useNavigate();

  function place() {
    placeOrderForCart();
    alert("order placed");
    navigate("/Home");
  }

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
    <div className="bg-blue-100 h-screen">
      <Navbar />
      <div className="p-4 ">
        {cart.items.length > 0 ? (
          <div>
            <div className="flex justify-center p-4 items-center gap-4">
              <ul className="flex flex-col p-4 bg-white gap-4">
                <h2 className="text-xl ">Your Cart</h2>
                {cart.items.map((item) => (
                  <li key={item.id}>
                    <Cartt remove={removeFromCart} data={item} />
                  </li>
                ))}
                <button className="bg-blue-600 text-white px-2 py-1 ml-6" onClick={place}>Place Order</button>
              </ul>
              <div className="bg-white w-[40vw] self-start flex flex-col gap-3 p-4">
                <h1 className="text-xl">Price Details</h1>
                <div className="flex justify-between">
                  <p>Price</p>
                  <p>{cart.totalPrice}</p>
                </div>

                <div className="flex justify-between">
                  <p>Discount Price</p>
                  <p>100</p>
                </div>

                <div className="flex justify-between">
                  <p>Delivery Charge</p>
                  <p>50</p>
                </div>

                <hr />

                <div className="flex justify-between">
                  <p className="text-lg">Total</p>
                  <p>{cart.totalPrice - 50}</p>
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
