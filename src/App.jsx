import Navbar from './components/Navbar';
import Footer from './components/Footer';
/*import Home from './pages/Home';*/
import Register from './pages/Register';
import Login from './pages/Login';
import "./App.css";



function App  () {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/*<Home />*/}
      <Login />
      <Register />
      </main>

      <Footer />
    </div>
  );
}

export default App;
