import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Foot.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Certificates from "./components/Certificates.jsx";
import Gallery from "./components/Gallery.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import { useSnapScroll } from "./hooks/useSnapScroll.js";

function Home() {
  useSnapScroll(); // full-screen scroll snapping for Projects & Certificates

  return (
    <>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Project details page */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<Gallery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
