import React from "react";


const CardPizza = ({ pizza }) => (
  <div className="card">
    <img src={pizza.img} alt={pizza.name} style={{width: 80}} />
    <h3>{pizza.name}</h3>
    <p>Precio: ${pizza.price.toLocaleString()}</p>
    <ul>
      {pizza.ingredients.map((ing, idx) => (
        <li key={idx}>{ing}</li>
      ))}
    </ul>
  </div>
);


// const CardPizza = ({ name, price, ingredients, img }) => {
//   return (
//     <div className="card text-center m-3 shadow-sm" style={{ width: '22rem' }}>
//       <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
//       <div className="card-body">
//         <h5 className="card-title">Pizza {name}</h5>
//         <hr ></hr>
//         <p className="text-muted">Ingredientes:</p>
//         <ul className="list-unstyled text-muted" style={{ fontSize: '0.9rem' }}>
//           {ingredients.map((item, i) => (
//             <li key={i}>🍕 {item}</li>
//           ))}
//         </ul>

//         <hr />
//         <p className="fw-bold">Precio: ${price.toLocaleString('es-CL')}</p>
//         <div className="d-flex justify-content-between gap-2">
//           <button className="btn btn-outline-primary btn-sm">Ver Más 👀</button>
//           <button className="btn btn-dark btn-sm">Añadir 🛒</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CardPizza;
