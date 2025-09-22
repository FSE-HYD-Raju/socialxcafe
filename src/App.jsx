import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cafe from "./components/Cafe";
import About from "./components/About";
import Workspace from "./components/Workspace";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Events from "./components/Events";


export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Home />
      <Cafe />
      <About />
      <Workspace />
      <Events />
      <Footer />
    </div>
  );
}

