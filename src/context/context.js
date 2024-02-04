// ProductDataContext.js
import React, { createContext, useState } from 'react';

export const ProductDataContext = createContext();

export function ProductDataProvider({ children }) {
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [userId, setUserId] = useState(null);

  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
  });

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    const existingItem = updatedCart.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.items.push({ ...product, quantity: 1 });
    }

    updatedCart.totalPrice =parseInt(updatedCart.totalPrice)+ parseInt(product.amount);
    setCart(updatedCart);
  };

  const placeOrderForItem = async (productId) => {
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          products: [{ productId, quantity: 1 }],
          totalPrice: 0, // Assuming single item, set totalPrice to 0
        }),
      });

      if (response.ok) {
        console.log('Order placed successfully for a single item!');
      } else {
        console.error('Failed to place order for a single item');
      }
    } catch (error) {
      console.error('Error placing order for a single item:', error);
    }
  };

  const placeOrderForCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          products: cart.items.map(item => ({ productId: item.id, quantity: item.quantity })),
          totalPrice: cart.totalPrice,
        }),
      });

      if (response.ok) {
        // Clear the cart after placing the order for the entire cart
        setCart({ items: [], totalPrice: 0 });
        console.log('Order placed successfully for the entire cart!');
      } else {
        console.error('Failed to place order for the entire cart');
      }
    } catch (error) {
      console.error('Error placing order for the entire cart:', error);
    }
  };

  return (
    <ProductDataContext.Provider value={{ selectedProductData, setSelectedProductData, userId, setUserId, cart, setCart, addToCart, placeOrderForItem, placeOrderForCart }}>
      {children}
    </ProductDataContext.Provider>
  );
}
