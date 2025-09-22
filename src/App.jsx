import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Workspace from "./components/Workspace";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Workspace />
      <Footer />
    </div>
  );
}
