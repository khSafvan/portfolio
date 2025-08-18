import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClass = styles["btn"];
  const variantClass = styles[`btn--${variant}`] || "";
  const sizeClass = styles[`btn--${size}`] || "";
  const disabledClass = disabled ? styles["btn--disabled"] : "";

  const combinedClassName =
    `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
