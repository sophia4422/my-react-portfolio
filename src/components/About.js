export const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-image">
          <h2>image here</h2>
        </div>
        <div className="about-me-text">
          <h1 className="about-me-title">About me!</h1>
          <p className="about-para">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button type="button" className="about-btn">
            Contact me
          </button>
        </div>
      </div>
      <div className="skills-icons">
        <h2>Add skills logos here</h2>
      </div>
    </div>
  );
};

export default About;
