const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card text-center m-3 shadow-sm" style={{ width: '22rem' }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <p className="text-muted">Ingredientes:</p>
        <ul className="list-unstyled text-muted" style={{ fontSize: '0.9rem' }}>
          {ingredients.map((item, i) => (
            <li key={i}>🍕 {item}</li>
          ))}
        </ul>
        <p className="fw-bold">Precio: ${price.toLocaleString('es-CL')}</p>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-outline-primary btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
