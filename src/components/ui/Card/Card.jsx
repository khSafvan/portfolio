import React from "react";
import "./Card.css";

const Card = ({
  children,
  variant = "default",
  className = "",
  onClick,
  ...props
}) => {
  const baseClass = "card";
  const variantClass = `card--${variant}`;
  const clickableClass = onClick ? "card--clickable" : "";

  const combinedClassName =
    `${baseClass} ${variantClass} ${clickableClass} ${className}`.trim();

  return (
    <div className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
