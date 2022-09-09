import vh from "../assets/images/virtual2.png";
import wo from "../assets/images/whatson2.png";
import rpg from "../assets/images/rpg.png";
import wj from "../assets/images/wj.png";
import mp from "../assets/images/mp.png";
import nt from "../assets/images/nt.png";
import wds from "../assets/images/wds.png";
import tp from "../assets/images/tp.png";
import ec from "../assets/images/e-com.png";
import sn from "../assets/images/social-network.png";
import jate from "../assets/images/jate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// export const Projects = () => {
//   return (
//     <section className="projects-container" id="projects">
//       <Container fluid>
//         <h1 className="projects-title">My Web-Development Projects</h1>
//         <h3 className="small-title">
//           Click the pictures to view the deployed pages
//         </h3>

//         <div className="big-projects">
//           <Card className="project">
//             <div>
//               <a href="https://what-is-on.herokuapp.com/" target="_blank">
//                 <img src={wo} alt="What's on" className="project-picture" />
//               </a>
//             </div>
//             <div className="text-container">
//               <h2 className="proj-title">What's On</h2>
//               <p className="proj-para">Find Events Near You!</p>
//               <a
//                 href="https://github.com/talexandru1987/event-finder"
//                 target="_blank"
//                 alt="Github"
//                 title="Github"
//                 className="github-logo"
//               >
//                 <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://c-sim.github.io/virtual-holiday/"
//                 target="_blank"
//               >
//                 <img
//                   src={vh}
//                   alt="virtual holiday"
//                   className="project-picture"
//                 />
//               </a>
//             </div>
//             <div className="text-container">
//               <h2 className="proj-title">Virtual Holiday</h2>
//               <p className="proj-para">Travel Abroad From Home!</p>
//               <a
//                 href="https://github.com/C-Sim/virtual-holiday"
//                 target="_blank"
//                 alt="Github"
//                 title="Github"
//                 className="github-logo"
//               >
//                 <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
//               </a>
//             </div>
//           </Card>
//         </div>

//         <div className="small-projects">
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/random-password-generator/"
//                 target="_blank"
//               >
//                 <img
//                   src={rpg}
//                   alt="Random Password Generator"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/weather-journal-new/"
//                 target="_blank"
//               >
//                 <img
//                   src={wj}
//                   alt="Weather Journal"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/my-portfolio/"
//                 target="_blank"
//               >
//                 {" "}
//                 <img
//                   src={mp}
//                   alt="My HTML/CSS Portfolio"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://limitless-mountain-74074.herokuapp.com/"
//                 target="_blank"
//               >
//                 <img
//                   src={nt}
//                   alt="Note Taker"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//         </div>

//         <div className="small-projects">
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/random-password-generator/"
//                 target="_blank"
//               >
//                 <img
//                   src={rpg}
//                   alt="Random Password Generator"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/weather-journal-new/"
//                 target="_blank"
//               >
//                 <img
//                   src={wj}
//                   alt="Weather Journal"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://sophia4422.github.io/my-portfolio/"
//                 target="_blank"
//               >
//                 {" "}
//                 <img
//                   src={mp}
//                   alt="My HTML/CSS Portfolio"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//           <Card className="project">
//             <div>
//               <a
//                 href="https://limitless-mountain-74074.herokuapp.com/"
//                 target="_blank"
//               >
//                 <img
//                   src={nt}
//                   alt="Note Taker"
//                   className="project-picture-two"
//                 />
//               </a>
//             </div>
//           </Card>
//         </div>
//       </Container>
//     </section>
//     // <section className="projects-container">
//     //   <h1 className="projects-title">My Web-Development Projects</h1>

//     //   <div className="big-projects">
//     //     <div className="project-picture">
//     //       <div className="text-container">
//     //         <h2 className="proj-title">What's On</h2>
//     //         <p className="proj-para">Find Events Near You!</p>
//     //       </div>
//     //     </div>
//     //   </div>

//     // </section>
//   );
// };

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <Card className="card">
        <Card.Img className="card-image" variant="top" src={wo} />
        <Card.Body>
          <Card.Title>What's On</Card.Title>
          <Card.Text>Find events near you!</Card.Text>
          <Button
            href="https://what-is-on.herokuapp.com/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/talexandru1987/event-finder"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={vh} />
        <Card.Body>
          <Card.Title>Virtual Holiday</Card.Title>
          <Card.Text>Travel abroad from home!</Card.Text>
          <Button
            href="https://c-sim.github.io/virtual-holiday/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/C-Sim/virtual-holiday"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={rpg} />
        <Card.Body>
          <Card.Title>FOUNDSOUND</Card.Title>
          <Card.Text>Discover upcoming concerts!</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            Coming Soon
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={rpg} />
        <Card.Body>
          <Card.Title>Password Generator</Card.Title>
          <Card.Text>HTML, CSS & JavaScript</Card.Text>
          <Button
            href="https://sophia4422.github.io/random-password-generator/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/random-password-generator/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={nt} />
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <Card.Text>CSS, Node, Express</Card.Text>
          <Button
            href="https://limitless-mountain-74074.herokuapp.com/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/note-taker/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={mp} />
        <Card.Body>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text>HTML & CSS</Card.Text>

          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/my-portfolio/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={wj} />
        <Card.Body>
          <Card.Title>Weather Journal</Card.Title>
          <Card.Text>JS, Local Storage, Web API</Card.Text>
          <Button
            href="https://sophia4422.github.io/weather-journal-new/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/weather-journal-new/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={wds} />
        <Card.Body>
          <Card.Title>Work Day Scheduler</Card.Title>
          <Card.Text>JS, Local Storage, JQuery</Card.Text>
          <Button
            href="https://sophia4422.github.io/day-planner/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/day-planner/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={jate} />
        <Card.Body>
          <Card.Title>Text Editor</Card.Title>
          <Card.Text>Express, IndexedDB, Heroku</Card.Text>
          <Button
            href="https://hidden-harbor-84860.herokuapp.com/"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/pwa-text-editor/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={sn} />
        <Card.Body>
          <Card.Title>Social Network API</Card.Title>
          <Card.Text>MongoDB, Express, Mongoose</Card.Text>
          <Button
            href="https://drive.google.com/file/d/1xeMgsa-gPm23HR22UXrYQnsH6WxJMN_u/view?usp=sharing"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/social-network-api/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={ec} />
        <Card.Body>
          <Card.Title>E-Commerce Backend</Card.Title>
          <Card.Text>MySQL2, Express, Sequelize</Card.Text>
          <Button
            href="https://drive.google.com/file/d/1pNtx_eRe_5ELZL0hABYM4db7xPEd9JEB/view?usp=sharing"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/e-commerce-back-end/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={tp} />
        <Card.Body>
          <Card.Title>Profile Generator</Card.Title>
          <Card.Text>Node, Inquirer, CSS</Card.Text>
          <Button
            href="https://drive.google.com/file/d/14HviYRxr6RezUx2NyEt6hIjn4-H6jv4s/view?usp=sharing"
            target="_blank"
            variant="dark"
            className="m-2"
          >
            View Page
          </Button>
          <Button
            variant="dark"
            href="https://github.com/sophia4422/team-profile-generator/tree/dev"
            target="_blank"
            alt="Github"
            title="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
