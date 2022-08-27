import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Footer</h1>

      <a
        href="https://www.linkedin.com/in/sophia-wall/"
        target="_blank"
        alt="Linkedin"
        title="Linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>

      <a
        href="https://github.com/sophia4422"
        target="_blank"
        alt="Github"
        title="Github"
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
        <FontAwesomeIcon icon={faCircleChevronUp}></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Footer;
