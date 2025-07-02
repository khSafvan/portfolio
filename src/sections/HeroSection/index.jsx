import React, { useContext } from "react";
import InfiniteScrollBackground from "../../components/InfiniteScrollBackground";
import Header from "../../components/Header";
import "./style.css";
import SystemWindow from "../../components/SystemWindow";
import { CursorContext } from "../../contexts/cursorState";

export default function HeroSection() {
  const { isClicking, buttonHovered, setIsClicking, setButtonHovered } =
    useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <div className="landingSection">
      <InfiniteScrollBackground />
      <Header />
      <div className="devImgWrapper">
        <img
          draggable="false"
          style={{}}
          src="/dev8bitArt.png"
          alt="Developer"
        />
      </div>
      <SystemWindow />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="emailWrap"
      >
        khalifasafvan@yahoo.com
      </div>
      <div className="rightStatsWrapper">
        <div className="rightStats">ASK1</div>
        <div className="rightStats">ASK1</div>
        <div className="rightStats">ASK1</div>
      </div>
    </div>
  );
}
