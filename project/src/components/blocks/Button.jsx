import React from "react";
import { CLASS_STATES } from "../../script/constants";

const Button = (props) => {
  const { className } = props;
  const { href = "" } = props;
  const { dark = false } = props;
  const { bordered = false } = props;
  const { children } = props;
  const isDark = dark ? CLASS_STATES.buttonDark : "";
  const isBordered = bordered ? CLASS_STATES.buttonDarkBordered : "";

  return (
    <a
      className={`${className} button ${isDark} ${isBordered}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Button;
