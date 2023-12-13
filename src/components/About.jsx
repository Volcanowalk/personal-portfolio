import "../styles/About.css";
import ProfileImage from "../assets/profile-image.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaFile,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaUniversalAccess,
  FaMobileAlt,
  FaJava,
  FaGitAlt,
  FaCog,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: aboutRef, inView: inAboutView } = useInView();
  const { ref: skillsRef, inView: inSkillsView } = useInView();

  const skillList = [
    { icon: FaHtml5, text: "HTML" },
    { icon: FaCss3Alt, text: "CSS" },
    { icon: IoLogoJavascript, text: "JavaScript" },
    { icon: FaReact, text: "React" },
    { icon: FaMobileAlt, text: "Responsive Design" },
    { icon: FaUniversalAccess, text: "Accessibility" },
    { icon: FaGitAlt, text: "Git" },
    { icon: FaCog, text: "RESTful API" },
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <div
        className={`container-about ${
          inAboutView ? "content-load-animation" : ""
        }`}
        ref={aboutRef}
      >
        <img src={ProfileImage} alt="profile image" />
        <div className="about-me">
          <p>
            I am a Front-end developer and IT Analyst who graduated from
            Software Development and Network Engineering program at Sheridan
            College.
          </p>
          <p>
            During my school years, I learned many programming languages and
            programming principles. The experience and knowledge from the school
            years gave me a fast-learning ability for coding related topics.
          </p>
          <p>
            While working as a full-time IT Support Analyst, I decided to learn
            Web development. I learned React through 'The Odin Project' and few
            popular Udemy courses. It wasn't easy to do both full-time job and
            study, but I was able to motivate myself. Currently, I'm having fun
            making web apps and websites.
          </p>
          <div className="about-links">
            <a
              href="https://github.com/Volcanowalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize="4rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-lee-81046913b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin fontSize="4rem" />
            </a>
            <a href="#">
              <FaFile fontSize="4rem" />
            </a>
          </div>
        </div>
      </div>
      <h2>Skills</h2>
      <div
        className={`container-skills ${
          inSkillsView ? "content-load-animation" : ""
        }`}
        ref={skillsRef}
      >
        {skillList.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="container-skill">
              <Icon className="skill-image" aria-hidden="true" />
              {skill.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}
