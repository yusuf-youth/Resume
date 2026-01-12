import React from "react";
import {
  Home,
  AboutMe,
  Technologies,
  Projects,
  Services,
  FloatingNav,
} from "./script/index";
import useAOS from "./hooks/useAOS";

const App = () => {
  useAOS();

  return (
    <>
      <h1 className="visually-hidden">Resume: Ramil's Personal Website</h1>
      <main className="content">
        <Home />
        <AboutMe />
        <Technologies />
        <Projects />
        <Services />
        <FloatingNav />
      </main>
    </>
  );
};

export default App;
