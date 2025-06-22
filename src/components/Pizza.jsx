import React, { useEffect, useState } from 'react';

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/pizzas/p001")
            .then(res => res.json())
            .then(data => {
                setPizza(data);
                setLoading(false);
            })

            .catch(()=> setLoading(false));
    }, []);

    if (loading) return <div>Cargando pizzas...</div>;
    if (!pizza) return <div>No se encontró la pizza.</div>;

  return (
    <div className= "pizza-detalle" style={{maxWidth: 400, margin1: "30px auto", background:"#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 30 }}>
        <img src= {pizza.img} alt={pizza.name} style={{width: "100%", borderRadius: 8, marginBottom: 16}} />
        <h2 style={{textTransform: "capitalize "}}>{pizza.name}</h2>
        <p style={{fontSize: "1.05rem", color: "#333"}}>{pizza.desc}</p>
        <h4>Ingredientes:</h4>
        <ul>
        {pizza.ingredients.map((ing, idx) => (
          <li key={idx}>🍕 {ing}</li>
        ))}
        </ul>
        <button style={{marginTop: 20, padding: "10px 25px", background: "#222", color: "#fff", border: "none", borderRadius: 6, fontSize: "1rem"}}>Añadir 🛒</button>
    </div>
  )
}

export default Pizza
