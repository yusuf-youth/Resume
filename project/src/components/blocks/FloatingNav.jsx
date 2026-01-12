import React from "react";
import {
  CLASS_STATES,
  FLOATING_NAV_ITEMS,
  TEXTS,
} from "../../script/constants";
import useText from "../../hooks/useText";
import useActiveSection from "../../hooks/useActiveSection";

const FloatingNav = () => {
  const text = useText(TEXTS.FLOATING_NAV);
  const activeIndex = useActiveSection(FLOATING_NAV_ITEMS);

  const getActiveClass = (index) =>
    index === activeIndex ? CLASS_STATES.isActive : "";

  return (
    <nav className="floating-nav">
      <ul className="floating-nav__list">
        {FLOATING_NAV_ITEMS.map((item, index) => (
          <li key={index} className="floating-nav__item">
            <a
              href={item.href}
              className={`floating-nav__link ${getActiveClass(index)}`}
              aria-label={text.data[index]}
              title={text.data[index]}
            >
              <span className="visually-hidden">{text.data[index]}</span>
              {index === activeIndex ? item.activeIcon : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNav;
