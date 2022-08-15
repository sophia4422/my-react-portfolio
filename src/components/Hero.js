import fl from "../assets/images/fl.jpg";
import me from "../assets/images/polaroids.png";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src={fl} alt="palm trees" className="hero-image" />
      <h1>
        {" "}
        <span className="hello">Hello</span> I'm Sophia{" "}
      </h1>
      <p> Junior Software Engineer </p>

      <div>
        {" "}
        <img src={me} alt="sophia" className="polaroid" />
      </div>
    </div>
  );
};

export default Hero;
