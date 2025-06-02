import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import "./App.css";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
