import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useRef, useEffect, useState } from "react";
import images from "../images";
import me from "../assets/images/polaroids.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faFigma,
  faNpm,
  faSketch,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <div className="about-container" id="about">
        <div className="about-image">
          <img src={me} alt="sophia" className="polaroid" />
        </div>
        <div className="about-me-text">
          <h1 className="about-me-title">About me!</h1>
          <p className="about-para">
            I am a full-stack software engineer with knowledge of a variety of
            technologies: MERN Stack, GraphQL and MySQL, through to HTML, CSS
            and JavaScript. I am passionate about front-end development,
            following UX/UI best practices and graphic design. I like to combine
            the art of design with the art of programming.
          </p>
          <p className="about-para">
            In my personal life, I love travelling to new places, listening to
            R&B, cuddling my pet cat, Cookie, painting and cooking (I make the
            best lasagne)!
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button type="button" className="about-btn">
              Contact me
            </button>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button type="button" className="about-btn">
              My Projects
            </button>
          </Link>
        </div>
      </div>

      <div>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="skills-icons">
        <FontAwesomeIcon
          icon={faJs}
          alt="JavaScript"
          title="JavaScript"
        ></FontAwesomeIcon>
        <a
          href="https://github.com/sophia4422"
          target="_blank"
          alt="Github"
          title="Github"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <FontAwesomeIcon
          icon={faHtml5}
          alt="HTML5"
          title="HTML5"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faCss3Alt}
          alt="CSS3"
          title="CSS3"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faReact}
          alt="React"
          title="React"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faNode}
          alt="Node.Js"
          title="Node.Js"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faFigma}
          alt="Figma"
          title="Figma"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faNpm} alt="NPM" title="NPM"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faSketch}
          alt="Sketch"
          title="Sketch"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faSlack}
          alt="Slack"
          title="Slack"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default About;
