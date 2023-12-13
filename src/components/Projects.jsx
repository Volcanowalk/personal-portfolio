import "../styles/Projects.css";
import CVAppImage from "../assets/cvapp.png";
import WeatherAppImage from "../assets/weatherapp.png";
import TodoAppImage from "../assets/todoapp.png";
import CalculatorImage from "../assets/calculator.png";
import SketchAppImage from "../assets/etchasketch.png";
import RAWGApp from "../assets/volcanowalkRAWG.png";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref: project1Ref, inView: inProject1View } = useInView();
  const { ref: project2Ref, inView: inProject2View } = useInView();
  const { ref: project3Ref, inView: inProject3View } = useInView();
  const { ref: project4Ref, inView: inProject4View } = useInView();
  const { ref: project5Ref, inView: inProject5View } = useInView();
  const { ref: project6Ref, inView: inProject6View } = useInView();

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div
        className={`project ${inProject6View ? "content-load-animation" : ""}`}
        ref={project6Ref}
      >
        <img src={RAWGApp} alt="Weather App Image" className="image-mobile" />
        <div className="project-explanation">
          <h3>Volcanowalk RAWG</h3>
          <p>
            A website for searching through vast list of games provided by RAWG
            API and adding games to wish lists. Created with HTML, JavaScript,
            React, and Tailwind CSS. Developed with responsive design and
            accessibility in mind.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/personal-RAWG"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://volcanowalk-rawg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <img src={RAWGApp} alt="Weather App Image" className="image-desktop" />
      </div>
      <div
        className={`project ${inProject1View ? "content-load-animation" : ""}`}
        ref={project1Ref}
      >
        <img src={CVAppImage} />
        <div className="project-explanation">
          <h3>CV Application</h3>
          <p>
            Users can enter their general, education, and experience
            information. Once entered, the app will generate a formatted CV!
            Made with HTML, CSS, JS, and React.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/odin-CVApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://odin-cv-app-volcanowalk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
      <div
        className={`project ${inProject2View ? "content-load-animation" : ""}`}
        ref={project2Ref}
      >
        <img
          src={WeatherAppImage}
          alt="Weather App Image"
          className="image-mobile"
        />
        <div className="project-explanation">
          <h3>Weather App</h3>
          <p>
            Users can search for any city to find today's weather. Fetching data
            from Weather API. Made with HTML, CSS, and JavaScript.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/odin-weatherapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://volcanowalk.github.io/odin-weatherapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <img
          src={WeatherAppImage}
          alt="Weather App Image"
          className="image-desktop"
        />
      </div>
      <div
        className={`project ${inProject3View ? "content-load-animation" : ""}`}
        ref={project3Ref}
      >
        <img src={TodoAppImage} />
        <div className="project-explanation">
          <h3>Simple To-Do List</h3>
          <p>
            Users can add projects and tasks. Tasks can be crossed out after
            completion. Projects can be deleted. Made with HTML, CSS, and
            Javascript.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/odin-todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://volcanowalk.github.io/odin-todo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
      <div
        className={`project ${inProject4View ? "content-load-animation" : ""}`}
        ref={project4Ref}
      >
        <img
          src={CalculatorImage}
          alt="Weather App Image"
          className="image-mobile"
        />
        <div className="project-explanation">
          <h3>Calculator</h3>
          <p>
            Simple app for mathematical calculation. Made with HTML, CSS, and
            JavaScript.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/odin-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://volcanowalk.github.io/odin-calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
        <img
          src={CalculatorImage}
          alt="Weather App Image"
          className="image-desktop"
        />
      </div>
      <div
        className={`project ${inProject5View ? "content-load-animation" : ""}`}
        ref={project5Ref}
      >
        <img src={SketchAppImage} />
        <div className="project-explanation">
          <h3>Etch-A-Sketch App</h3>
          <p>
            Users can draw on a resizeable grid. Color mode can be toggled. Made
            with HTML, CSS, and JavaScript.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Volcanowalk/etch-a-sketch"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE
            </a>
            <a
              href="https://volcanowalk.github.io/etch-a-sketch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
