import React from "react";
import { Link } from "react-router-dom";


const CardPizza = ({ pizza, onAdd }) => (
  <div className="card text-center m-3 shadow-sm" style={{ width: '22rem' }}>
    <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{width: 80}} />
    <h3>{pizza.name}</h3>
    <p>Precio: ${pizza.price.toLocaleString()}</p>
    <ul>
      {pizza.ingredients.map((ing, idx) => (
        <li key={idx}>{ing}</li>
      ))}
    </ul>

    {/* BOTÓN AÑADIR */}
    <button className="btn btn-dark btn-sm mt-2"
      onClick={() => onAdd(pizza)}
      >
      Añadir 🛒
    </button>
    <Link to={`/pizza/${pizza.id}`}>
      <button style={{ marginLeft: 8 }}> Ver Más 👀</button>
    </Link>
  </div>
);

export default CardPizza;
