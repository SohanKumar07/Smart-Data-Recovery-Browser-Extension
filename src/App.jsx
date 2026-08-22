import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Features from "./components/Features/Features.jsx";
// import About from "./components/About/About.jsx";
// import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;