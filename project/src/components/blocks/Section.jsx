import React from "react";

const Section = (props) => {
  const { id } = props;
  const { title } = props;
  const { description } = props;
  const { children } = props;
  const { hasNoPadding } = props;
  const modifier = hasNoPadding ? "section--no-padding" : "";
  let header;

  if (title && description) {
    header = (
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
        <p className="section__description">{description}</p>
      </header>
    );
  }

  return (
    <section className={`section ${modifier}`} id={id}>
      {header}
      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;
