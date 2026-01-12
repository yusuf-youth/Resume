import React from "react";
import ProjectCard from "../ProjectCard";
import { PROJECTS, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";
import Section from "../Section";

const Projects = () => {
  const text = useText(TEXTS.PROJECTS);

  return (
    <Section id="projects" title={text.title} description={text.description}>
      <div className="projects">
        <ul className="projects__list">
          {text.data.map((item, index) => (
            <li key={index} className="projects__item">
              <ProjectCard
                {...item}
                videoSrc={PROJECTS[index].videoSrc}
                poster={PROJECTS[index].poster}
                delay={PROJECTS[index].delay}
              />
            </li>
          ))}
        </ul>

        <a
          className="projects__link"
          href="https://github.com/yusuf-youth"
          target="_blank"
        >
          {text.linkLabel}
        </a>
      </div>
    </Section>
  );
};

export default Projects;
