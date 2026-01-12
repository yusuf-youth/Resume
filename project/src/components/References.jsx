import React from "react";
import Button from "./Button";

const References = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <div className="project-card__references references">
      <ul className="references__list">
        {links.map((link, index) => (
          <li key={index} className="references__item">
            <Button
              className="references__link"
              dark={link.type === "live"}
              bordered={link.type !== "live"}
              href={link.href}
            >
              {link.text}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
