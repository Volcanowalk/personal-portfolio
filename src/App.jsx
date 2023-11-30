import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <div className="hero-text1">
          <h1>Hello! My name is Heon Sang Lee, </h1>
        </div>
        <div className="hero-text2">
          <h1>Front-end Developer!</h1>
        </div>
        <a href="#about">ABOUT ME</a>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
