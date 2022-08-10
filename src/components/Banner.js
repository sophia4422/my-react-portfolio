import rainbow from "../images/rainbow-beach.jpeg";

const Banner = () => {
  return (
    <section className="home-banner">
      <h1>Hello!</h1>
      <div className="pink-box">
        {" "}
        <h2>I'm Sophia</h2>
      </div>

      <div>
        <img src={rainbow} alt="rainbow beach" className="banner-img" />
      </div>
    </section>
  );
};

export default Banner;
