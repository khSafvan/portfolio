import { useContext } from "react";
import "./style.css";
import { CursorContext } from "../../contexts/cursorState";

const Header = () => {
  const { setButtonHovered } = useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

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

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="actionBtnWrapper"
      >
        Schedule a Call
      </div>
    </div>
  );
};

export default Header;
