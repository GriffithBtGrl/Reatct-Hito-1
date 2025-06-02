const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5">
      <div className="container-fluid gap-3">
        <span className="navbar-brand me-auto">Pizzería Mamma Mia!</span>

        <div className="d-flex justify-content-between w-100">
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm">🏠 Home</button>
          {!token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          )}
          </div>
          <button className="btn btn-outline-warning btn-sm">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
