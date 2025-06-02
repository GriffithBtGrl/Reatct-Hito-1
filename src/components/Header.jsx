const Header = () => {
  return (
    <header
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '250px',
        backgroundImage: 'url(img/Header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      ></div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
        <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
