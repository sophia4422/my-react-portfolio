import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../images";

export const Projects = () => {
  return (
    <section className="projects-container">
      <h1 className="projects-title">My Web-Development Projects</h1>

      <div className="big-projects">
        <div className="project-picture">
          <div className="text-container">
            <h2 className="proj-title">What's On</h2>
            <p className="proj-para">Find Events Near You!</p>
          </div>
        </div>
        <div className="project-picture">
          <div className="text-container">
            <h2 className="proj-title">Virtual Holiday</h2>
            <p className="proj-para">Travel Abroad From Home!</p>
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
