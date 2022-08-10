import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Projects />
    </React.Fragment>
  );
};

export default App;
