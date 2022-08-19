import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

// import { Hero, Projects, Navbar } from "components";

export const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Navbar />
    </React.Fragment>
  );
};

export default App;
