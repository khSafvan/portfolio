import React, { useContext } from "react";
import "./style.css";
import { CursorContext } from "../../contexts/cursorState";

export default function StackSection() {
  const { isClicking, buttonHovered, setIsClicking, setButtonHovered } =
    useContext(CursorContext);
  return (
    <div className="myStackSection">
      <div className="burgerImgWrapper">
        <img
          draggable="false"
          style={{}}
          src="/burgerOutline.png"
          alt="Burger"
        />
      </div>
    </div>
  );
}
