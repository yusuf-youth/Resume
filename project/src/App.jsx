import React from "react";
import {
  Home,
  AboutMe,
  Technologies,
  Projects,
  Services,
  Nav,
} from "./script/index";
import useAOS from "./hooks/useAOS";
import H1 from "./components/H1";

const App = () => {
  useAOS();

  return (
    <>
      <H1 />
      <main className="content">
        <Home />
        <AboutMe />
        <Technologies />
        <Projects />
        <Services />
        <Nav />
      </main>
    </>
  );
};

export default App;
