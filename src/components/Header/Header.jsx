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
      <div className="brand-and-nav">
        <a
          href="#home"
          className="logo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="brand">Binjan</span>
        </a>
        <nav className="nav">
          <a href="#services" className="nav-link">Services</a>
          <a href="#works" className="nav-link">Works</a>
          <a href="#notes" className="nav-link">Notes</a>
          <a href="#experience" className="nav-link">Experience</a>
        </nav>
      </div>

      <div className="contact-area">
        <a href="tel:+1313345678" className="phone">+001 (313) 345 678</a>
        <Button
          variant="outline"
          size="small"
          className="cta"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
