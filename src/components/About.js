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
          icon={faCoffee}
          alt="I make good cups of tea"
          title="I make good cups of tea"
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
        <a
          href="https://open.spotify.com/user/nnujjzugl8ooqquryq0sfnx1t?si=a06cd6a72d8a4e37"
          target="_blank"
          alt="Spotify"
          title="Spotify"
        >
          <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
        </a>

        <a
          href="https://www.linkedin.com/in/sophia-wall/"
          target="_blank"
          alt="Linkedin"
          title="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default About;
