import vh from "../assets/images/vh.png";
import wo from "../assets/images/wo.png";
import rpg from "../assets/images/rpg.png";
import wj from "../assets/images/wj.png";
import mp from "../assets/images/mp.png";
import nt from "../assets/images/nt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h1 className="projects-title">My Web-Development Projects</h1>

      <div className="big-projects">
        <div className="project">
          <div>
            <a href="https://what-is-on.herokuapp.com/" target="_blank">
              <img src={wo} alt="What's on" className="project-picture" />
            </a>
          </div>
          <div className="text-container">
            <h2 className="proj-title">What's On</h2>
            <p className="proj-para">Find Events Near You!</p>
            <a
              href="https://github.com/talexandru1987/event-finder"
              target="_blank"
              alt="Github"
              title="Github"
              className="github-logo"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="project">
          <div>
            <a href="https://c-sim.github.io/virtual-holiday/" target="_blank">
              <img src={vh} alt="virtual holiday" className="project-picture" />
            </a>
          </div>
          <div className="text-container">
            <h2 className="proj-title">Virtual Holiday</h2>
            <p className="proj-para">Travel Abroad From Home!</p>
            <a
              href="https://github.com/C-Sim/virtual-holiday"
              target="_blank"
              alt="Github"
              title="Github"
              className="github-logo"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>

      <div className="small-projects">
        <div className="project">
          <div>
            <a
              href="https://sophia4422.github.io/random-password-generator/"
              target="_blank"
            >
              <img
                src={rpg}
                alt="Random Password Generator"
                className="project-picture-two"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div>
            <a
              href="https://sophia4422.github.io/weather-journal-new/"
              target="_blank"
            >
              <img
                src={wj}
                alt="Weather Journal"
                className="project-picture-two"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div>
            <a
              href="https://sophia4422.github.io/my-portfolio/"
              target="_blank"
            >
              {" "}
              <img
                src={mp}
                alt="My HTML/CSS Portfolio"
                className="project-picture-two"
              />
            </a>
          </div>
        </div>
        <div className="project">
          <div>
            <a
              href="https://limitless-mountain-74074.herokuapp.com/"
              target="_blank"
            >
              <img src={nt} alt="Note Taker" className="project-picture-two" />
            </a>
          </div>
        </div>
      </div>
    </section>
    // <section className="projects-container">
    //   <h1 className="projects-title">My Web-Development Projects</h1>

    //   <div className="big-projects">
    //     <div className="project-picture">
    //       <div className="text-container">
    //         <h2 className="proj-title">What's On</h2>
    //         <p className="proj-para">Find Events Near You!</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;
