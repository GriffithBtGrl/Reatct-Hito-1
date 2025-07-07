import React from "react";


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
  </div>
);

export default CardPizza;
