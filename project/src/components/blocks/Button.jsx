import React from "react";

const Button = (props) => {
  const { className } = props;
  const { href = "" } = props;
  const { dark = false } = props;
  const { bordered = false } = props;
  const { children } = props;
  const isDark = dark ? "button--dark" : "";
  const isBordered = bordered ? "button--dark-bordered" : "";

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
