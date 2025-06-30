import React from "react";
import "./style.css";

export default function StackSection({
  isClicking = false,
  setIsClicking = () => {},
  buttonHovered = false,
  setButtonHovered = () => {},
}) {
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
