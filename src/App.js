import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Redirect } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Canvas from "./components/Canvas";
import ScrollToTop from "./components/ScrollToTop";
import WorkFiller from "./pages/WorkFiller";
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
            <Route path="/" element={<Work />} />
            <Route path="/work" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/work/wordle" element={<WorkFiller />} />
            <Route path="/work/deepLearning" element={<WorkFiller />} />
            <Route path="/work/lambertW" element={<WorkFiller />} />
            <Route path="/work/2for1" element={<WorkFiller />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
