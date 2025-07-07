import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

// AGREGAR
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(pizza) {
    setCart((prevCart) => {
        const exist = prevCart.find((item) => item.id === pizza.id);
        if (exist) {
            return prevCart.map((item) =>
                item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
        }
        return [...prevCart, { ...pizza, cantidad: 1 }];
    });
}

    // ELIMINAR
    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    }

    // ACTUALIZAR
    function changeQty(id, amount) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + amount } : item
            )
            
        .filter(item => item.cantidad > 0)
        );
    }

    // CALCULAR TOTAL
    const total = cart.reduce((sum, p) => sum + p.price * p.cantidad, 0);

    return (
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            changeQty,
            total,
        }}
        >
            {children}
        </CartContext.Provider>
    );
}