import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/images/sophia-logo.png";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img src={logo} alt="Sophia Wave Logo" className="logo" />
      <nav ref={navRef} className="navigation">
        <Link
          to="projects"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          className="nav-link"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          className="nav-link"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          CONTACT
        </Link>
        <Link
          className="nav-link"
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          CV
        </Link>

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
