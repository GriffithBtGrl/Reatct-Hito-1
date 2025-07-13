import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();
  // const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5">
      <div className="container-fluid gap-3">
        <span className="navbar-brand me-auto">Pizzería Mamma Mia!</span>

        <div className="d-flex justify-content-between w-100">
        <div className="d-flex gap-2">
          <Link to= "/" className="btn btn-outline-light btn-sm">🏠 Home</Link>
          {!token ? (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
              <Link to= "/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
            </>
          ) : (
            <>
              <Link to= "/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
              <button className="btn btn-outline-light btn-sm"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}>
                🔒 Logout</button>
            </>
          )}
          </div>
          <Link to= "/cart" className="btn btn-outline-warning btn-sm">
            🛒 Total: ${total.toLocaleString('es-CL')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
