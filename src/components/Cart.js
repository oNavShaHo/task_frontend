import React, { useContext } from "react";
import { ProductDataContext } from "../context/context";

function Cart(props) {
  console.log(props);
  const { setCart, cart, addToCart } = useContext(ProductDataContext);

  const removeFromCart = () => {
    let updatedCart = cart.items.filter((item) => item.id !== props.data.id);
    setCart({ ...cart, items: updatedCart });
    console.log(cart);
  };

  function increase() {
    addToCart(props.data);
  }

  return (
    <div className="h-36 flex gap-2 p-6 text-[gray] bg-white">
      <div className="p-2">
        <img src={props.data.image} alt="img" className="h-24" />
      </div>
      <div>
        <h1>{props.data.title}</h1>
        <div className="flex justify-between">
          <p>$ {props.data.amount}</p>
          <button
            className="border-3 border-red-600 text-red-600 rounded-[100%]"
            onClick={removeFromCart}
          >
            <p>x</p>
          </button>
        </div>
        <div className="flex gap-3">
          <p onClick={increase}>+</p>
          <p>{props.data.quantity}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Cart;
