 import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Skil from "./pages/Skil";
import Services from "./pages/Service";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/skils" element={<Skil />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
