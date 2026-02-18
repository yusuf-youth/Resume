import React from "react";
import { CLASS_STATES, NAV_ITEMS } from "../script/constants";
import useActiveSection from "../hooks/useActiveSection";
import { useLanguage } from "../hooks/useLanguage";

const Nav = () => {
  const { isEN } = useLanguage();
  const activeIndex = useActiveSection(NAV_ITEMS);

  const getActiveClass = (index) => {
    return index === activeIndex ? CLASS_STATES.isActive : "";
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_ITEMS.map((item, index) => (
          <li key={index} className="nav__item">
            <a
              href={item.href}
              className={`nav__link ${getActiveClass(index)}`}
              aria-label={item.accessibilityText(isEN)}
              title={item.accessibilityText(isEN)}
            >
              <span className="visually-hidden">
                {item.accessibilityText(isEN)}
              </span>
              {index === activeIndex ? item.activeIcon : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
