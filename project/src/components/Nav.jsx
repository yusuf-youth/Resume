import React from "react";
import { CLASS_STATES, NAV_ITEMS, TEXTS } from "../script/constants";
import useText from "../hooks/useText";
import useActiveSection from "../hooks/useActiveSection";

const Nav = () => {
  const text = useText(TEXTS.FLOATING_NAV);
  const activeIndex = useActiveSection(NAV_ITEMS);

  const getActiveClass = (index) =>
    index === activeIndex ? CLASS_STATES.isActive : "";

  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_ITEMS.map((item, index) => (
          <li key={index} className="nav__item">
            <a
              href={item.href}
              className={`nav__link ${getActiveClass(index)}`}
              aria-label={item.accessibilityText}
              title={item.accessibilityText}
            >
              <span className="visually-hidden">{item.accessibilityText}</span>
              {index === activeIndex ? item.activeIcon : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
