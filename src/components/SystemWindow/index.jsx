import React, { useEffect } from "react";
import "./style.css";

function SystemWindow({ isOpen = false, setIsOpen = () => {} }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
      return () => {
        clearTimeout(timeout);
      };
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`popupWindow  ${isOpen ? "fade-in" : "fade-out"}`}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

export default SystemWindow;
