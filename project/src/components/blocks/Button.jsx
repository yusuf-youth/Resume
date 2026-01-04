import React from "react";

function Button({
  className,
  href = "",
  dark = false,
  bordered = false,
  children,
}) {
  const modifiers = `
    ${dark ? "button--dark" : ""} ${bordered ? "button--dark-bordered" : ""}`;

  return (
    <a
      className={`${className} button ${modifiers}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Button;
