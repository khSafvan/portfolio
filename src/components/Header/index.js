import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="iconWrapper">
        <img
          draggable="false"
          style={{ userSelect: "none", pointerEvents: "none" }}
          src="/wolfLogo.png"
          width={64}
          height={64}
          alt="Nerdy Wolf"
        />
      </div>
      <div className="actionBtnWrapper">Schedule a Call</div>
    </div>
  );
};

export default Header;
