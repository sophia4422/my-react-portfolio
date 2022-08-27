import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          PROJECTS
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          ABOUT
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          CONTACT
        </Link>
        <a href="/#">CV</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
