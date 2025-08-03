import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
// import { pizzaCart } from "../pizzas";

const API_URL = "http://localhost:5000";

const Cart = () => {
  const { cart, changeQty, removeFromCart, total } = useCart();
  const { token } = useUser();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Pagar con backend y JWT
  const handleCheckout = async () => {
    setSuccess("");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (res.ok) {
        setSuccess("Compras realizada con éxito ✅");
      }
    } catch (err) {
      setError("Error al procesar el pago");
    }
  };

  return (
    <div className="cart-outer">
      <div className="cart-card">
        <h2 className="cart-title">Detalles del pedido:</h2>
        <ul className="cart-list">
          {cart.length === 0 && <p>No hay pizzas en el carrito</p>}
          {cart.map((pizza) => (
            <li className="cart-item" key={pizza.id}>
              <img
                className="cart-img"
                src={pizza.img}
                alt={pizza.name}
                style={{ width: 50, marginRight: 10 }}
              />
              <span className="cart-name">{pizza.name}</span>
              <span className="cart-price">
                ${pizza.price.toLocaleString("es-CL")}
              </span>
              <div className="cart-buttons">
                {/* Botón para disminuir cantidad */}
                <button
                  onClick={() => changeQty(pizza.id, -1)}
                  style={{ margin: "0 5px", color: "red" }}
                  disabled={pizza.cantidad === 1}
                >
                  -
                </button>
                <span>{pizza.cantidad}</span>
                {/* Botón para aumentar cantidad */}
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
        {/* Botón para pagar: llama a handleCheckout */}
        <button
          disabled={!token || cart.length === 0}
          className="btn btn-success"
          onClick={handleCheckout} // <-- Aquí conectas el pago real
        >
          Pagar
        </button>
        {/* Mensajes de éxito/error */}
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Cart;
