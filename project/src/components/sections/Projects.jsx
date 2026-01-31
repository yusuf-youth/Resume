import React from "react";
import ProjectCard from "../ProjectCard";
import { PROJECTS, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";
import Section from "../Section";

const Projects = () => {
  const { title, description, linkLabel } = useText(TEXTS.PROJECTS);

  return (
    <Section id="projects" title={title} description={description}>
      <div className="projects">
        <ul className="projects__list">
          {PROJECTS.map((item, index) => (
            <li key={index} className="projects__item">
              <ProjectCard className="projects__card" {...item} />
            </li>
          ))}
        </ul>

        <a
          className="projects__link"
          href="https://github.com/yusuf-youth"
          target="_blank"
        >
          {linkLabel}
        </a>
      </div>
    </Section>
  );
};

export default Projects;
