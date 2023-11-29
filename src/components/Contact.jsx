import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref: trackRef, inView } = useInView();

  return (
    <section
      id="contact"
      ref={trackRef}
      className={`${inView ? "content-load-animation" : ""}`}
    >
      <h2>Contact</h2>
      <p>Reach me at:</p>
      <span>leedylan7989@gmail.com</span>
      <p>OR</p>
      <p>Message me on social media - I just love to chat about coding!</p>
      <div className="contact-links">
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
      </div>
    </section>
  );
}
