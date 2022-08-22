import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faLinkedin,
  faFigma,
  faNpm,
  faSketch,
  faSlack,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-image">
          <h2>image here</h2>
        </div>
        <div className="about-me-text">
          <h1 className="about-me-title">About me!</h1>
          <p className="about-para">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button type="button" className="about-btn">
            Contact me
          </button>
        </div>
      </div>
      <div className="skills-icons">
        <h2>Add skills logos here</h2>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faNpm}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSketch}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSlack}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default About;
