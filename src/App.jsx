import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Cart from './components/Cart';
// import Register from './pages/Register';
// import Login from './pages/Login';
import "./App.css";
import Pizza from './components/Pizza';



function App  () {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
       {/* <Home /> */}
       <Pizza />
       {/* <Cart /> */}
       {/* <Login /> */}
      {/* <Register /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
