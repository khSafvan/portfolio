import React, { useEffect } from "react";
import "./style.css";

function SystemWindow({ isOpen = 0, setIsOpen = () => {} }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(0);
      return () => {
        clearTimeout(timeout);
      };
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className={`popupWindow  ${isOpen ? "fade-in" : "fade-out"}`}
      onClick={(e) => e.stopPropagation()}
    ></div>
  );
}

export default SystemWindow;
