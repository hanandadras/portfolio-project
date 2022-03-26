import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <main>
        <Navbar />,
        <Header />,
        <About />,
        <Contact />
      </main>
    </div>

  )
}

export default App;
