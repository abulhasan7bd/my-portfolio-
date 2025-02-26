import React from "react";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Skil from "./Skil";
import Services from "./Service";
import Project from "./Project";
const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Skil />
      <Services />
      <Project/>
      <Contact />
    </div>
  );
};

export default Home;
