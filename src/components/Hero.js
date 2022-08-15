import fl from "../assets/images/fl.jpg";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src={fl} alt="palm trees" className="hero-image" />
      <h1> Testing Text </h1>
      <p> Testing Paragraph </p>
    </div>
  );
};

export default Hero;
