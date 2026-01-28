import React from "react";
import Button from "./Button";

const References = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <div className="project-card__references references">
      <ul className="references__list">
        {links.map(
          ({ modifierClass, isDark, isBordered, href, text }, index) => (
            <li key={index} className="references__item">
              <Button
                className={`references__link ${modifierClass}`}
                dark={isDark}
                bordered={isBordered}
                href={href}
              >
                {text}
              </Button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default References;
