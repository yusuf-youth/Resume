import React from "react";
import ProjectCard from "../blocks/ProjectCard";
import { PROJECTS, TEXTS } from "../../script/constants";
import useText from "../../hooks/useText";

const Projects = () => {
  const text = useText(TEXTS.PROJECTS);

  return (
    <section id="projects" className="section">
      <header className="section__header">
        <h2 className="section__title">{text.title}</h2>
        <p className="section__description">{text.description}</p>
      </header>
      <div className="section__body">
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
      </div>
    </section>
  );
}

export default Projects;
