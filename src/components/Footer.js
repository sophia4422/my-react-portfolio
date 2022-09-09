import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronUp,
  faFile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import CV from "../assets/cv/cv.pdf";

export const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div>
        <h1 className="footer-title">Created by Sophia with React</h1>
        <p className="footer-para">
          Please get in touch, or view my CV, by clicking the icons below.
        </p>
        <div className="skills-icons-two">
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

          <a href={CV} download target="_blank" alt="Github" title="Github">
            <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
          </a>

          <a
            href="mailto:sophiapwall@yahoo.co.uk?subject=Hi Sophia"
            target="_blank"
            alt="Email"
            title="Email"
          >
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </div>
        <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className="up-btn"
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
