import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fun from "./pages/Fun";
import NotFound from "./pages/404";

function App() {
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
        <div className="canvas">
          <div className="canvas-holder">
            <canvas id="canvas" width={32} height={32}></canvas>
            <div className="mask"></div>
          </div>
        </div>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/fun" element={<Fun />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}
export default App;
