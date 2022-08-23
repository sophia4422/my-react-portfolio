import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../images";

export const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="projects-container">
      <h1 className="projects-title">My Web-Development Projects</h1>
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
    //     <div className="project-picture">
    //       <div className="text-container">
    //         <h2 className="proj-title">Virtual Holiday</h2>
    //         <p className="proj-para">Travel Abroad From Home!</p>
    //       </div>
    //     </div>
    //   </div>

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
