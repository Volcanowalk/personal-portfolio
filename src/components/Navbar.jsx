import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <span>
        <b>Heon Sang Lee</b>
      </span>
      <nav ref={navRef}>
        <a href="#hero" onClick={showNavbar}>
          Home
        </a>
        <a href="#about" onClick={showNavbar}>
          About
        </a>
        <a href="#projects" onClick={showNavbar}>
          Projects
        </a>
        <a href="#contact" onClick={showNavbar}>
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
}
