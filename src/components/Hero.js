import fl from "../assets/images/fl.jpg";
import me from "../assets/images/polaroids.png";
// import Typewriter from "typewriter-effect";
import useState from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="hero-container" id="home">
      <img src={fl} alt="palm trees" className="hero-image" />
      <h1>
        {" "}
        <span className="hello">Hello</span> I'm Sophia{" "}
      </h1>
      <p>Junior Software Engineer</p>
      <div>
        {" "}
        <img src={me} alt="sophia" className="polaroid" />
      </div>

      <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
        <FontAwesomeIcon
          icon={faCircleChevronDown}
          className="down-btn"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Hero;
