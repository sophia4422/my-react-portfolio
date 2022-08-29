import vh from "../assets/images/virtual2.png";
import wo from "../assets/images/whatson2.png";
import rpg from "../assets/images/rpg.png";
import wj from "../assets/images/wj.png";
import mp from "../assets/images/mp.png";
import nt from "../assets/images/nt.png";
import wds from "../assets/images/wds.png";
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
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={vh} />
        <Card.Body>
          <Card.Title>Virtual Holiday</Card.Title>
          <Card.Text>Travel from the comfort of your home!</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
          <Button variant="dark">GH</Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={rpg} />
        <Card.Body>
          <Card.Title>FOUNDSOUND</Card.Title>
          <Card.Text>Discover upcoming artists and gigs!</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            Coming Soon
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={rpg} />
        <Card.Body>
          <Card.Title>Random Password Generator</Card.Title>
          <Card.Text>HTML, CSS & JavaScript</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={nt} />
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <Card.Text>HTML, CSS, JavaScript, local storage</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={mp} />
        <Card.Body>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text>HTML, CSS</Card.Text>

          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={wj} />
        <Card.Body>
          <Card.Title>Weather Journal</Card.Title>
          <Card.Text>HTML, CSS, JS, Local Storage</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img className="card-image" variant="top" src={wds} />
        <Card.Body>
          <Card.Title>Work Day Schedule</Card.Title>
          <Card.Text>HTML, CSS, JS, Local Storage</Card.Text>
          <Button
            href="https://sophia4422.github.io/my-portfolio/"
            target="_blank"
            variant="dark"
          >
            View Page
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
