import fl from "../assets/images/fl.jpg";
import me from "../assets/images/polaroids.png";
// import Typewriter from "typewriter-effect";
import useState from "react";
import { useEffect } from "react";

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <img src={fl} alt="palm trees" className="hero-image" />
      <h1>
        {" "}
        <span className="hello">Hello</span> I'm Sophia{" "}
      </h1>
      <p>Junior Software Engineer</p>
      <div>
        {" "}
        <img
          src={me}
          alt="sophia"
          className="polaroid"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
      </div>
    </div>
  );
};

export default Hero;
