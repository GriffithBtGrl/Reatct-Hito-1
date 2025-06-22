import React, {useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
// import{ pizzas } from '../pizzas';



const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching pizzas:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando pizzas...</div>;
  

  return (
    <>
      <Header />
      <div className="container py-5 bg-light">
        <div className="row justify-content-center" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {pizzas.map((pizza) => (
             <CardPizza
              key={pizza.id} pizza={pizza}
            />
          ))}

        {/* === HITO 2 (Estado, componentes y eventos. ¿Ya no lo necesitaremos?) === */}
          {/* <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={['queso Mozzarella', 'tomates', 'jamón', 'orégano']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={['queso Mozzarella', 'gorgonzola', 'parmesano', 'queso Provolone']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={['queso Mozzarella', 'pepperoni', 'orégano']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
          /> */}

        </div>
      </div>
    </>
  );
};

export default Home;
