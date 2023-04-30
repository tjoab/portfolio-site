import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Fun from "./pages/Fun";
import NotFound from "./pages/404";
import Canvas from "./components/Canvas";
import ScrollToTop from "./components/ScrollToTop";

import "./fonts/gt.woff";
import "./fonts/acorn.woff";
import "./fonts/benz.woff";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <NavBar />
      </header>
      <Canvas />
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
