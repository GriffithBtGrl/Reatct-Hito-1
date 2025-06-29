import React, { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const aumentar = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const disminuir = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter(item => item.cantidad > 0)
    );
  };

  const total = cart.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
            <img src={pizza.imagen} alt={pizza.nombre} style={{width: 50, marginRight: 10}} />
            <span style={{ width: 100 }}>{pizza.nombre}</span>
            <span style={{ width: 80 }}>${pizza.precio.toLocaleString()}</span>
            <button onClick={() => disminuir(pizza.id)} style={{ margin: "0 5px", color: "red" }}>-</button>
            <span>{pizza.cantidad}</span>
            <button onClick={() => aumentar(pizza.id)} style={{ margin: "0 5px", color: "blue" }}>+</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;