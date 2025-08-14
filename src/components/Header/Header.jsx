import React, { useContext } from "react";
import { CursorContext } from "../../contexts/cursorState";
import { Button } from "../ui";
import "./Header.css";

const Header = () => {
  const { setButtonHovered } = useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <header className="header">
      <a
        href="#home"
        className="logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          draggable="false"
          src="/wolfLogo.png"
          width={64}
          height={64}
          alt="Nerdy Wolf"
          className="logo-image"
        />
      </a>

      <Button
        variant="secondary"
        size="medium"
        className="cta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Schedule a Call
      </Button>
    </header>
  );
};

export default Header;
