import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

// import { Hero, Projects, Navbar } from "components";

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Projects />
    </React.Fragment>
  );
};

export default App;
