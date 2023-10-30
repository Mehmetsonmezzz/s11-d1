import React, { useState } from "react";
import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useLocalStorage("s11G1Cart", []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  function removeItem(itemIndex) {
    console.log("rem", itemIndex);
    //
    // çözüm 1
    const newCart = cart.filter((item, idx) => {
      return idx !== itemIndex;
    });

    // çözüm 2
    // const newCart = [...cart].splice(itemIndex, 1);

    // çözüm 3
    // const newCart = cart.toSpliced(itemIndex, 1);

    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
