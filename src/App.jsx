import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { useUser } from "./context/UserContext";
import { Navigate } from "react-router-dom";
import "./App.css";

function ProtectedRoute({ children }) {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
}

function RedirectIfAuth({ children }) {
  const { token } = useUser();
  return !token ? children : <Navigate to="/" />;
}

function App() {
  return (
    <UserProvider>
    <CartProvider>
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<RedirectIfAuth> <Login /> </RedirectIfAuth> } />
            <Route path="/register" element={<RedirectIfAuth> <Register /> </RedirectIfAuth>} />
            <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
    </UserProvider>
  );
}

export default App;

// http://localhost:5000/api/pizzas
// http://localhost:5000/api/pizzas/p001
