import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import useText from "../hooks/useText";
import { TEXTS } from "../script/constants";

const SwitchButton = () => {
  const { language, toggleLanguage } = useLanguage();
  const text = useText(TEXTS.SWITCH_BUTTON);
  const isChecked = language === "UA";

  const onChange = (e) => {
    toggleLanguage(e.target.checked);
  };

  return (
    <div className="hero__switch-button switch-button" tabIndex="1">
      <label
        className="switch-button__container"
        aria-label={text.accessibilityText}
        title={text.accessibilityText}
      >
        <span className="visually-hidden">{text.accessibilityText}</span>
        <input
          type="checkbox"
          className="switch-button__input"
          checked={isChecked}
          onChange={onChange}
        />
        <span className="switch-button__track">
          <span className="switch-button__knob"></span>
        </span>
      </label>
      <span className="switch-button__label">{text.label}</span>
    </div>
  );
};

export default SwitchButton;
