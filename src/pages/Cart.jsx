import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
// import { pizzaCart } from "../pizzas";

const Cart = () => {
  const { cart, changeQty, removeFromCart, total } = useCart();
  const { token } = useUser();

  //   const aumentar = (id) => {
  //   setCart(cart.map(item =>
  //     item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
  //   ));
  // };

  // const disminuir = (id) => {
  //   setCart(cart
  //     .map(item =>
  //       item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
  //     )
  //     .filter(item => item.cantidad > 0)
  //   );
  // };

  // const total = cart.reduce((sum, p) => sum + p.precio * p.cantidad, 0);

  return (
    <div className="cart-outer">
      <div className="cart-card">
        <h2 className="cart-title">Detalles del pedido:</h2>
        <ul className="cart-list">
          {cart.length === 0 && <p>No hay pizzas en el carrito</p>}
          {cart.map((pizza) => (
            <li className="cart-item"
              key={pizza.id}
            >
              <img className="cart-img"
                src={pizza.img}
                alt={pizza.name}
                style={{ width: 50, marginRight: 10 }}
              />
              <span className="cart-name">{pizza.name}</span>
              <span className="cart-price">
                ${pizza.price.toLocaleString("es-CL")}
              </span>
              <div className="cart-buttons">
              <button
                onClick={() => disminuir(pizza.id)}
                style={{ margin: "0 5px", color: "red" }}
              >
                -
              </button>
              <span>{pizza.cantidad}</span>
              <button
                onClick={() => changeQty(pizza.id, -1)}
                style={{ margin: "0 5px", color: "blue" }}
                disabled={pizza.cantidad === 1}
              ></button>
              <span>{pizza.cantidad}</span>
              <button
                onClick={() => changeQty(pizza.id, 1)}
                style={{ margin: "0 5px", color: "green" }}
              >
                +
              </button>
              </div>
              <button
                onClick={() => removeFromCart(pizza.id)}
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toLocaleString("es-CL")}</h3>
        <button disabled={!token || cart.length === 0}
        className="btn btn-success"
        >Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
