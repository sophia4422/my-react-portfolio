import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">My Projects</a>
        <a href="/#">About Me</a>
        <a href="/#">Contact Me</a>
        <a href="/#">Resume</a>

        <button>
          <FaTimes />
        </button>
      </nav>
      <button>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
