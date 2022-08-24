import vh from "../assets/images/vh.png";
import wo from "../assets/images/wo.png";
import rpg from "../assets/images/rpg.png";
import wj from "../assets/images/wj.png";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h1 className="projects-title">My Web-Development Projects</h1>

      <div className="big-projects">
        <div className="project">
          <div>
            <img src={wo} alt="what's on" className="project-picture" />
          </div>
          <div className="text-container">
            <h2 className="proj-title">What's On</h2>
            <p className="proj-para">Find Events Near You!</p>
          </div>
        </div>
        <div className="project">
          <div>
            <img src={vh} alt="virtual holiday" className="project-picture" />
          </div>
          <div className="text-container">
            <h2 className="proj-title">Virtual Holiday</h2>
            <p className="proj-para">Travel Abroad From Home!</p>
          </div>
        </div>
      </div>

      <div className="big-projects">
        <div className="project">
          <div>
            <img
              src={rpg}
              alt="Random Password Generator"
              className="project-picture-two"
            />
          </div>
        </div>
        <div className="project">
          <div>
            <img
              src={wj}
              alt="Weather Journal"
              className="project-picture-two"
            />
          </div>
        </div>
        <div className="project">
          <div>
            <img
              src={vh}
              alt="virtual holiday"
              className="project-picture-two"
            />
          </div>
        </div>
        <div className="project">
          <div>
            <img
              src={vh}
              alt="virtual holiday"
              className="project-picture-two"
            />
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
